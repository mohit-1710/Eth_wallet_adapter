import { WagmiProvider, useAccount } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { config } from './config'
import { Account } from './components/Account';
import { NetworkSwitcher } from './components/NetworkSwitcher';
import { SendTransaction } from './components/SendTransaction';
import { ConnectWallet } from './components/ConnectWallet';
import { Connect } from './components/Connect';
import { AppBar, Toolbar, Typography, Container, Grid, Box } from '@mui/material';
import WalletIcon from '@mui/icons-material/Wallet';

const queryClient = new QueryClient();

function AppContent() {
  const { isConnected } = useAccount();

  if (!isConnected) {
    return <Connect />;
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: '1px solid #333', padding: '0.5rem 0' }}>
          <Toolbar>
            <WalletIcon sx={{ mr: 2, fontSize: '2rem' }} />
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              Ethereum Wallet Dashboard
            </Typography>
            <ConnectWallet />
          </Toolbar>
        </AppBar>
      </Box>
      <Container sx={{ mt: 5 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <NetworkSwitcher />
            <Account />
          </Grid>
          <Grid item xs={12} md={7}>
            <SendTransaction />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <AppContent />
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default App
