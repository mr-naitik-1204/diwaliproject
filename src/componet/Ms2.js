import { Box, Button, Card, CardContent, CardMedia, Container, Grid, IconButton, Typography } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function Ms2() {

    const products = [
        {
            title: "Forever New",
            discount: "Up to 50% off",
            description: "Stylish & elegant dresses",
            image: "https://i.pinimg.com/236x/a6/ac/17/a6ac17e3ed32cf12782d30739a037148.jpg",
            price: "$79.99",
          },
          {
            title: "Twenty Dresses",
            discount: "Up to 50% off",
            description: "8 till late needs",
            image: "https://i.pinimg.com/736x/e0/fb/20/e0fb209c214dfa0bc04b1cca977633fd.jpg",
            price: "$49.99",
          },
          {
            title: "Biba",
            discount: "Up to 65% off",
            description: "Contemporary ethnics",
            image: "https://i.pinimg.com/736x/7f/a0/e0/7fa0e04333f9dada2aecf5e4c77043cd.jpg",
            price: "$89.99",
          },
          {
            title: "Puma",
            discount: "Min 40% off",
            description: "Dynamic athletic styles",
            image: "https://i.pinimg.com/736x/06/0c/a6/060ca66b13a710b2f7cd7ff8402250e2.jpg",
            price: "$59.99",
          },
          {
            title: "Cider",
            discount: "Up to 35% off",
            description: "Gen-Z dresses across US",
            image: "https://i.pinimg.com/736x/e0/46/f3/e046f3876bb3d5be5272ac88df7af3ee.jpg",
            price: "$39.99",
          },
          {
            title: "H&M",
            discount: "Flat 30% off",
            description: "Trendy styles for every season",
            image: "https://i.pinimg.com/236x/3e/c9/ea/3ec9eaabd698d4b30eea00dde4164ba7.jpg",
            price: "$34.99",
          },
          {
            title: "Zara",
            discount: "Up to 50% off",
            description: "Sophisticated modern apparel",
            image: "https://i.pinimg.com/236x/2b/a3/5a/2ba35a00252988cf67147f6af79ad1c1.jpg",
            price: "$89.99",
          },
          {
            title: "Nike",
            discount: "Flat 20% off",
            description: "Performance wear for athletes",
            image: "https://i.pinimg.com/236x/13/08/ff/1308ff72b678f13066d4f77aaa4d3192.jpg",
            price: "$69.99",
          }
        , {
            title: "zara",
            discount: "Up to 45% off",
            description: "Activewear for all occasions",
            image: "https://i.pinimg.com/736x/5e/83/84/5e838479a7208146fbeebaf3d493f0d5.jpg",
            price: "$54.99",
        }
        , {
            title: "Forever 21",
            discount: "Up to 55% off",
            description: "Affordable fashion for everyone",
            image: "https://i.pinimg.com/736x/33/d0/7d/33d07dd70fe21db181e0acb606ca0f77.jpg",
            price: "$29.99",
        }
        , {
            title: "Mango",
            discount: "Up to 60% off",
            description: "Chic and casual for every day",
            image: "https://i.pinimg.com/736x/2b/65/01/2b6501a72f69b0f4e448565e81ebf29d.jpg",
            price: "$74.99",
        }
        , {
            title: "Urban Outfitters",
            discount: "Up to 25% off",
            description: "Vintage-inspired streetwear",
            image: "https://i.pinimg.com/736x/65/fa/c8/65fac8e473207ea01e08a3265dc6c363.jpg",
            price: "$49.99",
        }

        , {
            title: "ASOS",
            discount: "Flat 50% off",
            description: "Bold looks for the new season",
            image: "https://i.pinimg.com/236x/7b/69/81/7b698114b6cf4b6eafdf906f537091c8.jpg",
            price: "$39.99",
        }
        , {
            title: "Shein",
            discount: "Up to 70% off",
            description: "Affordable trends for everyone",
            image: "https://i.pinimg.com/236x/65/ef/b7/65efb73f5056b37deb4a5f0c7a3f248f.jpg",
            price: "$19.99",
        }
        , {
            title: "Aldo",
            discount: "Up to 30% off",
            description: "Sleek and modern footwear",
            image: "https://i.pinimg.com/736x/49/54/d3/4954d387597706aa0128f159de74b463.jpg",
            price: "$89.99",
        }
        , {
            title: "Birkenstock",
            discount: "Up to 20% off",
            description: "Comfortable and stylish sandals",
            image: "https://i.pinimg.com/736x/1e/cd/96/1ecd96d750748907e6d2df1acd6caf5b.jpg",
            price: "$49.99",
        }
        , {
            title: "nike",
            discount: "Flat 35% off",
            description: "Outdoor gear for adventure",
            image: "https://i.pinimg.com/736x/75/29/fe/7529fe501bc612c7fa4f98c07387d073.jpg",
            price: "$129.99",
        }
        , {
            title: "zara",
            discount: "Flat 25% off",
            description: "Iconic skater shoes & apparel",
            image: "https://i.pinimg.com/736x/60/05/df/6005df1d64a3768cc10356b9efef690c.jpg",
            price: "$44.99",
        }
        , {
            title: "Under Armour",
            discount: "Up to 40% off",
            description: "High-performance activewear",
            image: "https://i.pinimg.com/736x/3e/42/07/3e420758f43d64ae2ea7d6dba151861e.jpg",
            price: "$59.99",
        },
        {
            title: "H & W",
            discount: "Up to 40% off",
            description: "High-performance activewear",
            image: "https://i.pinimg.com/736x/4b/60/1d/4b601dd70a0bf17e077372a9fc566052.jpg",
            price: "$58.99",
        },
        {
            title: "Under Armour men's HeatGear Tank",
            discount: "30% off",
            description: "Lightweight, breathable tank perfect for workouts.",
            image: "https://i.pinimg.com/736x/c9/8b/41/c98b41c3cf974c120e18ddeb1324bdeb.jpg",
            price: "$29.99",
        },

        {
            title: "Under Armour men's Rival pent ti-shart",
            discount: "25% off",
            description: "Soft, cozy hoodie for cool-weather training.",
            image: "https://i.pinimg.com/736x/34/fd/4f/34fd4f5b36ea806943f86abed123e79d.jpg",
            price: "$49.99",
        }
        ,
        {
            title: "Under Armour men's Storm pent",
            discount: "35% off",
            description: "Water-resistant jacket for all-weather protection.",
            image: "https://i.pinimg.com/736x/26/c4/4f/26c44f8a70e9dfe7524cded7a38a7062.jpg",
            price: "$79.99",
        }


        , {
            title: "Under Armour men's UA Tech shirt",
            discount: "35% off",
            description: "Lightweight and breathable pants designed for comfort.",
            image: "https://i.pinimg.com/736x/88/15/a3/8815a3f9fcaa3f1cb5c40e9f24906dd9.jpg",
            price: "$54.99",
        }

        , {
            title: "Under Armour men's Fly Fast Shorts",
            discount: "20% off",
            description: "Ultra-lightweight running shorts for maximum movement.",
            image: "https://i.pinimg.com/736x/7e/97/de/7e97de572b2359aaf989a97af2c4247b.jpg",
            price: "$29.99",
        }
        , { 
            title: "Mango men's puma jecket",
            discount: "Up to 50% off",
            description: "Flowy and elegant for any occasion.",
            image: "https://i.pinimg.com/736x/80/45/c4/8045c4ac0f81d144997eff7672ab308d.jpg",
            price: "$59.99",
        }
        , {
            title: "Bershka High-Waisted Jeans",
            discount: "Flat 30% off",
            description: "Stylish and comfortable high-waisted jeans.",
            image: "https://i.pinimg.com/736x/24/70/07/247007860db7d83c0d3bf464683e1c99.jpg",
            price: "$39.99",
        }
        , {
            title: "Reebok men's Workout Tank",
            discount: "25% off",
            description: "Breathable fabric designed for high-intensity workouts.",
            image: "https://i.pinimg.com/236x/c2/b2/dc/c2b2dc4778d64722a4daf4b05061bf07.jpg",
            price: "$29.99",
        }
        , {
            title: "Puma men's Graphic jecket",
            discount: "35% off",
            description: "Soft and stylish for workouts or casual wear.",
            image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTm1WmPV8VDGispftehpgLOBYdKPu8GwqiHijGfLjyL-mzDV7sFFNLFOUfLMG5nbAsKvIbtbORZCsxne2_r08v6yyKQikRG713zxzUU6MzrFTdvA77YAjjI",
            price: "$24.99",
        }
        , {
            title: "Mango men's Chiffon ti-shirt",
            discount: "Up to 50% off",
            description: "Flowy and elegant for any occasion.",
            image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS56_xdODYJUlFo3icuK2v5oNMqBHpbQMXsMTaPjGEtJTZ9fsx0K3ir5yMxa-_vQZpMXDkktVYMAPo8ffHWuTSRCMAnhnRNsCW04JlBRnH56wDEccvANzRFAA",
            price: "$59.99",
        }
        , {
            title: "Bershka High-Waisted ti-shirt",
            discount: "Flat 30% off",
            description: "Stylish and comfortable high-waisted jeans.",
            image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTvAB47s6_v6_X72czrfnJ2JETQCWelym6aPt1pq5z3_5O_YqSY4231aakOVlSnOP8AY1uLCT_wSTwPQ2lXTuDkvFmthAz2tca4baU-Psf8BdyHbz8XOplSfw",
            price: "$39.99",
        }
        , {
            title: "formal cotton shirt degin and color",
            discount: "25% off",
            description: "Breathable fabric designed for high-intensity workouts.",
            image: "https://images.meesho.com/images/products/391273891/9nijn_1200.jpg",
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

export default Ms2