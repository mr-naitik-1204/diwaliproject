import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';  // Import CloseIcon
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SettingsIcon from '@mui/icons-material/Settings'; // Import the Settings Icon

const pages = ['Home', 'Pages', 'Women', 'Men', 'Blog'];

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.white,
    '&:hover': {
        backgroundColor: theme.palette.common.white,
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'black', // Set input text color to white
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '20ch',
        },
    },
    '&:focus-within': {
        border: '2px solid white', // White border when the search bar is focused
    },
}));

function Nav() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [openSearch, setOpenSearch] = React.useState(false); // State for controlling search dropdown
    const [searchQuery, setSearchQuery] = React.useState(''); // Search input state

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const toggleSearchBar = () => {
        setOpenSearch(!openSearch); // Toggle search bar visibility on mobile
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value); // Update the search query as the user types
    };

    return (
        <AppBar
            sx={{
                width: "100%",
                position: "sticky",
                top: 0,
                zIndex: 999,
                backgroundColor: "black",
                backdropFilter: "blur(20px)",
                boxShadow: "none",
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* Logo for larger screens */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1 }}>
                        <img src="../logo.png" alt="Logo" width="110px" />
                    </Box>

                    {/* Mobile menu button */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="open menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon sx={{ color: "#f97a15" }} />
                        </IconButton>
                    </Box>

                    {/* Mobile menu */}
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                        keepMounted
                        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                    >
                        {pages.map((page) => (
                            <MenuItem key={page} onClick={handleCloseNavMenu}>
                                <Typography
                                    sx={{
                                        color: "#f97a15",  // Set menu item text color to white
                                        fontSize: "1.2rem",
                                        fontWeight: "700",
                                        '&:hover': { color: "#F97A15" },
                                    }}
                                >
                                    {page}
                                </Typography>
                            </MenuItem>
                        ))}
                    </Menu>

                    {/* Desktop Menu */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "space-evenly" }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 2,
                                    color: 'white', // Set button text color to white
                                    fontWeight: "800",
                                    display: 'block',
                                    fontSize: "1rem",
                                    '&:hover': {
                                        color: "#F97A15",
                                    },
                                }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    {/* Search Icon (Mobile) */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
                        <IconButton
                            size="large"
                            onClick={toggleSearchBar}
                            sx={{ color: "white" }}
                        >
                            <SearchIcon />
                        </IconButton>
                    </Box>

                    {/* Mobile Search Bar Dropdown */}
                    <Box
                        sx={{
                            display: { xs: openSearch ? 'flex' : 'none', md: 'none' }, // Show search bar only on mobile and when toggled
                            position: 'absolute',
                            top: '64px', // Adjust the top position to align with the AppBar
                            left: "-6px",
                            width: '100%',
                            backgroundColor: 'white',
                            padding: '8px',
                            borderRadius: '4px',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                            alignItems: 'center',
                        }}
                    >
                        <StyledInputBase
                            value={searchQuery}
                            onChange={handleSearchChange} // Handle input change
                            placeholder="Search..."
                            inputProps={{ 'aria-label': 'search' }}
                            sx={{
                                width: '100%',
                                borderRadius: '4px',
                                paddingLeft: '8px',

                            }}
                        />
                        <IconButton onClick={toggleSearchBar} sx={{ color: "#F97A15" }}>
                            <CloseIcon />
                        </IconButton>
                    </Box>

                    {/* Desktop Search Bar */}
                    <Search sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <SearchIconWrapper>
                            <SearchIcon sx={{ color: '#F97A15' }} />
                        </SearchIconWrapper>
                        <StyledInputBase
                            value={searchQuery}
                            onChange={handleSearchChange} // Handle input change
                            placeholder="Search..."
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>

                    {/* Right Side (Settings Icon, Cart) */}
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {/* Settings Icon */}
                        <IconButton
                            onClick={handleOpenUserMenu}
                            sx={{
                                color: 'white',  // Set Settings icon color to white
                                fontSize: "1.5rem",
                                '&:hover': { color: "#F97A15" },
                            }}
                        >
                            <SettingsIcon />
                        </IconButton>

                        <Menu
                            id="menu-user"
                            anchorEl={anchorElUser}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuItem onClick={handleCloseUserMenu}>Login</MenuItem>
                            <MenuItem onClick={handleCloseUserMenu}>Register</MenuItem>
                        </Menu>

                        {/* Cart Icon */}
                        <Tooltip title="My Cart">
                            <IconButton sx={{ color: 'white', backgroundColor: "#F97A15", '&:hover': { backgroundColor: "#F97B16" } }}>
                                <ShoppingCartIcon />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Nav;
