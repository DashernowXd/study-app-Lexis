/**
 * Web Audio API synthesizer for quiz interaction feedback.
 * Zero external audio assets; generates procedural acoustic cues.
 */

let audioCtx: AudioContext | null = null;

const getAudioContext = (): AudioContext | null => {
  if (typeof window === 'undefined') return null;

  if (!audioCtx) {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;

    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }

  if (audioCtx && audioCtx.state === 'suspended') {
    void audioCtx.resume();
  }

  return audioCtx;
};

export type QuizSoundType = 'success' | 'error';

/**
 * Plays synthesized auditory feedback for quiz answers.
 * - 'success': Uplifting ascending C5 (523.25Hz) -> G5 (783.99Hz) sine ramp.
 * - 'error': Low descending 175Hz -> 105Hz sawtooth buzz with rapid decay.
 */
export const playQuizSound = (type: QuizSoundType): void => {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.connect(gain);
  gain.connect(ctx.destination);

  if (type === 'success') {
    osc.type = 'sine';
    osc.frequency.setValueAtTime(523.25, now);
    osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.12);

    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);

    osc.start(now);
    osc.stop(now + 0.28);
  } else {
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(175, now);
    osc.frequency.linearRampToValueAtTime(105, now + 0.18);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

    osc.start(now);
    osc.stop(now + 0.22);
  }
};
