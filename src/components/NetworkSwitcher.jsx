import { useAccount, useSwitchChain } from 'wagmi'
import { Card, CardContent, Typography, FormControl, Select, MenuItem } from '@mui/material';

export function NetworkSwitcher() {
  const { chain } = useAccount()
  const { chains, switchChain } = useSwitchChain()

  return (
    <Card sx={{ mb: 4, p: 1 }}>
      <CardContent>
        <Typography variant="h4" component="div" gutterBottom>
          Network
        </Typography>
        <FormControl fullWidth>
          <Select
            value={chain?.id || ''}
            onChange={(e) => switchChain({ chainId: e.target.value })}
            disabled={!switchChain}
            sx={{ fontSize: '1.2rem' }}
          >
            {chains.map((chain) => (
              <MenuItem key={chain.id} value={chain.id} sx={{ fontSize: '1.2rem' }}>
                {chain.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </CardContent>
    </Card>
  )
}
