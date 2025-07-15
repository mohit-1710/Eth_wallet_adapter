import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { Button, Chip, Menu, MenuItem, Avatar } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';

function shortAddress(address) {
  if (!address) return '';
  return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
}

export function ConnectWallet() {
  const { address, isConnected } = useAccount();
  const { connectors, connect } = useConnect();
  const { disconnect } = useDisconnect();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (isConnected) {
    return (
      <div>
        <Chip
          avatar={<Avatar sx={{ width: 32, height: 32 }}>{address[2]}</Avatar>}
          label={shortAddress(address)}
          onClick={handleMenu}
          onDelete={handleMenu}
          deleteIcon={<KeyboardArrowDownIcon />}
          variant="outlined"
          sx={{
            fontSize: '1.1rem',
            p: 2.5,
            borderRadius: '12px',
          }}
        />
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => disconnect()} sx={{ fontSize: '1.1rem' }}>Disconnect</MenuItem>
        </Menu>
      </div>
    );
  }

  // This part is not rendered in the new flow, but kept for completeness
  const metamaskConnector = connectors.find(c => c.name === 'MetaMask');
  return (
    <Button
      variant="contained"
      onClick={() => connect({ connector: metamaskConnector || connectors[0] })}
    >
      Connect Wallet
    </Button>
  );
}
