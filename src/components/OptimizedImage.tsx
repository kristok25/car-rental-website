import { useState, useEffect } from 'react';
import { Box, Skeleton } from '@mui/material';

interface OptimizedImageProps {
  readonly src: string;
  readonly alt: string;
  readonly height?: number | string;
  readonly width?: string;
  readonly objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  readonly borderRadius?: number | string;
  readonly aspectRatio?: string;
  readonly priority?: boolean;
}

export default function OptimizedImage({
  src,
  alt,
  height = '100%',
  width = '100%',
  objectFit = 'cover',
  borderRadius = 0,
  aspectRatio,
  priority = false,
}: OptimizedImageProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    // Reset states when src changes
    setImageLoaded(false);
    setImageError(false);
    
    // Check if image is already cached/loaded
    const img = new Image();
    img.src = src;
    if (img.complete && img.naturalWidth > 0) {
      setImageLoaded(true);
    }
  }, [src]);

  const handleLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  const handleError = () => {
    setImageError(true);
    setImageLoaded(false);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width,
        height,
        borderRadius,
        overflow: 'hidden',
        backgroundColor: '#1a1a1a',
        aspectRatio: aspectRatio,
      }}
    >
      {imageError ? (
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
            color: 'rgba(255,255,255,0.5)',
            fontSize: '2rem',
          }}
        >
          🚗
        </Box>
      ) : (
        <>
          {!imageLoaded && (
            <Skeleton
              variant="rectangular"
              width="100%"
              height="100%"
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 1,
                backgroundColor: 'rgba(201, 169, 98, 0.1)',
              }}
            />
          )}
          <Box
            component="img"
            src={src}
            alt={alt}
            onLoad={handleLoad}
            onError={handleError}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            sx={{
              width: '100%',
              height: '100%',
              objectFit,
              display: 'block',
              position: 'relative',
              zIndex: 2,
              transition: 'opacity 0.3s ease',
              opacity: imageLoaded ? 1 : 0,
            }}
          />
        </>
      )}
    </Box>
  );
}
