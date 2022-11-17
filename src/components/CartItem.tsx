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

type CartItemProp = {
    id: number,
    quantity: number
}

export function CartItem({ id, quantity }: CartItemProp) {
const { removeFromCart, increaseCartQuantity, decreaseCartQuantity, } = useShoppingCart()
const  item = storeItem.find(i => i.id === id)
if (item == null) return null
return (
    
    <Card sx={{ minWidth: 350, minHeight: 150, }}>
    <CardMedia
        component='img'
        height='50'
        width='50'
        image={item.imgUrl}

    />
    <CardContent>
        <Grid container>
            <Grid item xs={9}>
                <Typography gutterBottom variant='h5' component='div'>
                    {item.name} {quantity > 1 && <Typography variant='h6'> x{quantity} </Typography>}
                </Typography>
                <Typography variant="body2" color='text.secondary'>
                    {formatCurrency(item.price)}
                </Typography>
            </Grid>
            <Grid item xs={3}>

                <Typography variant="body2" color='text.secondary'>
                    {formatCurrency(item.price * quantity)}
                </Typography>
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
                        
            </Grid>
        </Grid>
    </CardContent>
    </Card>
)
}
