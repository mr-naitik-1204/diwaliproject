import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

function Sec3() {
  const latestCollectionItems = [
    {
      img: 'https://addys.in/cdn/shop/products/InShot_20230405_184445071.jpg?v=1680702261&width=360',
      brand: 'BRAND:GEEK',
      title: 'Viscose-Cashmere Scarf',
      price: '$450.00',
      rating: 3.5,
      sale: '13%',
      isNew: true
    },
    {
      img: 'https://addys.in/cdn/shop/products/InShot_20230328_184630977.jpg?v=1687597311&width=360',
      brand: 'BRAND:GEEK',
      title: 'Woolen Throw Blanket',
      price: '$320.00',
      rating: 4,
      sale: '20%',
      isNew: true
    },
    {
      img: 'https://addys.in/cdn/shop/products/InShot_20230328_184456436.jpg?v=1680010517&width=360',
      brand: 'BRAND:GEEK',
      title: 'Silk Evening Gown',
      price: '$1,200.00',
      rating: 4.5,
      sale: '5%',
      isNew: true
    },
    {
      img: 'https://addys.in/cdn/shop/files/rn-image_picker_lib_temp_5ae80cf4-cef7-4854-87d3-8ac867b3a9b6.jpg?v=1716801583&width=360',
      brand: 'BRAND:GEEK',
      title: 'Leather Handbag',
      price: '$950.00',
      rating: 4.2,
      sale: '10%',
      isNew: true
    },
    {
      img: 'https://addys.in/cdn/shop/files/rn-image_picker_lib_temp_bf6e9cca-3e53-42ae-a5d3-c95f9cf7b5c3.jpg?v=1716800966&width=360',
      brand: 'BRAND:GEEK',
      title: 'Linen Summer Dress',
      price: '$300.00',
      rating: 3.8,
      sale: '15%',
      isNew: true
    },
    {
      img: 'https://addys.in/cdn/shop/files/InShot-20241112_214107624.jpg?v=1731572259&width=360',
      brand: 'BRAND:GEEK',
      title: 'Winter Wool Coat',
      price: '$700.00',
      rating: 4.6,
      sale: '25%',
      isNew: true
    },
    {
      img: 'https://addys.in/cdn/shop/files/InShot_20230621_201203674.jpg?v=1688038848&width=360',
      brand: 'BRAND:GEEK',
      title: 'Round Neck Sweater',
      price: '$700.00',
      rating: 4.6,
      sale: '25%',
      isNew: true
    },
    {
      img: 'https://addys.in/cdn/shop/products/InShot_20230320_162119794.jpg?v=1688040671&width=360',
      brand: 'BRAND:GEEK',
      title: 'Faxon Canvas Low-Top Sneaker',
      price: '$450.00',
      rating: 4.6,
      sale: '25%',
      isNew: true
    },
    {
      img: 'https://addys.in/cdn/shop/files/InShot_20230621_180222636.jpg?v=1688041027&width=360',
      brand: 'BRAND:GEEK',
      title: 'Round Neck Sweater',
      price: '$700.00',
      rating: 4.6,
      sale: '25%',
      isNew: true
    },
    {
      img: 'https://addys.in/cdn/shop/files/rn-image_picker_lib_temp_7e77754b-b46f-40a8-a7d8-39748f681e36.jpg?v=1697025965&width=360',
      brand: 'BRAND:GEEK',
      title: 'Faxon Canvas Low-Top Sneaker',
      price: '$450.00',
      rating: 4.6,
      sale: '25%',
      isNew: true
    },
    {
      img: 'https://addys.in/cdn/shop/files/rn-image_picker_lib_temp_82c1dd04-48f0-4583-901d-1befe5cb2028.jpg?v=1696514087&width=360',
      brand: 'BRAND:GEEK',
      title: 'Round Neck Sweater',
      price: '$700.00',
      rating: 4.6,
      sale: '25%',
      isNew: true
    },
    {
      img: 'https://addys.in/cdn/shop/files/rn-image_picker_lib_temp_8be25a63-7e51-4bb4-ac9a-e73da307fd51.jpg?v=1696497252&width=360',
      brand: 'BRAND:GEEK',
      title: 'Faxon Canvas Low-Top Sneaker',
      price: '$450.00',
      rating: 4.6,
      sale: '25%',
      isNew: true
    },
    {
      img: 'https://addys.in/cdn/shop/products/product5-2.jpg?v=1687597516&width=600',
      brand: 'BRAND:GEEK',
      title: 'Cozy Knit Sweater',
      price: '$720.00',
      rating: 4.6,
      sale: '20%',
      isNew: true
    },
    {
      img: 'https://addys.in/cdn/shop/products/product6-2.jpg?v=1637600607&width=1100',
      brand: 'BRAND:GEEK',
      title: 'Chunky Knit Pullover',
      price: '$750.00',
      rating: 4.6,
      sale: '30%',
      isNew: true
    },
    {
      img: 'https://addys.in/cdn/shop/products/product17-2.jpg?v=1637693528&width=1100',
      brand: 'BRAND:GEEK',
      title: 'Wool Blend Sweater',
      price: '$690.00',
      rating: 4.6,
      sale: '15%',
      isNew: true
    },
    {
      img: 'https://addys.in/cdn/shop/products/product13-2.jpg?v=1688040702&width=1100',
      brand: 'BRAND:GEEK',
      title: 'Textured Fleece Sweater',
      price: '$680.00',
      rating: 4.6,
      sale: '25%',
      isNew: true
    },
    {
      img: 'https://addys.in/cdn/shop/products/product32-2.jpg?v=1637694488&width=1100',
      brand: 'BRAND:GEEK',
      title: 'Cotton Knit Hoodie',
      price: '$650.00',
      rating: 4.6,
      sale: '15%',
      isNew: true
    },
    {
      img: 'https://aknitting.ru/crn_fls/ak_pr/200327-pattern-knit-crochet-woman-jacket-autumn-winter-katia-6092-7-g.jpg',
      brand: 'BRAND:GEEK',
      title: 'Knit Crochet Cardigan',
      price: '$720.00',
      rating: 4.6,
      sale: '20%',
      isNew: true
    },
    {
      img: 'https://notchabove.in/cdn/shop/files/selena3pieceset1_1296x.jpg?v=1703222773',
      brand: 'BRAND:GEEK',
      title: 'Soft Cashmere Sweater',
      price: '$800.00',
      rating: 4.6,
      sale: '25%',
      isNew: true
    },
    {
      img: 'https://uptownie.com/cdn/shop/files/1_f1723ce6-dc02-4005-a0c8-bfe711c9d019_360x.png?v=1729930076',
      brand: 'BRAND:GEEK',
      title: 'Chunky Knit Pullover',
      price: '$750.00',
      rating: 4.6,
      sale: '30%',
      isNew: true
    },
    {
      img: 'https://i.pinimg.com/originals/cc/94/23/cc94235b33b6e39ebbf578a7de162b81.png',
      brand: 'BRAND:GEEK',
      title: 'Textured Wool Sweater',
      price: '$700.00',
      rating: 4.6,
      sale: '22%',
      isNew: true
    },
    {
      img: 'https://thoitrangmacnha.com.vn/wp-content/uploads/2019/05/cach-mix-giay-voi-quan-jean-skinny.jpg',
      brand: 'BRAND:GEEK',
      title: 'Trendy Fleece Sweatshirt',
      price: '$680.00',
      rating: 4.6,
      sale: '18%',
      isNew: true
    },
    {
      img: 'https://storeluxe.ru/image/cache/catalog/products/125110456-folder/7/45531404-plate-72456-sn-785x1000.jpg',
      brand: 'BRAND:GEEK',
      title: 'Striped Knit Sweater',
      price: '$770.00',
      rating: 4.6,
      sale: '25%',
      isNew: true
    },
    {
      img: 'https://uptownie.com/cdn/shop/files/4_8dd51c0c-dd44-49f4-9dcf-9aa246448c6b_360x.png?v=1729930075',
      brand: 'BRAND:GEEK',
      title: 'Classic Wool Pullover',
      price: '$750.00',
      rating: 4.6,
      sale: '20%',
      isNew: true
    },
    {
      img: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/d/5/d5fdb19PCF25_1.jpg?rnd=20200526195200&tr=w-512',
      brand: 'BRAND:GEEK',
      title: 'Cozy Knit Jumper',
      price: '$690.00',
      rating: 4.6,
      sale: '25%',
      isNew: true
    },
    {
      img: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/7/3/734f6b9A-PCF135_1.jpg?rnd=20200526195200&tr=w-512',
      brand: 'BRAND:GEEK',
      title: 'Textured Round Neck Pullover',
      price: '$710.00',
      rating: 4.6,
      sale: '22%',
      isNew: true
    },
    {
      img: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/1/c/1cde56bZZLPTRAIL4_1.jpg?rnd=20200526195200&tr=w-512',
      brand: 'BRAND:GEEK',
      title: 'Casual Hoodie',
      price: '$550.00',
      rating: 4.6,
      sale: '15%',
      isNew: true
    },
    {
      img: 'https://www.mumkins.in/cdn/shop/files/boys-kurta-pajama-bs10ish01-sky-blue-1.jpg?v=1725517681&width=1080',
      brand: 'BRAND:GEEK',
      title: 'V-Neck Cardigan',
      price: '$650.00',
      rating: 4.6,
      sale: '20%',
      isNew: true
    },
    {
      img: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/ofVBQK/original/edamamma-product/EST3KBSH71-10Y/665/EST3KBSH71-10Y_1_6031.webp',
      brand: 'BRAND:GEEK',
      title: 'Long Sleeve T-shirt',
      price: '$400.00',
      rating: 4.6,
      sale: '10%',
      isNew: true
    },
    {
      img: 'https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000410478470006/74-4Rwvwf6-000000410478470006_1.jpg',
      brand: 'BRAND:GEEK',
      title: 'Chunky Knit Sweater',
      price: '$750.00',
      rating: 4.6,
      sale: '25%',
      isNew: true
    },
    {
      img: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/ofVBQK/original/edamamma-product/EATTKBTS185-10Y/300/EATTKBTS185-10Y_1_4616.webp',
      brand: 'BRAND:GEEK',
      title: 'Woolen Pullover',
      price: '$700.00',
      rating: 4.6,
      sale: '30%',
      isNew: true
    },
    {
      img: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/ofVBQK/original/edamamma-product/EATTKBTS72-10Y/300/EATTKBTS72-10Y_1_1395.webp',
      brand: 'BRAND:GEEK',
      title: 'Fleece Sweatshirt',
      price: '$600.00',
      rating: 4.6,
      sale: '18%',
      isNew: true
    },
    {
      img: 'https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000410478395006/uUMO0a6bZ-000000410478395006_1.jpg',
      brand: 'BRAND:GEEK',
      title: 'Cozy Knit Jumper',
      price: '$720.00',
      rating: 4.6,
      sale: '22%',
      isNew: true
    },
  ];

  return (
    <Box sx={{ py: 5, background: "white" }}>
      <Grid container spacing={6} justifyContent="center">
        {latestCollectionItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                maxWidth: 345,
                margin: 'auto',
                backgroundColor: 'black',
                color: 'white',
                borderRadius: '15px',
                boxShadow: '0 6px 15px rgba(0,0,0,0.2)',
                position: 'relative', // Necessary for absolute positioning of elements
                overflow: 'hidden',  // Prevent the image from spilling out on hover
                // No need to apply hover effect to the entire card, only on the image
              }}
            >
              <Box sx={{ width: '100%',
                    height: '400px',overflow:"hidden"}}>
                <CardMedia
                  component="img"
                  image={item.img}
                  alt={item.title}
                  sx={{
                    width: '100%',
                    height: '400px', // Fixed height for the image
                    objectFit: 'cover', // Ensures image covers the area without stretching
                    borderTopLeftRadius: '15px',
                    borderTopRightRadius: '15px',
                    transition: 'transform 0.3s ease', // Smooth transition for the scale effect
                    '&:hover': {
                      transform: 'scale(1.1)', // Image zooms in when hovered
                    }
                  }}
                />
              </Box>
              <CardContent sx={{ flexGrow: 1 }}>
                {item.isNew && (
                  <Typography sx={{ color: '#2ECC71', fontWeight: 'bold' }}>NEW</Typography>
                )}
                <Typography sx={{ color: '#E74C3C', fontWeight: 'bold' }}>
                  SALE! {item.sale}
                </Typography>
                <Typography variant="body2" sx={{ color: '#888' }}>
                  {item.brand}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {item.title}
                </Typography>
                <Typography variant="h5" sx={{ color: '#E74C3C' }}>
                  {item.price}
                </Typography>
                <Typography>
                  {'★'.repeat(Math.floor(item.rating)) + (item.rating % 1 ? '½' : '')} ★★★☆☆
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>

  );
}

export default Sec3;
