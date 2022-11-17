import React from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import { formatCurrency } from '../utilities/formatCurrency'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
import CardActions from '@mui/material/CardActions'
import RemoveIcon from '@mui/icons-material/Remove'
import Stack from '@mui/material/Stack'
import { useShoppingCart } from '../context/ShoppingCartContext'

type StoreItemsProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}

export function StoreItem({ id, name, price, imgUrl }: StoreItemsProps) {
    const {
        getItemQantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart } = useShoppingCart()
    let quantity = getItemQantity(id)

    return (

        <Card sx={{ minWidth: 550, minHeight: 500, }}>
            <CardMedia
                component='img'
                height='370px'
                image={imgUrl}
            />
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={10}>
                        <Typography gutterBottom variant='h5' component='div'>
                            {name}
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant='body2' color='text.secondary'>
                            {formatCurrency(price)}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions >
                <Stack
                    sx={{
                        width: '100%'
                    }}
                    justifyContent='center'
                    alignItems='center'
                    direction='row'
                >
                    {quantity === 0
                        ? (
                            <Button variant='contained' startIcon={<AddCircleIcon />}
                                onClick={() => {
                                    increaseCartQuantity(id)
                                }}
                            >
                                Add To Cart
                            </Button>
                        )
                        :
                        <>
                            <Button
                                aria-label='reduce'
                                onClick={() => {
                                    decreaseCartQuantity(id)
                                }}
                            >
                                <RemoveIcon fontSize='small' />
                            </Button>
                            <Typography> {quantity} in cart </Typography>
                            <Button
                                aria-label='increase'
                                onClick={() => {
                                    increaseCartQuantity(id)
                                }}
                            >
                                <AddIcon fontSize='small' />
                            </Button>
                            <Button
                                onClick={() => {
                                    removeFromCart(id)
                                }}
                            > Remove </Button>
                        </>
                    }
                </Stack>
            </CardActions>
        </Card>
    )
}
