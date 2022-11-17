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

            <Drawer anchor='right' open={isOpen} onClose={closeCart} sx={{ width: '350px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={10.5}>
                        <Stack
                            sx={{
                                width: '100%'
                            }}
                            justifyContent='center'
                            alignItems='center'
                            direction='column'
                        >
                            <Typography> Cart </Typography>
                            {cartItems.map(item => (
                                <CartItem key={item.id} {...item} />
                            ))}
                            <Typography variant='h5'>
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
                    <Grid item xs={1.5}>
                        <Button onClick={closeCart}>
                            <CloseIcon> </CloseIcon>
                        </Button>
                    </Grid>
                </Grid>
            </Drawer>
        </>
    )
}
