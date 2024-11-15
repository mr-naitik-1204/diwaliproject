import { Box, Button, Card, CardContent, CardMedia, Container, Grid, IconButton, Typography } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function Cs2() {

    const products = [
        {
            title: "Forever New",
            discount: "Up to 50% off",
            description: "Stylish & elegant dresses",
            image: "https://images.meesho.com/images/products/358187654/sq5wb_512.webp",
            price: "$79.99",
          },
          {
            title: "Twenty Dresses",
            discount: "Up to 50% off",
            description: "8 till late needs",
            image: "https://static.nextdirect.com/resource/blob/334362/e64d0d2c8ba265958fe56651a185b708/sets-outfits-data.jpg",
            price: "$49.99",
          },
          {
            title: "Biba",
            discount: "Up to 65% off",
            description: "Contemporary ethnics",
            image: "https://www.babaecart.in/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-15-at-04.35.53_7a66c8d2.jpg",
            price: "$89.99",
          },
          {
            title: "Puma",
            discount: "Min 40% off",
            description: "Dynamic athletic styles",
            image: "https://i.etsystatic.com/11463421/r/il/d65ffb/1869837863/il_fullxfull.1869837863_exek.jpg",
            price: "$59.99",
          },
          {
            title: "Cider",
            discount: "Up to 35% off",
            description: "Gen-Z dresses across US",
            image: "https://images.meesho.com/images/products/353257905/zkjwu_512.webp",
            price: "$39.99",
          },
          {
            title: "H&M",
            discount: "Flat 30% off",
            description: "Trendy styles for every season",
            image: "https://m.media-amazon.com/images/I/61Q2Y--AZBL._AC_UF894,1000_QL80_.jpg",
            price: "$34.99",
          },
          {
            title: "Zara",
            discount: "Up to 50% off",
            description: "Sophisticated modern apparel",
            image: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/29418658/2024/5/9/343e0219-c105-4744-b227-c0948dbe797317152315792944203MPineappleOutfitVP1.jpg",
            price: "$89.99",
          },
          {
            title: "Nike",
            discount: "Flat 20% off",
            description: "Performance wear for athletes",
            image: "https://sc04.alicdn.com/kf/HTB1OKY4aLjsK1Rjy1Xaq6zispXaF.jpg",
            price: "$69.99",
          }
        , {
            title: "zara",
            discount: "Up to 45% off",
            description: "Activewear for all occasions",
            image: "https://m.media-amazon.com/images/I/61aSJNPG2jL._AC_UY1100_.jpg",
            price: "$54.99",
        }
        , {
            title: "Forever 21",
            discount: "Up to 55% off",
            description: "Affordable fashion for everyone",
            image: "https://i.etsystatic.com/11463421/r/il/2007e2/3546997770/il_fullxfull.3546997770_6da9.jpg",
            price: "$29.99",
        }
        , {
            title: "Mango",
            discount: "Up to 60% off",
            description: "Chic and casual for every day",
            image: "https://www.shopsy.co.in/wp-content/uploads/2023/02/full-sleeve-black-boys-clothing-set-front.webp",
            price: "$74.99",
        }
        , {
            title: "Urban Outfitters",
            discount: "Up to 25% off",
            description: "Vintage-inspired streetwear",
            image: "https://images.jdmagicbox.com/rep/b2b/Kids-Clothing/Kids-Clothing-3.jpg",
            price: "$49.99",
        }

        , {
            title: "ASOS",
            discount: "Flat 50% off",
            description: "Bold looks for the new season",
            image: "https://images.meesho.com/images/products/283702748/xt5qz_512.webp",
            price: "$39.99",
        }
        , {
            title: "Shein",
            discount: "Up to 70% off",
            description: "Affordable trends for everyone",
            image: "https://cdn.shopify.com/s/files/1/0472/6457/files/appaman-quality-kids-clothing-boys-outerwear-woodland-jacket-autumn-sunset-31984127410281.jpg?v=1723769958",
            price: "$19.99",
        }
        , {
            title: "Aldo",
            discount: "Up to 30% off",
            description: "Sleek and modern footwear",
            image: "https://peekaabookids.com/cdn/shop/files/HC_08222.jpg?v=1717923145&width=533",
            price: "$89.99",
        }
        , {
            title: "Birkenstock",
            discount: "Up to 20% off",
            description: "Comfortable and stylish sandals",
            image: "https://i.pinimg.com/564x/61/b4/8c/61b48c0c3a2ffa0d8e2b7218ca52ed47.jpg",
            price: "$49.99",
        }
        , {
            title: "nike",
            discount: "Flat 35% off",
            description: "Outdoor gear for adventure",
            image: "https://i.pinimg.com/236x/27/f1/5c/27f15cc3204e14fe1c3b46739ba74134.jpg",
            price: "$129.99",
        }
        , {
            title: "zara",
            discount: "Flat 25% off",
            description: "Iconic skater shoes & apparel",
            image: "https://i.pinimg.com/736x/b5/c2/2a/b5c22a35a08be332a551a3daee664fa5.jpg",
            price: "$44.99",
        }
        , {
            title: "Under Armour",
            discount: "Up to 40% off",
            description: "High-performance activewear",
            image: "https://i.pinimg.com/236x/9a/64/42/9a64427471ac0745a4c8686ac7b3f36f.jpg",
            price: "$59.99",
        },
        {
            title: "H & W",
            discount: "Up to 40% off",
            description: "High-performance activewear",
            image: "https://m.media-amazon.com/images/I/81otj6upITL._AC_UY1100_.jpg",
            price: "$58.99",
        },
        {
            title: "Under Armour men's HeatGear Tank",
            discount: "30% off",
            description: "Lightweight, breathable tank perfect for workouts.",
            image: "https://m.media-amazon.com/images/I/51ITYoJYm6L.jpg",
            price: "$29.99",
        },

        {
            title: "Under Armour men's Rival pent ti-shart",
            discount: "25% off",
            description: "Soft, cozy hoodie for cool-weather training.",
            image: "https://m.media-amazon.com/images/I/813upR6TzTL.jpg",
            price: "$49.99",
        }
        ,
        {
            title: "Under Armour men's Storm pent",
            discount: "35% off",
            description: "Water-resistant jacket for all-weather protection.",
            image: "https://www.mumkins.in/cdn/shop/products/jogger-for-boys-bl06143-dark_green-2_1800x1800.jpg?v=1659426127",
            price: "$79.99",
        }


        , {
            title: "Under Armour men's UA Tech shirt",
            discount: "35% off",
            description: "Lightweight and breathable pants designed for comfort.",
            image: "https://edenrobe.com/cdn/shop/products/23_B_BoysCoatPant_EBTCPC22-4487_1.jpg?v=1701490744",
            price: "$54.99",
        }

        , {
            title: "Under Armour men's Fly Fast Shorts",
            discount: "20% off",
            description: "Ultra-lightweight running shorts for maximum movement.",
            image: "https://elitekids.com.pk/wp-content/uploads/2023/09/6050-2.jpg",
            price: "$29.99",
        }
        , { 
            title: "Mango men's puma jecket",
            discount: "Up to 50% off",
            description: "Flowy and elegant for any occasion.",
            image: "https://unapologeticdivineclothing.com/cdn/shop/files/Sbeafe0fd23e94cdcb1d294844f3abcbds.webp?v=1729913696&width=1445",
            price: "$59.99",
        }
        , {
            title: "Bershka High-Waisted Jeans",
            discount: "Flat 30% off",
            description: "Stylish and comfortable high-waisted jeans.",
            image: "https://s.alicdn.com/@sc04/kf/Hdae032f26621464fbe21ff3a3653ecb5K.jpg_720x720q50.jpg",
            price: "$39.99",
        }
        , {
            title: "Reebok men's Workout Tank",
            discount: "25% off",
            description: "Breathable fabric designed for high-intensity workouts.",
            image: "https://rukminim2.flixcart.com/image/550/650/xif0q/kids-apparel-combo/e/k/w/12-13-years-heec01-heydals-original-imagyj7hbfdazcv6.jpeg?q=90&crop=false",
            price: "$29.99",
        }
        , {
            title: "Puma men's Graphic jecket",
            discount: "35% off",
            description: "Soft and stylish for workouts or casual wear.",
            image: "https://img.joomcdn.net/2ef8229072c4e45fe2eec7841730f07a82a30aa0_original.jpeg",
            price: "$24.99",
        }
        , {
            title: "Mango men's Chiffon ti-shirt",
            discount: "Up to 50% off",
            description: "Flowy and elegant for any occasion.",
            image: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/28426960/2024/3/22/12f4d784-54ae-447c-a988-02d8ab747bee1711051381036ClothingSet1.jpg",
            price: "$59.99",
        }
        , {
            title: "Bershka High-Waisted ti-shirt",
            discount: "Flat 30% off",
            description: "Stylish and comfortable high-waisted jeans.",
            image: "https://zubaidasonline.com/cdn/shop/files/Shirt_f4d90656-fb4e-493e-ac37-65fc9b3d9d51.jpg?v=1729579410",
            price: "$39.99",
        }
        , {
            title: "formal cotton shirt degin and color",
            discount: "25% off",
            description: "Breathable fabric designed for high-intensity workouts.",
            image: "https://i.pinimg.com/564x/4f/e0/9c/4fe09cf4b82f9b7d7d37636bce5af553.jpg",
            price: "$29.99",
        }
    ];
    const ProductCard = ({ product }) => (
        <StyledCard sx={{ position: 'relative' }}>
          <Box sx={{ height: '250px', overflow: 'hidden' }}>
            <CardMedia
              component="img"
              height="250"
              image={product.image}
              alt={product.title}
              sx={{
                transition: '0.6s',
                ':hover': {
                  scale: 1.1,
                },
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
      
            {/* Center the button */}
            <Box display="flex" justifyContent="center" alignItems="center">
              <button className="custom-btn">
                <div className="default-btn">
                  <svg
                    className="css-i6dzq1"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    fill="none"
                    strokeWidth="2"
                    stroke="#FFF"
                    height="20"
                    width="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle r="3" cy="12" cx="12"></circle>
                  </svg>
                  <span>Quick View</span>
                </div>
                <div className="hover-btn">
                  <svg
                    className="css-i6dzq1"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    fill="none"
                    strokeWidth="2"
                    stroke="#fff"
                    height="20"
                    width="20"
                    viewBox="0 0 24 24"
                  >
                    <circle r="1" cy="21" cx="9"></circle>
                    <circle r="1" cy="21" cx="20"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                  <span>Shop Now</span>
                </div>
              </button>
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

export default Cs2