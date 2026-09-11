import React from 'react';
import {
  Box,
  Typography,
  Chip,
  IconButton,
  Popover
} from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import type { ReadingArticle, GlossaryTerm } from '../types';

interface ReadingArticleReaderProps {
  currentArticle: ReadingArticle;
  fontSizeOffset: number;
  isWarm: boolean;
  selectedGlossary: GlossaryTerm | null;
  popoverAnchor: HTMLElement | null;
  onOpenGlossary: (event: React.MouseEvent<HTMLElement>, key: string) => void;
  onCloseGlossary: () => void;
  onSpeakWord: (word: string) => void;
}

export const ReadingArticleReader: React.FC<ReadingArticleReaderProps> = ({
  currentArticle,
  fontSizeOffset,
  isWarm,
  selectedGlossary,
  popoverAnchor,
  onOpenGlossary,
  onCloseGlossary,
  onSpeakWord
}) => {
  return (
    <>
      {/* Article Header */}
      <Box sx={{ mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#006b5f', mb: 0.5 }}>
          <VerifiedIcon fontSize="small" />
          <Typography variant="caption" sx={{ fontWeight: 600 }}>{currentArticle.subtitle}</Typography>
        </Box>
        <Typography variant="h5" sx={{ fontWeight: 800, color: isWarm ? '#3a2b16' : '#142175', lineHeight: 1.3 }}>
          {currentArticle.title}
        </Typography>
      </Box>

      {/* Article Body with Paragraph Numbers and Interactive Glossary */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5, mb: 4 }}>
        {currentArticle.paragraphs.map(para => (
          <Box key={para.id} sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
            <Box
              sx={{
                width: 26,
                height: 26,
                borderRadius: '50%',
                bgcolor: isWarm ? '#e8decb' : '#e6eeff',
                color: isWarm ? '#594a32' : '#2e3a8c',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 12,
                fontWeight: 700,
                shrink: 0,
                mt: 0.5
              }}
            >
              {para.id}
            </Box>
            <Typography
              component="div"
              sx={{
                fontSize: 16 + fontSizeOffset,
                lineHeight: 1.8,
                flex: 1
              }}
            >
              {para.textParts.map((part, pIdx) => {
                if (!part.glossaryKey) {
                  return <span key={pIdx}>{part.text}</span>;
                }
                return (
                  <Box
                    component="button"
                    type="button"
                    key={pIdx}
                    onClick={(e) => onOpenGlossary(e, part.glossaryKey!)}
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      px: 0.8,
                      py: 0.15,
                      mx: 0.3,
                      borderRadius: 1.2,
                      bgcolor: '#71f8e4',
                      color: '#00201c',
                      fontWeight: 700,
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: 'inherit',
                      lineHeight: 'inherit',
                      transition: 'transform 0.15s, background-color 0.15s',
                      '&:hover': {
                        bgcolor: '#4fdbc8',
                        transform: 'scale(1.03)'
                      }
                    }}
                  >
                    {part.text}
                    <Typography component="span" sx={{ fontSize: 11, ml: 0.4, opacity: 0.85 }}>ⓘ</Typography>
                  </Box>
                );
              })}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Interactive Glossary Popover */}
      <Popover
        open={Boolean(popoverAnchor && selectedGlossary)}
        anchorEl={popoverAnchor}
        onClose={onCloseGlossary}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        slotProps={{
          paper: {
            sx: {
              p: 2.5,
              maxWidth: 360,
              borderRadius: 3,
              boxShadow: '0 12px 28px rgba(20, 33, 117, 0.18)',
              border: '1px solid rgba(20, 33, 117, 0.1)'
            }
          }
        }}
      >
        {selectedGlossary && (
          <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#142175' }}>
                  {selectedGlossary.word}
                </Typography>
                <IconButton
                  size="small"
                  onClick={() => onSpeakWord(selectedGlossary.word)}
                  aria-label={`Pronunciar palabra en inglés ${selectedGlossary.word}`}
                  sx={{ color: '#006b5f', p: 0.5 }}
                >
                  <VolumeUpIcon fontSize="small" />
                </IconButton>
              </Box>
              <Chip label={selectedGlossary.partOfSpeech} size="small" sx={{ fontSize: 11, height: 22, fontWeight: 600 }} />
            </Box>
            {selectedGlossary.phonetic && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#006b5f', mb: 1 }}>
                <Typography variant="caption" sx={{ fontFamily: 'monospace', fontWeight: 600 }}>
                  {selectedGlossary.phonetic}
                </Typography>
              </Box>
            )}
            <Typography variant="body2" sx={{ mb: 1.5, color: '#333', lineHeight: 1.5 }}>
              {selectedGlossary.definition}
            </Typography>
            <Box sx={{ p: 1.2, bgcolor: '#f4f6fc', borderRadius: 1.5, borderLeft: '3px solid #142175' }}>
              <Typography variant="caption" sx={{ fontStyle: 'italic', color: '#454651', display: 'block' }}>
                "{selectedGlossary.example}"
              </Typography>
            </Box>
          </Box>
        )}
      </Popover>
    </>
  );
};
