import { Box, Typography, Container, Card, CardContent, CardActions, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import OptimizedImage from '../components/OptimizedImage';

export type CarInfo = {
  id: number;
  name: string;
  categoryKey: string;
  price: string;
  image: string;
  seats: number;
  transmissionKey: string;
  fuelKey: string;
  year: number;
};

// Using Unsplash images with optimized parameters
const cars: CarInfo[] = [
  {
    id: 1,
    name: 'Mercedes-Benz E-Class',
    categoryKey: 'luxurySedan',
    price: '€120/day',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop&q=85&auto=format',
    seats: 5,
    transmissionKey: 'automatic',
    fuelKey: 'petrol',
    year: 2023,
  },
  {
    id: 2,
    name: 'BMW 5 Series',
    categoryKey: 'executiveSedan',
    price: '€110/day',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop&q=85&auto=format',
    seats: 5,
    transmissionKey: 'automatic',
    fuelKey: 'petrol',
    year: 2023,
  },
  {
    id: 3,
    name: 'Audi Q7',
    categoryKey: 'premiumSUV',
    price: '€150/day',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop&q=85&auto=format',
    seats: 7,
    transmissionKey: 'automatic',
    fuelKey: 'diesel',
    year: 2024,
  },
  {
    id: 4,
    name: 'Porsche Cayenne',
    categoryKey: 'sportsSUV',
    price: '€180/day',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop&q=85&auto=format',
    seats: 5,
    transmissionKey: 'automatic',
    fuelKey: 'petrol',
    year: 2024,
  },
  {
    id: 5,
    name: 'Range Rover Sport',
    categoryKey: 'luxurySUV',
    price: '€170/day',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&h=600&fit=crop&q=85&auto=format',
    seats: 5,
    transmissionKey: 'automatic',
    fuelKey: 'diesel',
    year: 2023,
  },
  {
    id: 6,
    name: 'Tesla Model S',
    categoryKey: 'electricLuxury',
    price: '€140/day',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=600&fit=crop&q=85&auto=format',
    seats: 5,
    transmissionKey: 'automatic',
    fuelKey: 'electric',
    year: 2024,
  },
];

export default function Cars() {
  const { t } = useTranslation();
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '1234567890';

  const handleBook = (carName: string) => {
    const message = encodeURIComponent(t('cars.bookingMessage', { carName }));
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <Box sx={{ py: { xs: 5, md: 8 }, minHeight: '80vh' }}>
      <Container sx={{ px: { xs: 2, sm: 3 } }}>
        <Typography
          variant="overline"
          sx={{ color: '#C9A962', letterSpacing: 4, fontWeight: 600, display: 'block', mb: 2 }}
        >
          {t('cars.tagline')}
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.75rem' },
            fontWeight: 400,
            color: '#1a1a1a',
            mb: { xs: 4, md: 6 },
          }}
        >
          {t('cars.title')}
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
            gap: { xs: 2, md: 3 },
          }}
        >
          {cars.map((car) => {
            const categoryName = t(`cars.categories.${car.categoryKey}`);
            return (
              <Card
                key={car.id}
                elevation={0}
                sx={{
                  border: '1px solid rgba(201, 169, 98, 0.3)',
                  borderRadius: 2,
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: '#C9A962',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                  },
                }}
              >
                <OptimizedImage
                  src={car.image}
                  alt={`${car.name} - ${categoryName}`}
                  height={200}
                  objectFit="cover"
                  borderRadius={0}
                  priority={car.id <= 3}
                />
              <CardContent sx={{ py: 2 }}>
                <Typography variant="overline" sx={{ color: '#C9A962', fontSize: '0.7rem' }}>
                  {t(`cars.categories.${car.categoryKey}`)}
                </Typography>
                <Typography variant="h6" sx={{ fontFamily: "'Playfair Display', serif", mt: 0.5 }}>
                  {car.name}
                </Typography>
                <Typography variant="body2" sx={{ color: '#666', mt: 1 }}>
                  {t('cars.from')} {car.price}
                </Typography>
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 1,
                    mt: 2,
                    pt: 2,
                    borderTop: '1px solid rgba(201, 169, 98, 0.2)',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                    <PeopleIcon sx={{ fontSize: 18, color: '#C9A962' }} />
                    <Typography variant="caption" sx={{ color: '#666' }}>
                      {car.seats} {t('cars.seats')}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                    <SettingsIcon sx={{ fontSize: 18, color: '#C9A962' }} />
                    <Typography variant="caption" sx={{ color: '#666' }}>
                      {t(`cars.transmissionValues.${car.transmissionKey}`)}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                    <LocalGasStationIcon sx={{ fontSize: 18, color: '#C9A962' }} />
                    <Typography variant="caption" sx={{ color: '#666' }}>
                      {t(`cars.fuelValues.${car.fuelKey}`)}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                    <CalendarMonthIcon sx={{ fontSize: 18, color: '#C9A962' }} />
                    <Typography variant="caption" sx={{ color: '#666' }}>
                      {car.year}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
              <CardActions sx={{ px: 2, pb: 2 }}>
                <Button
                  fullWidth
                  variant="contained"
                  startIcon={<WhatsAppIcon />}
                  onClick={() => handleBook(car.name)}
                  sx={{
                    backgroundColor: '#25D366',
                    color: '#fff',
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 600,
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: '#20bd5a',
                    },
                  }}
                >
                  {t('cars.bookWhatsApp')}
                </Button>
              </CardActions>
            </Card>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
