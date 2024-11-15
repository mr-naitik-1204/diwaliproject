import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
function Cs3() {
  return (
    <>
     <Container>
                <Box sx={{ backgroundColor: '#1e1e1e', color: '#fff', p: 3, mt: 5, borderRadius: 2 }}>
                    <Grid container spacing={3} alignItems="center">

                        <Grid item xs={12} md={6}>
                            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                                Register as a thread & trend Supplier
                            </Typography>
                            <Typography variant="subtitle1" sx={{ mb: 2 }}>
                                Sell your products to crores of customers at 0% commission
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <Box display="flex" alignItems="center">
                                        <CheckCircleIcon sx={{ color: '#00e676', mr: 1 }} />
                                        <Typography>Grow your business 10x</Typography>
                                    </Box>
                                </Grid>
                                <Grid item>
                                    <Box display="flex" alignItems="center">
                                        <CheckCircleIcon sx={{ color: '#00e676', mr: 1 }} />
                                        <Typography>Enjoy 100% Profit</Typography>
                                    </Box>
                                </Grid>
                                <Grid item>
                                    <Box display="flex" alignItems="center">
                                        <CheckCircleIcon sx={{ color: '#00e676', mr: 1 }} />
                                        <Typography>Sell all over India</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Button
                                variant="contained"
                                color="secondary"
                                sx={{ backgroundColor: 'white',fontWeight:"700", borderRadius: 3, mt: 2,color:"black" }}
                            >
                                Sign up now
                            </Button>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Box
                                component="img"
                                src="https://www.shutterstock.com/image-photo/kids-shopping-cute-little-girl-260nw-507776629.jpg"
                                alt="Supplier"
                                sx={{
                                    width: '100%',
                                    borderRadius: 2,
                                }}
                            />
                        </Grid>
                    </Grid>
                </Box>

            </Container>
    </>
  )
}

export default Cs3