import React from 'react';
import { Box, Typography, Chip } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';

import logoImg from '@/assets/logo.jpg';

export interface LexisLogoProps {
  /** Size in pixels of the emblem (default: 36) */
  size?: number;
  /** Whether to display the text label next to emblem (default: true) */
  showText?: boolean;
  /** Custom subtitle or badge (default: 'PREMIUM') */
  badgeText?: string;
  /** Accessible text for logo image */
  alt?: string;
  /** Optional onClick handler */
  onClick?: () => void;
  sx?: SxProps<Theme>;
}

export const LexisLogo: React.FC<LexisLogoProps> = ({
  size = 36,
  showText = true,
  badgeText = 'PREMIUM',
  alt = 'Lexis Executive English - Logotipo y emblema institucional',
  onClick,
  sx
}) => {
  return (
    <Box
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      aria-label={onClick ? 'Ir al inicio de Lexis' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); } } : undefined}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 1.2,
        cursor: onClick ? 'pointer' : 'default',
        userSelect: 'none',
        textDecoration: 'none',
        ...sx
      }}
    >
      <Box
        component="img"
        src={logoImg}
        alt={alt}
        loading="eager"
        decoding="async"
        sx={{
          width: size,
          height: size,
          borderRadius: Math.max(6, Math.round(size * 0.22)),
          objectFit: 'cover',
          boxShadow: '0 4px 12px rgba(20, 33, 117, 0.2)',
          border: '1px solid rgba(109, 245, 225, 0.3)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          '&:hover': onClick ? {
            transform: 'scale(1.05)',
            boxShadow: '0 6px 16px rgba(0, 107, 95, 0.3)'
          } : undefined
        }}
      />

      {showText && (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 800,
              color: '#142175',
              letterSpacing: '-0.02em',
              lineHeight: 1,
              fontSize: Math.max(16, Math.round(size * 0.55))
            }}
          >
            Lexis
          </Typography>
          {badgeText && (
            <Chip
              label={badgeText}
              size="small"
              sx={{
                height: 18,
                fontSize: 9.5,
                fontWeight: 800,
                letterSpacing: '0.08em',
                bgcolor: 'rgba(0,107,95,0.12)',
                color: '#006b5f',
                borderRadius: 1
              }}
            />
          )}
        </Box>
      )}
    </Box>
  );
};

export default LexisLogo;
