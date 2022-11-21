import React from 'react'
import Typography from '@mui/material/Typography'
import care from '../img/care.jpg'
import vaseForFlowers from '../img/vaseForFlowers.jpg'
import cutFlowers from '../img/cutFlowers.jpg'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'

export function Care() {
    return (

        <Box>
            <Grid container spacing={3} sx={{ flexGrow: 1 }}>
                <Grid item xs={12} sx={{ backgroundImage: `url(${care})` }}>
                    <Stack alignItems='center' sx={{ minHeight: '650px' }}>
                        <Typography align='center' gutterBottom variant='h2' component='div' sx={{
                            fontFamily: 'Raleway',
                            color: 'white',
                            marginTop: '150px'
                        }}>
                          ― We embody your love in the bouquet ―
                        </Typography>
                    </Stack>
                </Grid>

                <Grid item xs={12}>
                    <Grid container spacing={6}>
                        <Grid item xs={7}>
                            <Stack justifyContent='center' sx={{ minHeight: '326px' }}>
                                <Typography variant='h5' align='right'>
                                    Flower care instructions
                                </Typography>
                                <Typography variant='h6' align='right'>
                                    Flowers do not like heat, draft or cold, as well as direct sunlight.
                                    Do not place the bouquet near the radiator, under the air conditioner or on the windowsill.
                                </Typography>
                                <Typography variant='h6' align='right'>
                                    Find a clean vase or other container for the flowers. It is advisable to rinse it with a cleaning agent - the less bacteria remains on the walls, the longer the flowers will remain fresh.
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={5}>
                            <img src={vaseForFlowers}
                                width='100%' />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={6}>
                        <Grid item xs={5}>
                            <img src={cutFlowers}
                                width='100%'
                            />
                        </Grid>
                        <Grid item xs={7}>
                            <Stack justifyContent='center' sx={{ minHeight: '326px' }}>
                                <Typography variant='h6'>
                                    There are several pruning secrets that will extend the life of flowers by at least a week.
                                </Typography>
                                <Typography variant='h6'>
                                    Roses and dense stem cut at an angle of 45 degrees.
                                </Typography>
                                <Typography variant='h6'>
                                    Bulbous stems such as gerberas, delphiniums, tulips, etc. cut at a right angle.
                                </Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}
