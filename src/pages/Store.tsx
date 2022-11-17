import React from 'react'
import StoreItems from '../data/items.json'
import { StoreItem } from '../components/StoreItem'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

export function Store() {
    return <>
        <Typography variant='h2' align='center'> STORE </Typography>
        <Box sx={{ padding: '20px 30px', flexGrow: 1, }}>
            <Stack spacing={5} justifyContent='center' alignItems='center' >
                {StoreItems.map(item => (
                    <StoreItem {...item} />
                ))}
            </Stack>
        </Box>
    </>
}
