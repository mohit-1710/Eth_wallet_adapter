import { useAccount, useBalance, useDisconnect } from "wagmi";


export function Account() {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const { balance } = useBalance({
    address
  });

  return <div>
    <div>Account address: {address}</div>
    <div>Account balance: {balance}</div>

    <button onClick={() => disconnect()}>Disconnect</button>
  </div>
}
