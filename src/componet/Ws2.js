import { Box, Button, Card, CardContent, CardMedia, Container, Grid, IconButton, Typography } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function Ws2() {

    const products = [
        {
            title: "Forever New",
            discount: "Up to 50% off",
            description: "Stylish & elegant dresses",
            image: "https://funkyforty.com/wp-content/uploads/2020/06/DSC_1804-scaled.jpeg",
            price: "$79.99",
        },
        {
            title: "Twenty Dresses",
            discount: "Up to 50% off",
            description: "8 till late needs",
            image: "https://images-static.nykaa.com/media/catalog/product/5/e/5e5bc1cDR011640_1.jpg",
            price: "$49.99",
        },
        {
            title: "Biba",
            discount: "Up to 65% off",
            description: "Contemporary ethnics",
            image: "https://etimg.etb2bimg.com/thumb/msid-112837566,imgsize-73336,width-1200,height=765,overlay-etbrandequity/advertising/kriti-sanon-embraces-tradition-confidently-into-the-future-with-biba.jpg",
            price: "$89.99",
        },
        {
            title: "Puma",
            discount: "Min 40% off",
            description: "Dynamic athletic styles",
            image: "https://img01.ztat.net/article/spp-media-p1/6ade89fbbcef42eda7ce65901277f8b2/48a431b4e8eb4597afd4cfe6c8271b94.jpg?imwidth=1800",
            price: "$59.99",
        },
        {
            title: "Cider",
            discount: "Up to 35% off",
            description: "Gen-Z dresses across US",
            image: "https://i.pinimg.com/736x/78/b7/f0/78b7f006f98a028db9ad521495708de4.jpg",
            price: "$39.99",
        },

        {
            title: "H&M",
            discount: "Flat 30% off",
            description: "Trendy styles for every season",
            image: "https://i.pinimg.com/736x/78/1a/56/781a56a1fb934142c53b9d535cd9327c.jpg",
            price: "$34.99",
        }
        ,
        {
            title: "Zara",
            discount: "Up to 50% off",
            description: "Sophisticated modern apparel",
            image: "https://i.pinimg.com/736x/34/bc/14/34bc1471d1858b38ee0cbb79110d5e40.jpg",
            price: "$89.99",
        }
        , {
            title: "Nike",
            discount: "Flat 20% off",
            description: "Performance wear for athletes",
            image: "https://i.pinimg.com/736x/28/7d/d2/287dd2a99c30999e10fb2cee420372e7.jpg",
            price: "$69.99",
        }
        , {
            title: "zara",
            discount: "Up to 45% off",
            description: "Activewear for all occasions",
            image: "https://static.zara.net/assets/public/7aeb/b829/1b314bc9a9b5/ae372ade1a9c/08448331800-e1/08448331800-e1.jpg?ts=1721138060401&w=563",
            price: "$54.99",
        }
        , {
            title: "Forever 21",
            discount: "Up to 55% off",
            description: "Affordable fashion for everyone",
            image: "https://i.pinimg.com/736x/de/a7/ad/dea7ad0369b7a91f02ff031260d5d665.jpg",
            price: "$29.99",
        }
        , {
            title: "Mango",
            discount: "Up to 60% off",
            description: "Chic and casual for every day",
            image: "https://i.pinimg.com/736x/44/54/f1/4454f15430125cbe05e6bcc67a53708d.jpg",
            price: "$74.99",
        }
        , {
            title: "Urban Outfitters",
            discount: "Up to 25% off",
            description: "Vintage-inspired streetwear",
            image: "https://i.pinimg.com/736x/25/e3/b9/25e3b9cf4d431444384f112a1d757b0f.jpg",
            price: "$49.99",
        }

        , {
            title: "ASOS",
            discount: "Flat 50% off",
            description: "Bold looks for the new season",
            image: "https://i.pinimg.com/736x/33/ed/c9/33edc9ca6ab5559859f5def25e5480e6.jpg",
            price: "$39.99",
        }
        , {
            title: "Shein",
            discount: "Up to 70% off",
            description: "Affordable trends for everyone",
            image: "https://i.pinimg.com/736x/ff/de/25/ffde2564d0c57401e045acbfa1f2ec8c.jpg",
            price: "$19.99",
        }
        , {
            title: "Aldo",
            discount: "Up to 30% off",
            description: "Sleek and modern footwear",
            image: "https://i.pinimg.com/736x/c8/bb/ec/c8bbec9d56408c72d25528690c7ec229.jpg",
            price: "$89.99",
        }
        , {
            title: "Birkenstock",
            discount: "Up to 20% off",
            description: "Comfortable and stylish sandals",
            image: "https://i.pinimg.com/736x/b8/b7/14/b8b7143d9ea247810ba68a8e228c6326.jpg",
            price: "$49.99",
        }
        , {
            title: "The North Face",
            discount: "Flat 35% off",
            description: "Outdoor gear for adventure",
            image: "https://i.pinimg.com/736x/5f/3c/fc/5f3cfc7764205f4b601a5d5deac7015e.jpg",
            price: "$129.99",
        }
        , {
            title: "zara",
            discount: "Flat 25% off",
            description: "Iconic skater shoes & apparel",
            image: "https://static.zara.net/assets/public/0449/7007/00fc4801802b/9de662e0315f/09116220330-p/09116220330-p.jpg?ts=1725611572484&w=563",
            price: "$44.99",
        }
        , {
            title: "Under Armour",
            discount: "Up to 40% off",
            description: "High-performance activewear",
            image: "https://i.pinimg.com/736x/01/a9/f2/01a9f29c0c284f9081708b5382d23f4d.jpg",
            price: "$59.99",
        },
        {
            title: "H & W",
            discount: "Up to 40% off",
            description: "High-performance activewear",
            image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRNU6HBpGSDSDtoX2uORWo8_DSDBE1brI2LmmW3bB93nAFvZAl-Cig8xd8x2VgHsFWz2FDkWK6ggGwuUpdR6ZZaE8cnTVTVZ5lFfM64A7FAfnmppkjBfzfW",
            price: "$58.99",
        },
        {
            title: "Under Armour Women's HeatGear Tank",
            discount: "30% off",
            description: "Lightweight, breathable tank perfect for workouts.",
            image: "https://i.pinimg.com/736x/95/80/51/958051938d988e0e02be2c46de159192.jpg",
            price: "$29.99",
        },

        {
            title: "Under Armour Women's Rival Fleece Hoodie",
            discount: "25% off",
            description: "Soft, cozy hoodie for cool-weather training.",
            image: "https://i.pinimg.com/736x/94/08/35/9408354f767833f4f968eed32f109d7c.jpg",
            price: "$49.99",
        }
        ,
        {
            title: "Under Armour Women's Storm Jacket",
            discount: "35% off",
            description: "Water-resistant jacket for all-weather protection.",
            image: "https://i.pinimg.com/736x/65/8b/46/658b46e67a799c939ac52bc887ba7918.jpg",
            price: "$79.99",
        }


        , {
            title: "Under Armour Women's UA Tech Pants",
            discount: "35% off",
            description: "Lightweight and breathable pants designed for comfort.",
            image: "https://i.pinimg.com/736x/69/a8/7c/69a87cdea097b081263e595288376819.jpg",
            price: "$54.99",
        }

        , {
            title: "Under Armour Women's Fly Fast Shorts",
            discount: "20% off",
            description: "Ultra-lightweight running shorts for maximum movement.",
            image: "https://i.pinimg.com/736x/e7/0e/69/e70e6956c0f4b1dc3fbf11c1e26cd3f8.jpg",
            price: "$29.99",
        }
        , {
            title: "Mango Women's Chiffon Dress",
            discount: "Up to 50% off",
            description: "Flowy and elegant for any occasion.",
            image: "https://i.pinimg.com/736x/a6/40/af/a640af4161a3d8a2996dcae806f300de.jpg",
            price: "$59.99",
        }
        , {
            title: "Bershka High-Waisted Jeans",
            discount: "Flat 30% off",
            description: "Stylish and comfortable high-waisted jeans.",
            image: "https://i.pinimg.com/736x/3f/3f/82/3f3f824a731bb837304ffab5a2f89a55.jpg",
            price: "$39.99",
        }
        , {
            title: "Reebok Women's Workout Tank",
            discount: "25% off",
            description: "Breathable fabric designed for high-intensity workouts.",
            image: "https://i.pinimg.com/736x/a2/5f/2b/a25f2b32c2e68c619ec8ae47cd30597e.jpg",
            price: "$29.99",
        }
        , {
            title: "Puma Women's Graphic Tee",
            discount: "35% off",
            description: "Soft and stylish for workouts or casual wear.",
            image: "https://i.pinimg.com/736x/9f/41/ef/9f41ef30d0e3d0d13921c39430c6491f.jpg",
            price: "$24.99",
        }
        , {
            title: "Mango Women's Chiffon Dress",
            discount: "Up to 50% off",
            description: "Flowy and elegant for any occasion.",
            image: "https://static.zara.net/assets/public/3875/fe98/cce04ea285e7/ae1e6a90c2f3/09232234330-a1/09232234330-a1.jpg?ts=1726068102930&w=563",
            price: "$59.99",
        }
        , {
            title: "Bershka High-Waisted Jeans",
            discount: "Flat 30% off",
            description: "Stylish and comfortable high-waisted jeans.",
            image: "https://ishqme.com/cdn/shop/files/Helena-WomenPrintedFloralDress_1_375x_crop_center.webp?v=1727787171",
            price: "$39.99",
        }
        , {
            title: "Reebok Women's Workout Tank",
            discount: "25% off",
            description: "Breathable fabric designed for high-intensity workouts.",
            image: "https://ishqme.com/cdn/shop/products/Floral-printed-shift-dress-1_375x_crop_center.jpg?v=1682006868",
            price: "$29.99",
        }
    ];
    const ProductCard = ({ product }) => (
        <StyledCard sx={{ position: 'relative' }}>
            <Box sx={{ height: "250px", overflow: "hidden" }}>
                <CardMedia
                    component="img"
                    height="250"
                    image={product.image}
                    alt={product.title}
                    sx={{
                        transition: "0.6s",
                        ":hover": {
                            scale: 1.1
                        }
                    }}
                />
            </Box>
            <PriceTag>{product.price}</PriceTag>
            <CardContent>
                <Typography gutterBottom variant="h6" component="div" align="center">
                    {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                    {product.discount}
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center" sx={{ marginBottom: '15px' }}>
                    {product.description}
                </Typography>
                <Box display="flex" justifyContent="center">
                    {/* Replace ShopButton with IconButton and ShoppingCartIcon */}
                    <IconButton sx={{borderRadius:"0",'&:hover':{
                        backgroundColor:"black"
                    } ,backgroundColor: "black", color: "white", fontWeight: "100",fontSize:"14px", height:"40px",width:"110px"  }}>
                        <ShoppingCartIcon />Shop now
                    </IconButton>
                </Box>
            </CardContent>
        </StyledCard>
    );

    const StyledCard = styled(Card)(({ theme }) => ({
        maxWidth: 345,
        margin: 'auto',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        position: 'relative',
    }));

    const PriceTag = styled(Box)(({ theme }) => ({
        backgroundColor: 'black',
        color: '#fff',
        borderRadius: '20px',
        padding: '5px 10px',
        fontWeight: 'bold',
        display: 'inline-block',
        position: 'absolute',
        top: '10px',
        right: '10px',
        fontSize: '14px',
    }));

    const ShopButton = styled(Button)(({ theme }) => ({
        backgroundColor: 'black',
        color: 'white',
        textTransform: 'none',
        '&:hover': {
            backgroundColor: 'black',
        },
    }));

    return (
        <>
            <Container>
                <Typography variant="h4" gutterBottom align="center" sx={{ paddingTop: '20px' }}>
                    Covetable finds this Week
                </Typography>
                <Grid container spacing={3} sx={{ padding: '20px' }}>
                    {products.map((product, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                            <ProductCard product={product} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    )
}

export default Ws2