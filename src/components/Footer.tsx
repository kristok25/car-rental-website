import { Box, Typography, Container, IconButton } from '@mui/material';
import { useTranslation } from 'react-i18next';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  const { t } = useTranslation();
  const instagramUrl = import.meta.env.VITE_INSTAGRAM_URL || 'https://www.instagram.com/carrentalago';

  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        py: { xs: 3, md: 4 },
        backgroundColor: '#0d0d0d',
        borderTop: '1px solid rgba(201, 169, 98, 0.2)',
      }}
    >
      <Container sx={{ px: { xs: 2, sm: 3 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 2 }}>
          <DirectionsCarIcon sx={{ color: '#C9A962', fontSize: 24 }} />
          <Typography variant="body1" sx={{ fontFamily: "'Playfair Display', serif", color: '#fff', fontWeight: 600 }}>
            CarRentalAgo
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, mb: 2 }}>
          <IconButton
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t('footer.instagram')}
            sx={{
              color: 'rgba(255,255,255,0.7)',
              '&:hover': {
                color: '#C9A962',
                backgroundColor: 'rgba(201, 169, 98, 0.1)',
              },
            }}
          >
            <InstagramIcon />
          </IconButton>
        </Box>
        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', textAlign: 'center', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
          {t('footer.copyright', { year: new Date().getFullYear() })}
        </Typography>
      </Container>
    </Box>
  );
}
