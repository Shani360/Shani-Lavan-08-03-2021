import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { useHistory } from 'react-router-dom';
import { configRoutes } from '../configs/data';

function Navbar() {
  const history = useHistory();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClick = (event) => {
    switch(event.target.innerText){
      case configRoutes.paths[0].content:
        history.push(`/${configRoutes.paths[0].value}`);
        break;
      case configRoutes.paths[1].content:
        history.push(`/${configRoutes.paths[1].value}`);
        break;
      default:
        history.push(`/${configRoutes.paths[0].value}`);
    }
    handleClose();
  };
  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenu}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            Shopping Tracking
          </Typography>
          <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
              >
                <MenuItem onClick={handleClick} value={configRoutes.paths[0].value}>{configRoutes.paths[0].content}</MenuItem>
                <MenuItem onClick={handleClick} value={configRoutes.paths[1].value}>{configRoutes.paths[1].content}</MenuItem>
              </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Navbar;