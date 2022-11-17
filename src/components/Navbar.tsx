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
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useNavigate } from 'react-router-dom'
import Badge from '@mui/material/Badge'
import { useShoppingCart } from '../context/ShoppingCartContext'

function Navbar() {

    const navigate = useNavigate()
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    const { openCart, cartQuantity } = useShoppingCart()

    return (

        <AppBar position='relative'>
            <Container>
                <Toolbar disableGutters>
                    <Typography
                        variant='h6'
                        noWrap
                        component='a'
                        href='/'
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
                        Buket
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
                            <MenuItem onClick={() => navigate(`/store`)}>
                                <Typography textAlign='center'>Store</Typography>
                            </MenuItem>
                            <MenuItem onClick={() => navigate(`/`)}>
                                <Typography textAlign='center'>Care</Typography>
                            </MenuItem>
                            <MenuItem onClick={() => navigate(`/about`)}>
                                <Typography textAlign='center'>About</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Typography
                        variant='h5'
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
                        Buket
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button onClick={() => navigate(`/store`)}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Store
                        </Button>
                        <Button onClick={() => navigate(`/`)}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Care
                        </Button>
                        <Button onClick={() => navigate(`/about`)}
                            sx={{ my: 2, color: 'white', display: 'block' }} >
                            About
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
                                        <ShoppingCartIcon sx={{ color: 'wight' }} >
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
