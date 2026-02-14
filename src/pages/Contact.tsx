import { Box, Typography, Container, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { WhatsApp as WhatsAppIcon } from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function Contact() {
  const { t } = useTranslation();
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '1234567890';
  const whatsappMessage = encodeURIComponent(t('contact.message'));

  return (
    <Box sx={{ py: { xs: 5, md: 8 }, minHeight: '80vh' }}>
      <Container sx={{ px: { xs: 2, sm: 3 } }}>
        <Typography
          variant="overline"
          sx={{ color: '#C9A962', letterSpacing: 4, fontWeight: 600, display: 'block', mb: 2 }}
        >
          {t('contact.tagline')}
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.75rem' },
            fontWeight: 400,
            color: '#1a1a1a',
            mb: 6,
          }}
        >
          {t('contact.title')}
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: { xs: 2, md: 4 },
            maxWidth: 800,
            mb: { xs: 4, md: 6 },
          }}
        >
          <Box
            sx={{
              p: { xs: 2, md: 3 },
              border: '1px solid rgba(201, 169, 98, 0.3)',
              borderRadius: 2,
              textAlign: 'center',
            }}
          >
            <WhatsAppIcon sx={{ fontSize: { xs: 32, md: 40 }, color: '#25D366', mb: 1 }} />
            <Typography variant="h6" sx={{ fontFamily: "'Playfair Display', serif", mb: 1 }}>
              {t('contact.whatsapp.title')}
            </Typography>
            <Typography variant="body2" sx={{ color: '#666', mb: 2 }}>
              {t('contact.whatsapp.desc')}
            </Typography>
            <Button
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              fullWidth
              sx={{
                borderColor: '#25D366',
                color: '#25D366',
                '&:hover': { borderColor: '#20bd5a', backgroundColor: 'rgba(37, 211, 102, 0.08)' },
              }}
            >
              {t('contact.whatsapp.button')}
            </Button>
          </Box>
          <Box
            sx={{
              p: 3,
              border: '1px solid rgba(201, 169, 98, 0.3)',
              borderRadius: 2,
              textAlign: 'center',
            }}
          >
            <LocalPhoneIcon sx={{ fontSize: { xs: 32, md: 40 }, color: '#C9A962', mb: 1 }} />
            <Typography variant="h6" sx={{ fontFamily: "'Playfair Display', serif", mb: 1 }}>
              {t('contact.phone.title')}
            </Typography>
            <Typography variant="body2" sx={{ color: '#666', mb: 2 }}>
              +1 234 567 890
            </Typography>
            <Button
              href="tel:+1234567890"
              variant="outlined"
              fullWidth
              sx={{
                borderColor: '#C9A962',
                color: '#C9A962',
                '&:hover': { borderColor: '#b89850', backgroundColor: 'rgba(201, 169, 98, 0.08)' },
              }}
            >
              {t('contact.phone.button')}
            </Button>
          </Box>
          <Box
            sx={{
              p: 3,
              border: '1px solid rgba(201, 169, 98, 0.3)',
              borderRadius: 2,
              textAlign: 'center',
            }}
          >
            <EmailIcon sx={{ fontSize: { xs: 32, md: 40 }, color: '#C9A962', mb: 1 }} />
            <Typography variant="h6" sx={{ fontFamily: "'Playfair Display', serif", mb: 1 }}>
              {t('contact.email.title')}
            </Typography>
            <Typography variant="body2" sx={{ color: '#666', mb: 2 }}>
              info@carrentalago.com
            </Typography>
            <Button
              href="mailto:info@carrentalago.com"
              variant="outlined"
              fullWidth
              sx={{
                borderColor: '#C9A962',
                color: '#C9A962',
                '&:hover': { borderColor: '#b89850', backgroundColor: 'rgba(201, 169, 98, 0.08)' },
              }}
            >
              {t('contact.email.button')}
            </Button>
          </Box>
        </Box>

        {/* Location Section */}
        <Box
          sx={{
            mt: { xs: 4, md: 6 },
            pt: { xs: 4, md: 6 },
            borderTop: '1px solid rgba(201, 169, 98, 0.3)',
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontSize: { xs: '1.25rem', sm: '1.75rem', md: '2rem' },
              fontWeight: 400,
              color: '#1a1a1a',
              mb: 3,
              textAlign: 'center',
            }}
          >
            {t('contact.location.title')}
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
              gap: { xs: 3, md: 6 },
              alignItems: 'center',
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                <LocationOnIcon sx={{ color: '#C9A962', mt: 0.5, fontSize: { xs: 28, md: 32 } }} />
                <Box>
                  <Typography variant="h6" sx={{ fontFamily: "'Playfair Display', serif", color: '#1a1a1a', mb: 0.5 }}>
                    {t('contact.location.addressLabel')}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#666' }}>
                    {t('contact.location.address')}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                <AccessTimeIcon sx={{ color: '#C9A962', mt: 0.5, fontSize: { xs: 28, md: 32 } }} />
                <Box>
                  <Typography variant="h6" sx={{ fontFamily: "'Playfair Display', serif", color: '#1a1a1a', mb: 0.5 }}>
                    {t('contact.location.hoursLabel')}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#666' }}>
                    {t('contact.location.hours')}
                  </Typography>
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
                  px: 4,
                  py: 1.5,
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                  textTransform: 'none',
                  fontSize: '1rem',
                  mt: 1,
                  '&:hover': {
                    borderColor: '#b89850',
                    backgroundColor: 'rgba(201, 169, 98, 0.08)',
                  },
                }}
              >
                {t('contact.location.button')}
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
        </Box>
      </Container>
    </Box>
  );
}
