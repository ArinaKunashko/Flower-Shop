import React from 'react'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useShoppingCart } from '../context/ShoppingCartContext'
import Grid from '@mui/material/Grid'
import Drawer from '@mui/material/Drawer'
import CloseIcon from '@mui/icons-material/Close'
import Stack from '@mui/material/Stack'
import { CartItem } from './CartItem';
import { formatCurrency } from '../utilities/formatCurrency'
import storeItem from '../data/items.json'

type ShoppingCartProps = {
    isOpen: boolean
}

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
    const { closeCart, cartItems } = useShoppingCart()

    return (
        <>
            <Drawer anchor='right' open={isOpen} onClose={closeCart} >
                <Grid container spacing={2}>
                    <Grid item xs={10}>
                        <Typography variant='h3' align='center'> Cart </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Button onClick={closeCart}>
                            <CloseIcon> </CloseIcon>
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Stack
                            sx={{
                                width: '100%',
                            }}
                            direction='column'
                        >
                            <Stack spacing={5} justifyContent='center' alignItems='center' >
                                {cartItems.map(item => (
                                    <CartItem key={item.id} {...item} />
                                ))}
                            </Stack>
                            <Typography variant='h4' align='right' sx={{ marginRight: '100px', marginTop: '20px' }}>
                                Total{' '}
                                {formatCurrency(
                                    cartItems.reduce((total, cartItem) => {
                                        const item = storeItem.find(i => i.id === cartItem.id)
                                        return total + (item?.price || 0) * cartItem.quantity
                                    }, 0)
                                )}
                            </Typography>

                        </Stack>
                    </Grid>
                </Grid>
            </Drawer>
        </>
    )
}
