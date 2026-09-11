import { useState, useRef, useCallback, useEffect } from 'react';

export type RecorderState = 'idle' | 'recording' | 'paused' | 'stopped';

export interface UseAudioRecorderReturn {
  recorderState: RecorderState;
  elapsedSeconds: number;
  audioUrl: string | null;
  audioBlob: Blob | null;
  errorMessage: string | null;
  startRecording: () => Promise<void>;
  pauseRecording: () => void;
  resumeRecording: () => void;
  stopRecording: () => void;
  resetRecording: () => void;
  isSupported: boolean;
}

export function useAudioRecorder(): UseAudioRecorderReturn {
  const [recorderState, setRecorderState] = useState<RecorderState>('idle');
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const timerIntervalRef = useRef<number | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const isSupported = typeof window !== 'undefined' && 
    navigator.mediaDevices !== undefined && 
    typeof MediaRecorder !== 'undefined';

  const stopTimer = useCallback(() => {
    if (timerIntervalRef.current !== null) {
      window.clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = null;
    }
  }, []);

  const clearStream = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
  }, []);

  const resetRecording = useCallback(() => {
    stopTimer();
    clearStream();
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      try {
        mediaRecorderRef.current.stop();
      } catch {
        // ignore
      }
    }
    mediaRecorderRef.current = null;
    audioChunksRef.current = [];

    if (audioUrl) {
      URL.revokeObjectURL(audioUrl);
    }

    setRecorderState('idle');
    setElapsedSeconds(0);
    setAudioUrl(null);
    setAudioBlob(null);
    setErrorMessage(null);
  }, [audioUrl, stopTimer, clearStream]);

  const startRecording = useCallback(async () => {
    if (!isSupported) {
      setErrorMessage('Audio recording is not supported in this browser environment.');
      return;
    }

    try {
      resetRecording();
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      // Determine supported mime type
      const mimeType = MediaRecorder.isTypeSupported('audio/webm;codecs=opus')
        ? 'audio/webm;codecs=opus'
        : MediaRecorder.isTypeSupported('audio/ogg;codecs=opus')
          ? 'audio/ogg;codecs=opus'
          : 'audio/mp4';

      const mediaRecorder = new MediaRecorder(stream, { mimeType });
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event: BlobEvent) => {
        if (event.data && event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const combinedBlob = new Blob(audioChunksRef.current, { type: mimeType });
        const url = URL.createObjectURL(combinedBlob);
        setAudioBlob(combinedBlob);
        setAudioUrl(url);
        setRecorderState('stopped');
        clearStream();
      };

      mediaRecorder.start(200); // 200ms slice
      setRecorderState('recording');
      setErrorMessage(null);

      // Start elapsed timer
      timerIntervalRef.current = window.setInterval(() => {
        setElapsedSeconds(prev => prev + 1);
      }, 1000);

    } catch (err: unknown) {
      clearStream();
      const message = err instanceof Error 
        ? (err.name === 'NotAllowedError' 
            ? 'Microphone permission denied. Please allow microphone access in your browser settings.' 
            : err.message)
        : 'Could not initialize microphone recording.';
      setErrorMessage(message);
      setRecorderState('idle');
    }
  }, [isSupported, resetRecording, clearStream]);

  const pauseRecording = useCallback(() => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.pause();
      stopTimer();
      setRecorderState('paused');
    }
  }, [stopTimer]);

  const resumeRecording = useCallback(() => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'paused') {
      mediaRecorderRef.current.resume();
      timerIntervalRef.current = window.setInterval(() => {
        setElapsedSeconds(prev => prev + 1);
      }, 1000);
      setRecorderState('recording');
    }
  }, []);

  const stopRecording = useCallback(() => {
    stopTimer();
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
    }
  }, [stopTimer]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      stopTimer();
      clearStream();
      if (audioUrl) {
        URL.revokeObjectURL(audioUrl);
      }
    };
  }, [stopTimer, clearStream, audioUrl]);

  return {
    recorderState,
    elapsedSeconds,
    audioUrl,
    audioBlob,
    errorMessage,
    startRecording,
    pauseRecording,
    resumeRecording,
    stopRecording,
    resetRecording,
    isSupported,
  };
}
