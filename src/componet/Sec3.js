import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

function Sec3() {
  const latestCollectionItems = [
    {
      img: 'https://i.pinimg.com/originals/ec/7c/05/ec7c05cb5810ba81254adc66569aec52.png', 
      brand: 'BRAND:GEEK',
      title: 'Viscose-Cashmere Scarf',
      price: '$450.00',
      rating: 3.5,
      sale: '13%',
      isNew: true
    },
    {
      img: 'https://3.bp.blogspot.com/-62TdixssPwU/VSiEXeHV7-I/AAAAAAABBno/lyyqmfxcAt8/s1600/what%2Bis%2Bhis%2Bname.jpg', 
      brand: 'BRAND:GEEK',
      title: 'Woolen Throw Blanket',
      price: '$320.00',
      rating: 4,
      sale: '20%',
      isNew: true
    },
    {
      img: 'https://i.pinimg.com/736x/21/3a/af/213aafba78f2ee45b974f06c67ccee09--male-models-poses-studio-poses.jpg', 
      brand: 'BRAND:GEEK',
      title: 'Silk Evening Gown',
      price: '$1,200.00',
      rating: 4.5,
      sale: '5%',
      isNew: false
    },
    {
      img: 'https://i.pinimg.com/736x/44/56/aa/4456aa4e1722a18e989c56e5bdfc80ef.jpg', 
      brand: 'BRAND:GEEK',
      title: 'Leather Handbag',
      price: '$950.00',
      rating: 4.2,
      sale: '10%',
      isNew: true
    },
    {
      img: 'https://i.pinimg.com/originals/66/e4/55/66e455bc6096c813c5e2d0913f0bac1f.jpg', 
      brand: 'BRAND:GEEK',
      title: 'Linen Summer Dress',
      price: '$300.00',
      rating: 3.8,
      sale: '15%',
      isNew: false
    },
    {
      img: 'https://cdn1.ozone.ru/s3/multimedia-9/6324553257.jpg', 
      brand: 'BRAND:GEEK',
      title: 'Winter Wool Coat',
      price: '$700.00',
      rating: 4.6,
      sale: '25%',
      isNew: true
    },
    {
      img: 'https://i.pinimg.com/736x/49/5a/7d/495a7de7da8964699bad6f6b9c10e71c.jpg', 
      brand: 'BRAND:GEEK',
      title: 'Round Neck Sweater',
      price: '$700.00',
      rating: 4.6,
      sale: '25%',
      isNew: true
    },
    {
      img: 'https://main-cdn.sbermegamarket.ru/big2/hlr-system/-40/426/792/632/420/5/100050446514b0.jpg', 
      brand: 'BRAND:GEEK',
      title: 'Faxon Canvas Low-Top Sneaker',
      price: '$450.00',
      rating: 4.6,
      sale: '25%',
      isNew: true
    },
    {
        img: 'https://www.careyfashion.com/wp-content/uploads/2016/12/jeans-pants-2.jpg', 
        brand: 'BRAND:GEEK',
        title: 'Round Neck Sweater',
        price: '$700.00',
        rating: 4.6,
        sale: '25%',
        isNew: true
      },
      {
        img: 'https://i.pinimg.com/originals/89/e6/e6/89e6e6d5ea02baaae4d6d7d44575f45e.jpg', 
        brand: 'BRAND:GEEK',
        title: 'Faxon Canvas Low-Top Sneaker',
        price: '$450.00',
        rating: 4.6,
        sale: '25%',
        isNew: true
      }, 
      {
        img: 'https://lklassika.ru/pictures/product/big/5360_big.JPG', 
        brand: 'BRAND:GEEK',
        title: 'Round Neck Sweater',
        price: '$700.00',
        rating: 4.6,
        sale: '25%',
        isNew: true
      },
      {
        img: 'https://lklassika.ru/pictures/product/big/5394_big.JPG', 
        brand: 'BRAND:GEEK',
        title: 'Faxon Canvas Low-Top Sneaker',
        price: '$450.00',
        rating: 4.6,
        sale: '25%',
        isNew: true
      },
      {
        img: 'https://avatars.mds.yandex.net/i?id=c5ccf2214d8c3393ceb03509cbf79aa4_l-4829635-images-thumbs&ref=rim&n=13&w=800&h=800',
        brand: 'BRAND:GEEK',
        title: 'Cozy Knit Sweater',
        price: '$720.00',
        rating: 4.6,
        sale: '20%',
        isNew: true
      },
      {
        img: 'https://avatars.mds.yandex.net/i?id=55ecc6a12bd1a5b0c75da713df110859_l-7761179-images-thumbs&ref=rim&n=13&w=800&h=800',
        brand: 'BRAND:GEEK',
        title: 'Chunky Knit Pullover',
        price: '$750.00',
        rating: 4.6,
        sale: '30%',
        isNew: true
      },
      {
        img: 'https://i.pinimg.com/originals/14/e3/1b/14e31b3abdbdd8acbf87764124a68934.jpg',
        brand: 'BRAND:GEEK',
        title: 'Wool Blend Sweater',
        price: '$690.00',
        rating: 4.6,
        sale: '15%',
        isNew: true
      },
      {
        img: 'https://i.pinimg.com/originals/1f/e6/15/1fe615ce0a956d31c7d24b0522b6f267.jpg',
        brand: 'BRAND:GEEK',
        title: 'Textured Fleece Sweater',
        price: '$680.00',
        rating: 4.6,
        sale: '25%',
        isNew: true
      },
      {
        img: 'https://us03-imgcdn.ymcart.com/57815/2021/06/15/e/6/e69867dcb6df26d8.jpg?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_500,h_500',
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
        img: 'https://www.dhresource.com/webp/m/0x0/f2/albu/g5/M01/74/55/rBVaI1l5UcaAXGwDAAKBozanJhI282.jpg',
        brand: 'BRAND:GEEK',
        title: 'Soft Cashmere Sweater',
        price: '$800.00',
        rating: 4.6,
        sale: '25%',
        isNew: true
      },
      {
        img: 'https://media3.newlookassets.com/i/newlook/572235940D3.jpg?strip=true&qlt=80&w=800&h=900',
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
        img: 'http://www.apsraa.com/media/catalog/product/cache/1/image/800x900.44444444444/9df78eab33525d08d6e5fb8d27136e95/2/1/21_3.jpg',
        brand: 'BRAND:GEEK',
        title: 'Classic Wool Pullover',
        price: '$750.00',
        rating: 4.6,
        sale: '20%',
        isNew: true
      },
      {
        img: 'https://cdn1.ozone.ru/s3/multimedia-x/6807246621.jpg',
        brand: 'BRAND:GEEK',
        title: 'Cozy Knit Jumper',
        price: '$690.00',
        rating: 4.6,
        sale: '25%',
        isNew: true
      },
      {
        img: 'https://i.pinimg.com/originals/e1/cf/16/e1cf16b3a0a42ec710a59c6cfdff6608.jpg',
        brand: 'BRAND:GEEK',
        title: 'Textured Round Neck Pullover',
        price: '$710.00',
        rating: 4.6,
        sale: '22%',
        isNew: true
      },
      {
        img: 'https://d2r9epyceweg5n.cloudfront.net/stores/001/389/664/products/conjunto-pijama-infantil-menina-carters-4-pecas-monstrinhos-2i5546101-83671856634c6c424c16248199772305-1024-1024.jpg',
        brand: 'BRAND:GEEK',
        title: 'Casual Hoodie',
        price: '$550.00',
        rating: 4.6,
        sale: '15%',
        isNew: true
      },
      {
        img: 'http://www.multibrandonline.ru/media/catalog/product/cache/1/image/800x900/08588bf74280018fbc121e4a26970187/1/_/1_jk-8142_enl.jpg',
        brand: 'BRAND:GEEK',
        title: 'V-Neck Cardigan',
        price: '$650.00',
        rating: 4.6,
        sale: '20%',
        isNew: true
      },
      {
        img: 'https://i.pinimg.com/originals/11/d8/7f/11d87f8bbe7922207956760992b7ab5c.jpg',
        brand: 'BRAND:GEEK',
        title: 'Long Sleeve T-shirt',
        price: '$400.00',
        rating: 4.6,
        sale: '10%',
        isNew: true
      },
      {
        img: 'http://s7d3.scene7.com/is/image/JanieAndJack/100013548?req=tile&id=1oV9S0surdABNndqOyR2Wu&rect=0,0,800,900&scl=2&fmt=jpg',
        brand: 'BRAND:GEEK',
        title: 'Chunky Knit Sweater',
        price: '$750.00',
        rating: 4.6,
        sale: '25%',
        isNew: true
      },
      {
        img: 'http://www.multibrandonline.ru/media/catalog/product/cache/1/image/800x900/08588bf74280018fbc121e4a26970187/1/_/1_jk-49396_enl.jpg',
        brand: 'BRAND:GEEK',
        title: 'Woolen Pullover',
        price: '$700.00',
        rating: 4.6,
        sale: '30%',
        isNew: true
      },
      {
        img: 'https://i.pinimg.com/originals/9c/83/ab/9c83ab87aab2650141f7eeb10c69116c.jpg',
        title: 'Fleece Sweatshirt',
        price: '$600.00',
        rating: 4.6,
        sale: '18%',
        isNew: true
      },
      {
        img: 'https://i.pinimg.com/originals/5d/88/23/5d882397078c855d3bb57e604124c30e.jpg',
        brand: 'BRAND:GEEK',
        title: 'Cozy Knit Jumper',
        price: '$720.00',
        rating: 4.6,
        sale: '22%',
        isNew: true
      },
  ];

  return (
    <Box sx={{ py: 5, background: "#FB892D" }}>
      <Grid container spacing={6} justifyContent="center">
        {latestCollectionItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                maxWidth: 345,
                height:"430px",
                margin: "auto",
                backgroundColor:"black",
                color:"white",
                borderRadius: '15px',
                boxShadow: '0 6px 15px rgba(0,0,0,0.2)',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                }
              }}
            >
              <CardMedia
                component="img"
                height="250"  // Set a fixed height for the image
                image={item.img}
                alt={item.title}
                sx={{ objectFit: 'cover' }}  // Ensure the image covers the area without stretching
              />
              <CardContent sx={{ flexGrow: 1 }}>
                {item.isNew && <Typography sx={{ color: '#2ECC71', fontWeight: 'bold' }}>NEW</Typography>}
                <Typography sx={{ color: '#E74C3C', fontWeight: 'bold' }}>SALE! {item.sale}</Typography>
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
