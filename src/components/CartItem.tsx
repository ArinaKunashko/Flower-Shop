import { useShoppingCart } from '../context/ShoppingCartContext'
import storeItem from '../data/items.json'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import { formatCurrency } from '../utilities/formatCurrency'
import Button from '@mui/material/Button'
import RemoveIcon from '@mui/icons-material/Remove'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import AddIcon from '@mui/icons-material/Add'
import Stack from '@mui/material/Stack'

type CartItemProp = {
    id: number,
    quantity: number
}

export function CartItem({ id, quantity }: CartItemProp) {
    const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } = useShoppingCart()
    const item = storeItem.find(i => i.id === id)
    if (item == null) return null
    return (

        <Card sx={{ width: '350px' }}>
            <CardMedia
                component='img'
                image={item.imgUrl}
                sx={{ height: '150px' }}
            />
            <CardContent>
                <Grid container spacing={3}>
                    <Grid item xs={10}>
                        <Typography gutterBottom variant='h5' component='div'>
                            {item.name} {quantity > 1 &&
                                <Typography variant='body2' component='span'> x{quantity} </Typography>}
                        </Typography>
                        <Typography variant='body2' color='text.secondary'>
                            {formatCurrency(item.price)}
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography sx={{ marginTop: '8px' }} variant='body2' color='text.secondary'>
                            {formatCurrency(item.price * quantity)}
                        </Typography>
                    </Grid>
                    <Grid item >
                        <Grid container >
                            <Grid item xs={12}>
                                <Stack justifyContent='center'
                                    alignItems='center'
                                    sx={{ minWidth: '320px' }}
                                    direction='row'>
                                    <Button
                                        onClick={() => {
                                            increaseCartQuantity(id)
                                        }}
                                    > <AddIcon /> </Button>
                                    <Button
                                        onClick={() => {
                                            decreaseCartQuantity(id)
                                        }}
                                    > <RemoveIcon /> </Button>
                                    <Button
                                        onClick={() => {
                                            removeFromCart(id)
                                        }}
                                    > <DeleteForeverIcon /> </Button>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>

    )
}
