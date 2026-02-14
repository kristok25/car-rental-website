import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Button,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Typography,
  Tooltip,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import gbFlag from '../assets/flags/gb.svg';
import alFlag from '../assets/flags/al.svg';
import type {
  ButtonProps,
  IconButtonProps,
  Lang,
  Props,
} from '../types/languageTypes';

export default function LanguageSwitcher({
  withLabel = true,
  buttonProps,
  onChanged,
  showFlag = true,
}: Readonly<Props>) {
  const { t, i18n } = useTranslation();
  const [langAnchorEl, setLangAnchorEl] = useState<null | HTMLElement>(null);

  const handleLanguageChange = (newLanguage: Lang) => {
    if (i18n && typeof i18n.changeLanguage === 'function') {
      i18n.changeLanguage(newLanguage);
    } else if ((globalThis as unknown as { i18n?: { changeLanguage: (l: string) => void } }).i18n?.changeLanguage) {
      (globalThis as unknown as { i18n: { changeLanguage: (l: string) => void } }).i18n.changeLanguage(newLanguage);
    }
    setLangAnchorEl(null);
    localStorage.setItem('language', newLanguage);
    onChanged?.(newLanguage);
  };

  const openLangMenu = (e: React.MouseEvent<HTMLElement>) =>
    setLangAnchorEl(e.currentTarget);
  const closeLangMenu = () => setLangAnchorEl(null);

  const lang = (i18n.resolvedLanguage || i18n.language || 'sq').toLowerCase();
  const isEnglish = lang.startsWith('en');
  const isAlbanian = lang.startsWith('sq');
  const currentFlag = isEnglish ? gbFlag : alFlag;
  const currentAlt = isEnglish ? 'English' : 'Albanian';
  const currentLangName = isEnglish ? t('english') : t('albanian');

  return (
    <>
      <Tooltip title={`${t('currentLanguage')}: ${currentLangName}`}>
        {withLabel ? (
          <Button
            onClick={openLangMenu}
            variant="text"
            size="small"
            startIcon={
              showFlag ? (
                <Avatar
                  sx={{ width: 20, height: 20 }}
                  src={currentFlag}
                  alt={currentAlt}
                />
              ) : undefined
            }
            endIcon={<KeyboardArrowDownIcon fontSize="small" />}
            sx={{
              textTransform: 'none',
              minWidth: 0,
              color: 'rgba(255,255,255,0.9)',
              fontFamily: "'DM Sans', sans-serif",
              '&:hover': {
                backgroundColor: 'rgba(201, 169, 98, 0.1)',
                color: '#C9A962',
              },
              ...(buttonProps as ButtonProps)?.sx,
            }}
            {...(buttonProps as ButtonProps)}
          >
            {currentLangName}
          </Button>
        ) : (
          <IconButton
            onClick={openLangMenu}
            size="small"
            sx={{
              color: 'rgba(255,255,255,0.9)',
              '&:hover': {
                backgroundColor: 'rgba(201, 169, 98, 0.1)',
                color: '#C9A962',
              },
            }}
            {...(buttonProps as IconButtonProps)}
          >
            <Avatar
              sx={{ width: 24, height: 24 }}
              src={currentFlag}
              alt={currentAlt}
            />
          </IconButton>
        )}
      </Tooltip>

      <Menu
        anchorEl={langAnchorEl}
        open={Boolean(langAnchorEl)}
        onClose={closeLangMenu}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        slotProps={{
          paper: {
            sx: {
              backgroundColor: 'rgba(13, 13, 13, 0.98)',
              border: '1px solid rgba(201, 169, 98, 0.3)',
              mt: 1,
            },
          },
        }}
      >
        <MenuItem
          selected={isEnglish}
          onClick={() => handleLanguageChange('en')}
          sx={{
            color: isEnglish ? '#C9A962' : 'rgba(255,255,255,0.9)',
            fontFamily: "'DM Sans', sans-serif",
            '&:hover': {
              backgroundColor: 'rgba(201, 169, 98, 0.1)',
            },
            '&.Mui-selected': {
              backgroundColor: 'rgba(201, 169, 98, 0.15)',
              '&:hover': {
                backgroundColor: 'rgba(201, 169, 98, 0.2)',
              },
            },
          }}
        >
          <Avatar
            sx={{ width: 20, height: 20, mr: 1 }}
            src={gbFlag}
            alt="English"
          />
          <Typography variant="body2">{t('english')}</Typography>
        </MenuItem>
        <MenuItem
          selected={isAlbanian}
          onClick={() => handleLanguageChange('sq')}
          sx={{
            color: isAlbanian ? '#C9A962' : 'rgba(255,255,255,0.9)',
            fontFamily: "'DM Sans', sans-serif",
            '&:hover': {
              backgroundColor: 'rgba(201, 169, 98, 0.1)',
            },
            '&.Mui-selected': {
              backgroundColor: 'rgba(201, 169, 98, 0.15)',
              '&:hover': {
                backgroundColor: 'rgba(201, 169, 98, 0.2)',
              },
            },
          }}
        >
          <Avatar
            sx={{ width: 20, height: 20, mr: 1 }}
            src={alFlag}
            alt="Albanian"
          />
          <Typography variant="body2">{t('albanian')}</Typography>
        </MenuItem>
      </Menu>
    </>
  );
}
