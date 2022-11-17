import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import AdbIcon from '@mui/icons-material/Adb'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useNavigate } from 'react-router-dom'
import Badge from '@mui/material/Badge'
import { useShoppingCart } from '../context/ShoppingCartContext'

const pages = ['Home', 'About', 'Store']
const settings = ['Shopping-cart']

function Navbar() {
    const navigate = useNavigate()
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    }

    const { openCart, cartQuantity } = useShoppingCart()

    return (
        <AppBar position='static'>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant='h6'
                        noWrap
                        component='a'
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Shopping-cart
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size='large'
                            aria-label='account of current user'
                            aria-controls='menu-appbar'
                            aria-haspopup='true'
                            onClick={handleOpenNavMenu}
                            color='inherit'
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id='menu-appbar'
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem onClick={() => navigate(`/`)}>
                                <Typography textAlign='center'>Home</Typography>
                            </MenuItem>
                            <MenuItem onClick={() => navigate(`/about`)}>
                                <Typography textAlign='center'>About</Typography>
                            </MenuItem>
                            <MenuItem onClick={() => navigate(`/store`)}>
                                <Typography textAlign='center'>Store</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Shopping-cart
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button onClick={() => navigate(`/`)}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Home
                        </Button>
                        <Button onClick={() => navigate(`/about`)}
                            sx={{ my: 2, color: 'white', display: 'block' }} >
                            About
                        </Button>
                        <Button onClick={() => navigate(`/store`)}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Store
                        </Button>
                    </Box>
                    {cartQuantity > 0 && (
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title='Open Cart'>
                                <IconButton onClick={openCart} size='large'
                                    edge='start'
                                    color='inherit'
                                    aria-label='menu'
                                    sx={{ mr: 2 }}>

                                    <Badge badgeContent={cartQuantity} color='error'>
                                        <ShoppingCartIcon color='action' >
                                            <Button onClick={openCart}
                                                sx={{ my: 2, color: 'white', display: 'block' }} > </Button>
                                        </ShoppingCartIcon>
                                    </Badge>
                                </IconButton>
                            </Tooltip>
                        </Box>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Navbar
