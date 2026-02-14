import { Box, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function Home() {
  const { t } = useTranslation();
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '1234567890';
  const whatsappMessage = encodeURIComponent(t('home.whatsappMessage'));

  return (
    <Box>
      {/* Hero Section with Cover Image */}
      <Box
        sx={{
          minHeight: { xs: '75vh', sm: '80vh', md: '85vh' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          backgroundImage: 'url(https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1920&h=1080&fit=crop&q=85)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(13, 13, 13, 0.85) 0%, rgba(26, 26, 26, 0.75) 50%, rgba(45, 45, 45, 0.7) 100%)',
            pointerEvents: 'none',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 30% 50%, rgba(201, 169, 98, 0.12) 0%, transparent 50%)',
            pointerEvents: 'none',
          },
        }}
      >
        <Container sx={{ position: 'relative', zIndex: 1, px: { xs: 2, sm: 3 } }}>
          <Box sx={{ textAlign: 'center', maxWidth: 700, mx: 'auto' }}>
            <Typography
              variant="overline"
              sx={{ color: '#C9A962', letterSpacing: { xs: 2, md: 4 }, fontWeight: 600, display: 'block', mb: 2, fontSize: { xs: '0.7rem', sm: '0.75rem' } }}
            >
              {t('home.tagline')}
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontFamily: "'Playfair Display', serif",
                fontSize: { xs: '1.75rem', sm: '2.25rem', md: '3.5rem' },
                fontWeight: 400,
                color: '#fff',
                lineHeight: 1.2,
                mb: { xs: 2, md: 3 },
              }}
            >
              {t('home.title')}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: 'rgba(255,255,255,0.8)', fontSize: { xs: '0.95rem', md: '1.1rem' }, mb: { xs: 3, md: 4 }, lineHeight: 1.8, px: { xs: 0, sm: 1 } }}
            >
              {t('home.subtitle')}
            </Typography>
            <Box sx={{ display: 'flex', gap: { xs: 1.5, sm: 2 }, justifyContent: 'center', flexWrap: 'wrap', flexDirection: { xs: 'column', sm: 'row' } }}>
              <Button
                component={Link}
                to="/cars"
                variant="contained"
                startIcon={<DirectionsCarIcon />}
                sx={{
                  backgroundColor: '#C9A962',
                  color: '#0d0d0d',
                  px: { xs: 3, md: 4 },
                  py: 1.5,
                  width: { xs: '100%', sm: 'auto' },
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                  textTransform: 'none',
                  fontSize: '1rem',
                  '&:hover': {
                    backgroundColor: '#b89850',
                  },
                }}
              >
                {t('home.browseCars')}
              </Button>
              <Button
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                startIcon={<WhatsAppIcon />}
                sx={{
                  borderColor: '#25D366',
                  color: '#25D366',
                  px: { xs: 3, md: 4 },
                  py: 1.5,
                  width: { xs: '100%', sm: 'auto' },
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                  textTransform: 'none',
                  fontSize: '1rem',
                  '&:hover': {
                    borderColor: '#20bd5a',
                    backgroundColor: 'rgba(37, 211, 102, 0.08)',
                  },
                }}
              >
                {t('home.bookWhatsApp')}
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Features */}
      <Container sx={{ py: { xs: 5, md: 8 }, px: { xs: 2, sm: 3 } }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: { xs: 2, md: 4 } }}>
          {[
            { title: t('home.features.premiumFleet.title'), desc: t('home.features.premiumFleet.desc') },
            { title: t('home.features.easyBooking.title'), desc: t('home.features.easyBooking.desc') },
            { title: t('home.features.support.title'), desc: t('home.features.support.desc') },
          ].map((item, i) => (
            <Box
              key={i}
              sx={{
                p: { xs: 2, md: 3 },
                border: '1px solid rgba(201, 169, 98, 0.3)',
                borderRadius: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: '#C9A962',
                  transform: 'translateY(-4px)',
                },
              }}
            >
              <Typography variant="h6" sx={{ fontFamily: "'Playfair Display', serif", color: '#1a1a1a', mb: 1 }}>
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{ color: '#666', lineHeight: 1.7 }}>
                {item.desc}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>

      {/* Location Section */}
      <Box
        sx={{
          backgroundColor: '#0d0d0d',
          py: { xs: 5, md: 8 },
          borderTop: '1px solid rgba(201, 169, 98, 0.2)',
        }}
      >
        <Container sx={{ px: { xs: 2, sm: 3 } }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
              gap: { xs: 3, md: 6 },
              alignItems: 'center',
            }}
          >
            <Box>
              <Typography
                variant="overline"
                sx={{ color: '#C9A962', letterSpacing: { xs: 2, md: 4 }, fontWeight: 600, display: 'block', mb: 2, fontSize: { xs: '0.7rem', sm: '0.75rem' } }}
              >
                {t('location.title')}
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                  fontWeight: 400,
                  color: '#fff',
                  mb: 2,
                }}
              >
                {t('location.subtitle')}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <LocationOnIcon sx={{ color: '#C9A962', mt: 0.5, fontSize: { xs: 24, md: 28 } }} />
                  <Box>
                    <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', fontWeight: 600, mb: 0.5 }}>
                      {t('location.address')}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <AccessTimeIcon sx={{ color: '#C9A962', mt: 0.5, fontSize: { xs: 24, md: 28 } }} />
                  <Box>
                    <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', fontWeight: 600, mb: 0.5 }}>
                      {t('location.hours')}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Button
                href="https://maps.google.com/?q=123+Main+Street+Tirana+Albania"
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                startIcon={<LocationOnIcon />}
                sx={{
                  borderColor: '#C9A962',
                  color: '#C9A962',
                  px: { xs: 3, md: 4 },
                  py: 1.5,
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                  textTransform: 'none',
                  fontSize: '1rem',
                  '&:hover': {
                    borderColor: '#b89850',
                    backgroundColor: 'rgba(201, 169, 98, 0.1)',
                  },
                }}
              >
                {t('location.button')}
              </Button>
            </Box>
            <Box
              sx={{
                height: { xs: 300, md: 400 },
                borderRadius: 2,
                overflow: 'hidden',
                border: '1px solid rgba(201, 169, 98, 0.3)',
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.0!2d19.818!3d41.327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE5JzM3LjIiTiAxOcKwNDknMDQuOCJF!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CarRentalAgo Location"
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
