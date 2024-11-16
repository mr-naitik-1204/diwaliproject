import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'

function Cos1() {
    return (
        <>
            <Box
                sx={{
                    backgroundColor: '#000',
                    display: "flex",
                    textAlign: 'center',
                    position: 'relative',
                    pb: 4,
                    mt: 5
                    , borderRadius: "150px 0 150px 0"
                }}>
                <Grid
                    container
                    spacing={4}
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                        margin: '0 auto',
                        position: 'relative',
                        maxWidth: '1200px'
                    }}
                >


                    <Grid
                        item
                        xs={12}
                        md={4}
                        sx={{ display: { xs: 'none', md: 'block' } }}
                    >
                        <Box>
                            <img
                                src="https://img.freepik.com/premium-photo/pretty-girl-young-man-choosing-yellow-grey-color-while-going-buy-pair-new-pants-sale-mall_274679-4962.jpg"
                                alt="Fashion Community"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: '40px 0px 40px 0px',
                                }}
                            />
                        </Box>
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        md={4}
                    >
                        <Box sx={{ padding: '10px', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3, color: "white" }}>
                                "Crafted for the Fearless."

                            </Typography>
                            <Typography variant="body1" sx={{ mb: 4, color: '#fff ' }}>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi eligendi exercitationem facilis dicta maxime itaque magnam officia, labore facere neque vel commodi doloremque nam velit expedita perferendis aspernatur quas debitis?
                            </Typography>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: 'white',
                                    color: 'black',
                                    padding: '10px 20px',
                                    borderRadius: '30px',
                                    fontWeight:"700"
                                }}
                            >
                                SHOP NOW →
                            </Button>
                        </Box>
                    </Grid>


                    <Grid
                        item
                        xs={12}
                        md={4}
                        sx={{ display: { xs: 'none', md: 'block' } }}
                    >
                        <Box>
                            <img
                                src="https://t3.ftcdn.net/jpg/03/34/79/68/360_F_334796865_VVTjg49nbLgQPG6rgKDjVqSb5XUhBVsW.jpg"
                                alt="Fashion Community"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: '40px 0px 40px 0px',
                                }}
                            />
                        </Box>
                    </Grid>

                </Grid>
            </Box>
        </>
    )
}

export default Cos1