import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import aboutus from '../img/aboutus.jpg'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'

export function About() {
    return (
        <Box >
            <Grid container spacing={1}>
                <Grid item xs={12} xl={6}>
                    <img src={aboutus}
                        width='100%'
                    />
                </Grid>
                <Grid item xl={6} >
                    <Stack justifyContent='center' sx={{ minHeight: '650px', marginRight: '30px', marginLeft:'20px' }}>
                        <Typography gutterBottom variant='h3' component='div' align='left'>
                            About Us
                        </Typography>
                        <Typography variant='h6' align='left'>
                            We are glad to welcome you in our flower shop!
                        </Typography>
                        <Typography variant='h6' align='left'>
                            Our team of experienced florists present and present a premium composition.
                        </Typography>
                        <Typography variant='h6' align='left'>
                            Floristic compositions from Buket are suitable for expressing the fullness of interested feelings,
                            showing attention or gratitude, and as a pronounced addition to the main gift to a loved one,
                            close friend or work colleague.
                        </Typography>
                        <Typography variant='h6' align='left'>
                            We cooperate with the best flower suppliers, use only high-quality proven materials, and our designers and
                            craftsmen are highly qualified and have many years of practical experience in floristry. We regularly take
                            part in international exhibitions, which allows us to offer you the best floral arrangements and set new
                            trends in floral design.
                        </Typography>
                        <Typography variant='h6' align='left'>
                            Buket - show your tenderness!
                        </Typography>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    )
}
