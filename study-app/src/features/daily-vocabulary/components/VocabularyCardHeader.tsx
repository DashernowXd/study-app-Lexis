import React from 'react';
import {
  Box,
  Chip,
  Button,
  TextField,
  InputAdornment,
  IconButton,
  Tooltip
} from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import SearchIcon from '@mui/icons-material/Search';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import type { EnglishLevel } from '@/types';

interface VocabularyCardHeaderProps {
  level: EnglishLevel;
  searchedWord: string | null;
  searchInput: string;
  isAutoPlaying: boolean;
  isBookmarked: boolean;
  searchBarStyle: SxProps<Theme>;
  headerStyle: SxProps<Theme>;
  onSearchInputChange: (val: string) => void;
  onSearchSubmit: (e: React.FormEvent) => void;
  onResetToDaily: () => void;
  onToggleAutoplay: () => void;
  onShuffle: () => void;
  onToggleBookmark: () => void;
}

export const VocabularyCardHeader: React.FC<VocabularyCardHeaderProps> = ({
  level,
  searchedWord,
  searchInput,
  isAutoPlaying,
  isBookmarked,
  searchBarStyle,
  headerStyle,
  onSearchInputChange,
  onSearchSubmit,
  onResetToDaily,
  onToggleAutoplay,
  onShuffle,
  onToggleBookmark
}) => {
  return (
    <Box sx={headerStyle}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
        <Chip
          icon={<AutoAwesomeIcon sx={{ fontSize: 16 }} />}
          label={searchedWord ? "DICTIONARY API LOOKUP" : "DAILY WORD OF THE DAY"}
          size="small"
          color="secondary"
          sx={{ fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.04em' }}
        />
        <Chip
          label={`${level} Level`}
          size="small"
          variant="outlined"
          color="primary"
          sx={{ fontWeight: 700 }}
        />
        {searchedWord && (
          <Button
            size="small"
            variant="text"
            startIcon={<AutorenewIcon fontSize="small" />}
            onClick={onResetToDaily}
            sx={{ textTransform: 'none', fontSize: '0.75rem', py: 0.2 }}
          >
            Return to Daily Word
          </Button>
        )}
      </Box>

      {/* Quick Word Search Bar */}
      <Box component="form" onSubmit={onSearchSubmit} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <TextField
          placeholder="Lookup in Dictionary API (e.g. hello)..."
          size="small"
          value={searchInput}
          onChange={(e) => onSearchInputChange(e.target.value)}
          sx={searchBarStyle}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton size="small" type="submit" edge="end" aria-label="Buscar palabra en diccionario">
                    <SearchIcon fontSize="small" />
                  </IconButton>
                </InputAdornment>
              )
            }
          }}
        />

        <Tooltip title={isAutoPlaying ? 'Pause constant change' : 'Resume constant change'}>
          <IconButton
            size="small"
            onClick={onToggleAutoplay}
            color={isAutoPlaying ? 'secondary' : 'default'}
            aria-label={isAutoPlaying ? 'Pausar rotación automática' : 'Reanudar rotación automática'}
          >
            {isAutoPlaying ? <PauseIcon fontSize="small" /> : <PlayArrowIcon fontSize="small" />}
          </IconButton>
        </Tooltip>

        <Tooltip title="Shuffle Word">
          <IconButton size="small" onClick={onShuffle} aria-label="Seleccionar palabra aleatoria">
            <ShuffleIcon fontSize="small" />
          </IconButton>
        </Tooltip>

        <Tooltip title={isBookmarked ? 'Bookmarked' : 'Bookmark word'}>
          <IconButton
            size="small"
            onClick={onToggleBookmark}
            color={isBookmarked ? 'warning' : 'default'}
            aria-label={isBookmarked ? 'Quitar palabra de favoritos' : 'Guardar palabra en favoritos'}
          >
            {isBookmarked ? <BookmarkIcon fontSize="small" /> : <BookmarkBorderIcon fontSize="small" />}
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};
