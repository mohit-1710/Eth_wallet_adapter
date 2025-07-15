import { useConnect } from 'wagmi';
import { Button, Box, Typography } from '@mui/material';
import WalletIcon from '@mui/icons-material/Wallet';

export function Connect() {
  const { connectors, connect } = useConnect();

  const metamaskConnector = connectors.find(c => c.name === 'MetaMask');

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to Your Wallet
      </Typography>
      <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
        Connect your wallet to get started
      </Typography>
      <Button
        variant="contained"
        size="large"
        startIcon={<WalletIcon />}
        onClick={() => connect({ connector: metamaskConnector || connectors[0] })}
        sx={{
          py: 2,
          px: 4,
          fontSize: '1.25rem',
          borderRadius: '12px',
        }}
      >
        Connect Wallet
      </Button>
    </Box>
  );
}
