import { Component, type ErrorInfo, type ReactNode } from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import ReplayIcon from '@mui/icons-material/Replay';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

/**
 * Production-ready Error Boundary following frontend-expert standards.
 * Catches unhandled rendering errors and displays a resilient fallback UI.
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public override state: ErrorBoundaryState = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  public override componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('[ErrorBoundary caught error]:', error, errorInfo);
  }

  private handleReset = (): void => {
    this.setState({ hasError: false, error: null });
  };

  private handleReload = (): void => {
    window.location.reload();
  };

  public override render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <Box
          role="alert"
          aria-live="assertive"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '400px',
            p: 3,
            bgcolor: '#f8f9ff',
          }}
        >
          <Paper
            elevation={0}
            sx={{
              maxWidth: 520,
              width: '100%',
              p: 4,
              borderRadius: 3,
              textAlign: 'center',
              border: '1px solid rgba(186, 26, 26, 0.15)',
              bgcolor: '#ffffff',
              boxShadow: '0 8px 32px rgba(20, 33, 117, 0.06)',
            }}
          >
            <Box
              sx={{
                width: 56,
                height: 56,
                borderRadius: '50%',
                bgcolor: 'rgba(186, 26, 26, 0.08)',
                color: '#ba1a1a',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 2,
              }}
            >
              <WarningAmberIcon sx={{ fontSize: 32 }} />
            </Box>

            <Typography variant="h6" sx={{ fontWeight: 800, color: '#142175', mb: 1 }}>
              Algo no salió como se esperaba
            </Typography>

            <Typography variant="body2" sx={{ color: '#454651', mb: 3, lineHeight: 1.6 }}>
              Se produjo un error al cargar este módulo de estudio. Puedes reintentar la operación o recargar la página.
            </Typography>

            <Box sx={{ display: 'flex', gap: 1.5, justifyContent: 'center' }}>
              <Button
                variant="outlined"
                startIcon={<ReplayIcon />}
                onClick={this.handleReset}
                sx={{
                  borderColor: '#142175',
                  color: '#142175',
                  fontWeight: 700,
                  borderRadius: 2,
                  textTransform: 'none',
                }}
              >
                Reintentar
              </Button>
              <Button
                variant="contained"
                onClick={this.handleReload}
                sx={{
                  bgcolor: '#006b5f',
                  fontWeight: 700,
                  borderRadius: 2,
                  textTransform: 'none',
                  '&:hover': { bgcolor: '#005349' },
                }}
              >
                Recargar página
              </Button>
            </Box>
          </Paper>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
