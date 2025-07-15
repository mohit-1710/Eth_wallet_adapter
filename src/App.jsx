import './App.css'
import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { config } from './config'
import { WalletOptions } from './WalletOptions';
import { Account } from './Account';
const queryClient = new QueryClient();

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <WalletOptions />
        <Account />
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default App
