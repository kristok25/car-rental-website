import { Box, Typography, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <Box sx={{ py: { xs: 5, md: 8 }, minHeight: '80vh' }}>
      <Container sx={{ px: { xs: 2, sm: 3 } }}>
        <Typography
          variant="overline"
          sx={{ color: '#C9A962', letterSpacing: 4, fontWeight: 600, display: 'block', mb: 2 }}
        >
          {t('about.tagline')}
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontSize: { xs: '2rem', md: '2.75rem' },
            fontWeight: 400,
            color: '#1a1a1a',
            mb: 4,
          }}
        >
          {t('about.title')}
        </Typography>
        <Box sx={{ maxWidth: 720 }}>
          <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.9, mb: 3, fontSize: { xs: '0.95rem', md: '1rem' } }}>
            {t('about.paragraph1')}
          </Typography>
          <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.9, mb: 3, fontSize: { xs: '0.95rem', md: '1rem' } }}>
            {t('about.paragraph2')}
          </Typography>
          <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '0.95rem', md: '1rem' } }}>
            {t('about.paragraph3')}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
