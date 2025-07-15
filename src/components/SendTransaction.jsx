import { parseEther } from "viem";
import { useSendTransaction } from "wagmi"
import { Card, CardContent, Typography, TextField, Button, Box, CircularProgress, Chip } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";

export const SendTransaction = () => {
  const { data: hash, sendTransaction, isPending } = useSendTransaction();
  const [to, setTo] = useState('');
  const [value, setValue] = useState('');

  async function sendTx(e) {
    e.preventDefault();
    sendTransaction({ to, value: parseEther(value) });
  }

  return (
    <Card sx={{ p: 1 }}>
      <CardContent>
        <Typography variant="h4" component="div" gutterBottom>
          Send Transaction
        </Typography>
        <form onSubmit={sendTx}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <TextField
              id="to"
              label="To Address"
              variant="outlined"
              fullWidth
              required
              value={to}
              onChange={(e) => setTo(e.target.value)}
              InputLabelProps={{ style: { fontSize: '1.2rem' } }}
              inputProps={{ style: { fontSize: '1.2rem' } }}
            />
            <TextField
              id="value"
              label="Amount (ETH)"
              variant="outlined"
              fullWidth
              required
              value={value}
              onChange={(e) => setValue(e.target.value)}
              InputLabelProps={{ style: { fontSize: '1.2rem' } }}
              inputProps={{ style: { fontSize: '1.2rem' } }}
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              startIcon={isPending ? <CircularProgress size={24} /> : <SendIcon />}
              disabled={isPending}
              sx={{ py: 1.5, fontSize: '1.2rem' }}
            >
              {isPending ? 'Sending...' : 'Send'}
            </Button>
            {hash && <Chip label={`Transaction Hash: ${hash}`} sx={{ fontSize: '1rem' }} />}
          </Box>
        </form>
      </CardContent>
    </Card>
  )
}
