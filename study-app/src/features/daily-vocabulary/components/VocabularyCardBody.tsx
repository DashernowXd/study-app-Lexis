import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  Chip,
  Tooltip,
  Fade,
  Button
} from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { motion, AnimatePresence } from 'framer-motion';
import type { DictionaryEntry } from '../types';

interface ExampleItem {
  sentence: string;
  source: string;
  translationEs?: string;
  note?: string;
}

interface VocabularyCardBodyProps {
  dictEntry: DictionaryEntry;
  targetWord: string;
  fadeKey: number;
  nativeAudioUrl: string | null;
  isPlayingAudio: boolean;
  activeMeaningIndex: number;
  activeExampleIndex: number;
  allExamples: ExampleItem[];
  activeExample?: ExampleItem;
  renderedSentence: React.ReactNode;
  hideWordInSentence: boolean;
  styles: Record<string, SxProps<Theme>>;
  onPlayAudio: (customText?: string) => void;
  onSelectMeaning: (idx: number) => void;
  onToggleHideWord: () => void;
  onSearchWord: (word: string) => void;
  onPrevExample: () => void;
  onNextExample: () => void;
  onPrevWord: () => void;
  onNextWord: () => void;
}

export const VocabularyCardBody: React.FC<VocabularyCardBodyProps> = ({
  dictEntry,
  targetWord,
  fadeKey,
  nativeAudioUrl,
  isPlayingAudio,
  activeMeaningIndex,
  activeExampleIndex,
  allExamples,
  activeExample,
  renderedSentence,
  hideWordInSentence,
  styles,
  onPlayAudio,
  onSelectMeaning,
  onToggleHideWord,
  onSearchWord,
  onPrevExample,
  onNextExample,
  onPrevWord,
  onNextWord
}) => {
  const activeMeaning = dictEntry.meanings[activeMeaningIndex] || dictEntry.meanings[0];

  return (
    <Fade in key={`content-${targetWord}-${fadeKey}`} timeout={300}>
      <Box>
        {/* Word, Phonetic, and Audio Controls */}
        <Box sx={styles.wordTitleBox}>
          <Typography variant="h3" sx={styles.wordTitle}>
            {dictEntry.word}
          </Typography>

          {dictEntry.phonetic && (
            <Typography sx={styles.phonetic}>
              {dictEntry.phonetic}
            </Typography>
          )}

          <Tooltip title={nativeAudioUrl ? "Play native pronunciation MP3 (Oxford/Google)" : "Listen via voice synthesis"}>
            <IconButton
              size="medium"
              color="primary"
              onClick={() => onPlayAudio()}
              disabled={isPlayingAudio}
              aria-label="Reproducir pronunciación del término"
              sx={{ bgcolor: 'rgba(20, 33, 117, 0.08)' }}
            >
              <VolumeUpIcon />
            </IconButton>
          </Tooltip>

          {nativeAudioUrl && (
            <Chip
              label="Native Audio"
              size="small"
              color="secondary"
              variant="outlined"
              sx={{ fontSize: '0.68rem', fontWeight: 600 }}
            />
          )}
        </Box>

        {/* Origin / Etymology */}
        {dictEntry.origin && (
          <Typography variant="caption" sx={{ display: 'block', fontStyle: 'italic', color: 'text.secondary', mt: 0.5, mb: 1.5 }}>
            Origin: {dictEntry.origin}
          </Typography>
        )}

        {/* Part of Speech Switcher */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, my: 1.5, flexWrap: 'wrap' }}>
          <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.secondary', textTransform: 'uppercase' }}>
            Parts of Speech:
          </Typography>
          {dictEntry.meanings.map((meaning, idx) => (
            <Chip
              key={`pos-${meaning.partOfSpeech}-${meaning.definitions[0]?.definition.slice(0, 20) || 'def'}`}
              label={meaning.partOfSpeech}
              size="small"
              color={idx === activeMeaningIndex ? 'primary' : 'default'}
              variant={idx === activeMeaningIndex ? 'filled' : 'outlined'}
              onClick={() => onSelectMeaning(idx)}
              sx={{ cursor: 'pointer', fontWeight: 600 }}
            />
          ))}
        </Box>

        {/* Active Definition */}
        {activeMeaning?.definitions[0] && (
          <Box sx={{ mb: 2 }}>
            <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary' }}>
              {activeMeaning.definitions[0].definition}
            </Typography>
          </Box>
        )}

        {/* Dynamic Example Box */}
        <Fade in key={`ex-${activeExampleIndex}-${fadeKey}`} timeout={250}>
          <Box sx={styles.sentenceContainer}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <MenuBookIcon sx={{ fontSize: 18, color: 'secondary.main' }} />
                <Typography variant="caption" sx={{ fontWeight: 700, color: 'secondary.main' }}>
                  EXAMPLE {activeExampleIndex + 1} OF {allExamples.length} — {activeExample?.source?.toUpperCase()}
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Tooltip title="Listen to example sentence">
                  <IconButton
                    size="small"
                    color="secondary"
                    onClick={() => onPlayAudio(activeExample?.sentence)}
                    aria-label="Escuchar oración de ejemplo"
                  >
                    <VolumeUpIcon fontSize="small" />
                  </IconButton>
                </Tooltip>

                <Tooltip title={hideWordInSentence ? "Show word" : "Test yourself (Hide word in sentence)"}>
                  <IconButton
                    size="small"
                    onClick={onToggleHideWord}
                    color={hideWordInSentence ? 'secondary' : 'default'}
                    aria-label={hideWordInSentence ? "Mostrar palabra oculta" : "Ocultar palabra para practicar"}
                    sx={{
                      transition: 'all 0.2s ease',
                      bgcolor: hideWordInSentence ? 'rgba(0, 107, 95, 0.12)' : 'transparent',
                    }}
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.span
                        key={hideWordInSentence ? 'eye-off' : 'eye-on'}
                        initial={{ scale: 0.7, rotate: -25, opacity: 0 }}
                        animate={{ scale: 1, rotate: 0, opacity: 1 }}
                        exit={{ scale: 0.7, rotate: 25, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        style={{ display: 'inline-flex' }}
                      >
                        {hideWordInSentence ? <VisibilityOffIcon fontSize="small" /> : <VisibilityIcon fontSize="small" />}
                      </motion.span>
                    </AnimatePresence>
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>

            <Typography sx={styles.sentenceText}>
              "{renderedSentence}"
            </Typography>

            {activeExample?.translationEs && (
              <Typography sx={{ mt: 1, fontStyle: 'italic', color: 'text.secondary', fontSize: '0.92rem' }}>
                🇪🇸 {activeExample.translationEs}
              </Typography>
            )}

            {activeExample?.note && (
              <Typography variant="caption" sx={{ display: 'block', mt: 1, color: 'text.secondary' }}>
                💡 {activeExample.note}
              </Typography>
            )}
          </Box>
        </Fade>

        {/* Synonyms & Antonyms from Dictionary API */}
        {activeMeaning?.synonyms && activeMeaning.synonyms.length > 0 && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8, flexWrap: 'wrap', mb: 1.5 }}>
            <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.secondary' }}>
              Synonyms:
            </Typography>
            {activeMeaning.synonyms.slice(0, 5).map((syn) => (
              <Chip
                key={`syn-${syn}`}
                label={syn}
                size="small"
                variant="outlined"
                onClick={() => onSearchWord(syn)}
                sx={{ fontSize: '0.72rem', cursor: 'pointer', '&:hover': { bgcolor: 'primary.light', color: 'white' } }}
              />
            ))}
          </Box>
        )}

        {activeMeaning?.antonyms && activeMeaning.antonyms.length > 0 && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8, flexWrap: 'wrap', mb: 1.5 }}>
            <Typography variant="caption" sx={{ fontWeight: 700, color: 'error.main' }}>
              Antonyms:
            </Typography>
            {activeMeaning.antonyms.slice(0, 5).map((ant) => (
              <Chip
                key={`ant-${ant}`}
                label={ant}
                size="small"
                variant="outlined"
                color="error"
                onClick={() => onSearchWord(ant)}
                sx={{ fontSize: '0.72rem', cursor: 'pointer' }}
              />
            ))}
          </Box>
        )}

        {/* Action Controls & Footer */}
        <Box sx={styles.footer}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.secondary' }}>
              Examples ({activeExampleIndex + 1}/{allExamples.length}):
            </Typography>
            <IconButton size="small" onClick={onPrevExample} title="Previous example" aria-label="Ejemplo anterior">
              <NavigateBeforeIcon fontSize="small" />
            </IconButton>
            <Button
              size="small"
              variant="outlined"
              color="secondary"
              startIcon={<AutorenewIcon />}
              onClick={onNextExample}
              sx={{ textTransform: 'none', borderRadius: '8px', fontSize: '0.8rem' }}
            >
              Next Example
            </Button>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="caption" color="text.secondary">
              Word navigation:
            </Typography>
            <IconButton size="small" onClick={onPrevWord} title="Previous daily word" aria-label="Palabra diaria anterior">
              <NavigateBeforeIcon />
            </IconButton>
            <IconButton size="small" onClick={onNextWord} color="primary" title="Next daily word" aria-label="Siguiente palabra diaria">
              <NavigateNextIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Fade>
  );
};
