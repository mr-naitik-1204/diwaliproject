import { Box, Container, Typography } from '@mui/material'
import React from 'react'

function Sec2() {
    return (
        <Box sx={{backgroundColor:"black"}}>
        <Container 
            sx={{
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center", 
                textAlign: "center", 
                padding: { xs: '10px', sm: '20px', md: '30px' }, // Responsive padding
                color:"white"
            }}
        >
            <Box sx={{ marginTop: "20px" }}>
                <Typography 
                    sx={{
                        fontSize: { xs: '24px', sm: '30px', md: '35px' }, // Responsive font size for "Our Latest"
                        fontWeight: 700
                    }}
                >
                    Our Latest
                </Typography>
                <Typography 
                    sx={{
                        fontSize: { xs: '26px', sm: '32px', md: '36px' }, // Responsive font size for "Fashion News"
                        fontWeight: 700
                    }}
                >
                    Fashion News
                </Typography>
                <Typography 
                    sx={{
                        fontSize: { xs: '22px', sm: '28px', md: '34px' }, // Responsive font size for "DESIGN | GARMENTS GIFTS"
                        fontWeight: 700
                    }}
                >
                    DESIGN | GARMENTS | GIFTS
                </Typography>
            </Box>
        </Container>
        </Box>
    )
}

export default Sec2;
