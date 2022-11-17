import React from 'react'
import StoreItems from '../data/items.json'
import { StoreItem } from '../components/StoreItem'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'

export function Store() {
    return <>
        <h1> STORE </h1>
        <Box sx={{ padding: '20px 30px', flexGrow: 1, }}>
            <Stack spacing={5}>
                {StoreItems.map(item => (
                    <StoreItem {...item} />
                ))}
            </Stack>
        </Box>
    </>
}
