import { useAccount, useBalance } from "wagmi";
import { Card, CardContent, Typography, Box, Chip } from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

export function Account() {
  const { address, chainId, isConnected } = useAccount()
  const { data: balance } = useBalance({
    address,
    chainId,
  })

  if (!isConnected) return null;

  return (
    <Card sx={{ p: 1 }}>
      <CardContent>
        <Typography variant="h4" component="div" gutterBottom>
          Balance
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography variant="h5">
            <Chip
              icon={<AccountBalanceWalletIcon sx={{ fontSize: '2rem !important' }} />}
              label={`${balance?.formatted} ${balance?.symbol}`}
              color="primary"
              sx={{ fontSize: '1.5rem', p: 3 }}
            />
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}
