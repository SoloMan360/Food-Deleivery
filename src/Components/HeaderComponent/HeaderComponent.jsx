import React, { useEffect } from 'react';
import '../../css/HeaderComponent.css';
import headerLogo from '../../assets/Images/darktheme-logo.png';
// import headerLogo from '../../assets/Images/logo-normal.png';
import { Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link, useLocation } from 'react-router-dom';
import SignUpDialog from '../DialogBox/SignUpDialog';
const HeaderComponent = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const isMoreOpen = Boolean(anchorEl);
    const moreClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const menuClose = () => {
        setAnchorEl(null);
    };
    const location = useLocation();
    const [url, setUrl] = React.useState('');
    const [isDialogOpen, setIsDialog] = React.useState(false);

    const handleSignupOpen = () => {
        setIsDialog(true);
    };

    const handleSignupClose = () => {
        setIsDialog(false);
    };

    useEffect(() => {
        if (location.pathname === '/') {
            setUrl('')
            console.log('empty path!');
        }
        if (location.pathname === '/explore') {
            setUrl('explore')
            console.log('explore path!');
        }
        if (location.pathname === '/about') {
            setUrl('about')
            console.log('explore path!');
        }
    }, [location])
    return (
        <div className="container-fluid">
            <div className="header-wrapper row align-items-center">
                <div className="col-6 col-md-3 logo-image-container">
                    <img src={headerLogo} alt="Logo" />
                </div>
                <div className="col-6 col-md-9 header-button-wrapper d-none d-md-flex justify-content-end align-items-center">
                    <ul className="nav-list d-flex">
                        <li className={url === '' ? 'current-list' : 'nav-list-items'}>
                            <Link to={'./'} >
                                Home
                            </Link>
                        </li>
                        <li className={url === 'explore' ? 'current-list' : 'nav-list-items'}>
                            <Link to={'./explore'} >
                                Explore
                            </Link>
                        </li>
                        <li className={url === 'about' ? 'current-list' : 'nav-list-items'}>
                            <Link to={'./about'} >
                                About us
                            </Link>
                        </li>
                        {/* <li className={url === '' ? 'current-list' : 'nav-list-items'}>Blog</li>
                        <li className={url === '' ? 'current-list' : 'nav-list-items'}>Careers</li> */}
                    </ul>
                    <Button variant="contained" className="header-button" onClick={handleSignupOpen}>
                        Sign Up
                    </Button>
                </div>
                <div className="col-6 d-md-none d-flex align-items-center justify-content-end mobile-display-header">
                    <Button variant="contained" className="header-button" onClick={handleSignupOpen}>
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
                        <MenuItem onClick={menuClose} component={Link} to="/">Home</MenuItem>
                        <MenuItem onClick={menuClose} component={Link} to="/explore">Explore</MenuItem>
                        <MenuItem onClick={menuClose}>About us</MenuItem>
                        <MenuItem onClick={menuClose}>Blog</MenuItem>
                        <MenuItem onClick={menuClose}>Careers</MenuItem>
                    </Menu>
                    <SignUpDialog
                        handleSignupOpen={handleSignupOpen}
                        handleSignupClose={handleSignupClose}
                        isDialogOpen={isDialogOpen}
                    />
                </div>
            </div>
        </div>
    );
};

export default HeaderComponent;
