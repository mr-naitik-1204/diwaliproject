import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react'

function Sec1() {


    const categories = [
        {
            title: 'Men',
            img: 'https://i.pinimg.com/736x/a8/3b/3d/a83b3d314eb0756c2ca77ed1f922d748.jpg',
            description: 'Explore the latest collection of men’s clothing and accessories.'
        },
        {
            title: 'Women',
            img: 'https://wwd.com/wp-content/uploads/2013/07/max-mara-094.jpg?w=1000&h=563&crop=1',
            description: 'Discover trending fashion for women in all sizes and styles.'
        },
        {
            title: 'Children',
            img: 'https://cdn.culture.ru/images/6631d877-cb28-5b8e-855a-495e50db4026',
            description: 'Shop comfortable and stylish clothes for children of all ages.'
        }
    ];

    return (
        <>
            <Box sx={{ py: 5,backgroundColor:"black" }}>
                <Typography
                    variant="h4"
                    sx={{
                        textAlign: 'center',
                        mb: 4,
                        fontWeight: 'bold',
                        color: 'white',
                        textTransform: 'uppercase',
                        letterSpacing: 2,
                    }}
                >
                    Shop by Category
                </Typography>
                <Grid container spacing={3} justifyContent="center">
                    {categories.map((category, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card
                                sx={{
                                    maxWidth: 375,
                                    margin: "auto",
                                    borderRadius: '15px',
                                    boxShadow: '0 6px 15px rgba(0,0,0,0.2)',
                                    transition: 'transform 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.09)',
                                    }
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={category.img}
                                    alt={category.title}
                                />
                                <CardContent>
                                    <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                                        {category.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                                        {category.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    )
}

export default Sec1