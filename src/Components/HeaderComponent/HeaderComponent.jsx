import React from 'react';
import '../../css/HeaderComponent.css';
import headerLogo from '../../assets/Images/darktheme-logo.png';
import { Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
const HeaderComponent = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const isMoreOpen = Boolean(anchorEl);
    const moreClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const menuClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className="container-fluid">
            <div className="header-wrapper row align-items-center">
                <div className="col-6 col-md-3 logo-image-container">
                    <img src={headerLogo} alt="Logo" />
                </div>
                <div className="col-6 col-md-9 header-button-wrapper d-none d-md-flex justify-content-end align-items-center">
                    <ul className="nav-list d-flex">
                        <li>
                            <Link to={'./'} >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to={'./explore'} >
                                Explore
                            </Link>
                        </li>
                        <li>About us</li>
                        <li>Blog</li>
                        <li>Careers</li>
                    </ul>
                    <Button variant="contained" className="header-button">
                        Sign Up
                    </Button>
                </div>
                <div className="col-6 d-md-none d-flex align-items-center justify-content-end mobile-display-header">
                    <Button variant="contained" className="header-button">
                        Sign Up
                    </Button>
                    <IconButton aria-label="delete" className='menu-button' onClick={moreClick} >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={isMoreOpen}
                        onClose={menuClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={menuClose} to={'./'}>Home</MenuItem>
                        <MenuItem onClick={menuClose} to={'./explore'}>Explore</MenuItem>
                        <MenuItem onClick={menuClose}>About us</MenuItem>
                        <MenuItem onClick={menuClose}>Blog</MenuItem>
                        <MenuItem onClick={menuClose}>Careers</MenuItem>
                    </Menu>
                </div>
            </div>
        </div>
    );
};

export default HeaderComponent;
