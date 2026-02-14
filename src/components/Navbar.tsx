import { useState } from 'react';
import { AppBar, Toolbar, Button, Box, Typography, IconButton, Drawer, List, ListItem } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const { t } = useTranslation();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.about'), path: '/about' },
    { label: t('nav.cars'), path: '/cars' },
    { label: t('nav.contact'), path: '/contact' },
  ];

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  const navLinkSx = {
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 500,
    textTransform: 'none' as const,
    fontSize: '1rem',
    '&:hover': {
      backgroundColor: 'rgba(201, 169, 98, 0.1)',
      color: '#C9A962',
    },
  };

  const navContent = (
    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
      {navItems.map((item) => (
        <Button
          key={item.path}
          component={Link}
          to={item.path}
          onClick={() => isMobile && setMobileOpen(false)}
          sx={{
            ...navLinkSx,
            color: location.pathname === item.path ? '#C9A962' : 'rgba(255,255,255,0.9)',
          }}
        >
          {item.label}
        </Button>
      ))}
      <LanguageSwitcher withLabel={false} showFlag={true} />
    </Box>
  );

  const drawerContent = (
    <Box
      sx={{
        width: 280,
        height: '100%',
        backgroundColor: '#0d0d0d',
        pt: 2,
        pb: 3,
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 2, mb: 2 }}>
        <IconButton onClick={handleDrawerToggle} sx={{ color: 'rgba(255,255,255,0.9)' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ px: 2 }}>
        {navItems.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ mb: 1 }}>
            <Button
              fullWidth
              component={Link}
              to={item.path}
              onClick={handleDrawerToggle}
              sx={{
                ...navLinkSx,
                justifyContent: 'flex-start',
                py: 1.5,
                px: 2,
                color: location.pathname === item.path ? '#C9A962' : 'rgba(255,255,255,0.9)',
              }}
            >
              {item.label}
            </Button>
          </ListItem>
        ))}
        <ListItem disablePadding sx={{ mt: 2, pl: 2 }}>
          <LanguageSwitcher withLabel={true} showFlag={true} />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: 'rgba(13, 13, 13, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(201, 169, 98, 0.2)',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', py: 1, px: { xs: 1, sm: 2 } }}>
          <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center', gap: 1, textDecoration: 'none', color: 'inherit' }}>
            <DirectionsCarIcon sx={{ color: '#C9A962', fontSize: { xs: 28, md: 32 } }} />
            <Typography variant="h6" sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, color: '#fff', fontSize: { xs: '1rem', md: '1.25rem' } }}>
              CarRentalAgo
            </Typography>
          </Box>
          {isMobile ? (
            <IconButton
              onClick={handleDrawerToggle}
              sx={{
                color: 'rgba(255,255,255,0.9)',
                '&:hover': { backgroundColor: 'rgba(201, 169, 98, 0.1)', color: '#C9A962' },
              }}
              aria-label="open menu"
            >
              <MenuIcon />
            </IconButton>
          ) : (
            navContent
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 280,
            borderLeft: '1px solid rgba(201, 169, 98, 0.2)',
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}
