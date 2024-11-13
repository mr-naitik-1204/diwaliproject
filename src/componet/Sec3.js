import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

function Sec3() {
  const latestCollectionItems = [
    {
      img: 'https://static.wixstatic.com/media/c837a6_f8d49ec34c8a4f95890362cc7a53f89b~mv2.jpg/v1/fill/w_215,h_287,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_f8d49ec34c8a4f95890362cc7a53f89b~mv2.jpg', 
      brand: 'BRAND:GEEK',
      title: 'Viscose-Cashmere Scarf',
      price: '$450.00',
      rating: 3.5,
      sale: '13%',
      isNew: true
    },
    {
      img: 'https://static.wixstatic.com/media/c837a6_8ea5cc0a06664ef6a3c1cf64e1cb5a27~mv2.jpg/v1/fill/w_215,h_287,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_8ea5cc0a06664ef6a3c1cf64e1cb5a27~mv2.jpg', 
      brand: 'BRAND:GEEK',
      title: 'Woolen Throw Blanket',
      price: '$320.00',
      rating: 4,
      sale: '20%',
      isNew: true
    },
    {
      img: 'https://static.wixstatic.com/media/c837a6_ce32dd298b274ba280efa267e075be21~mv2.jpg/v1/fill/w_215,h_287,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_ce32dd298b274ba280efa267e075be21~mv2.jpg', 
      brand: 'BRAND:GEEK',
      title: 'Silk Evening Gown',
      price: '$1,200.00',
      rating: 4.5,
      sale: '5%',
      isNew: true
    },
    {
      img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSy9Gl05VDPYg1y0VPOag7iL7AAiTM4-1dhPCWnp9da4vMkPK_OUD3Fy_J9aLZgX2A1PCIL76O4ZNGl4CgzrmSIg3Azpx1n62tYF-fm0ml7Ecmktc8BSpNlBQ&usqp=CAE', 
      brand: 'BRAND:GEEK',
      title: 'Leather Handbag',
      price: '$950.00',
      rating: 4.2,
      sale: '10%',
      isNew: true
    },
    {
      img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ1PpG61d9JO84B0LtU2qHxoQFsYN0kwwr3Hlxr5C7xaw7FsGQJdjv5V7CqdH2eKaf2i2eTm-bJq3X7-LST598VkOMTSSs4QPGiMRB72WhwN-EBkEKGgGhnmw&usqp=CAE', 
      brand: 'BRAND:GEEK',
      title: 'Linen Summer Dress',
      price: '$300.00',
      rating: 3.8,
      sale: '15%',
      isNew: true
    },
    {
      img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQLZw-SFMPT2aIq7cARTiaBz6oyUrVlUtAGkEmvxy00qNzRcCD_DIkwXzOlZh0h5zI-TgIfNYUayQNGU5Gshtv8uoNhZB_P9KqAaL8fwJUBSsNxwfkXXChh3g&usqp=CAE', 
      brand: 'BRAND:GEEK',
      title: 'Winter Wool Coat',
      price: '$700.00',
      rating: 4.6,
      sale: '25%',
      isNew: true
    },
    {
      img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSCR3nymeAFzC4R0OWjGLiZxSg_HyZy0IjYKBIwSxzWzFtPgblsh7Hd2Oew8hIQrJe2Heuiu2AUnowQQCWcMlbqQrVNwE1Lktb5u_2ibz9oR6tesKbkbT6T4w', 
      brand: 'BRAND:GEEK',
      title: 'Round Neck Sweater',
      price: '$700.00',
      rating: 4.6,
      sale: '25%',
      isNew: true
    },
    {
      img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQfj-BKZKTBcEWTszvOhSzQWwc6kvpWtM_F-kZrtAX3FvUCB3q8Yc4HQkiAqNhNFjjvGnls_sv1BX5gX3m4AIdaCjgrg5Mejka6X6vU4lJB0n5wCe6VBUy1dQ', 
      brand: 'BRAND:GEEK',
      title: 'Faxon Canvas Low-Top Sneaker',
      price: '$450.00',
      rating: 4.6,
      sale: '25%',
      isNew: true
    },
    {
        img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRM7MvQvyLWcrK5AC-tRUqiy340zxPTYx20KmIhNMOcovgk2ykoeRXN3rzp_gS8xlhMiGsx5xtUmaAEXQQGlfLsnOuAZGucRR0s9XouLbrJtqlDwhOyAG8pgw', 
        brand: 'BRAND:GEEK',
        title: 'Round Neck Sweater',
        price: '$700.00',
        rating: 4.6,
        sale: '25%',
        isNew: true
      },
      {
        img: 'https://images.meesho.com/images/products/142474229/lfoq1_1200.jpg', 
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
        brand: 'BRAND:GEEK',
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
    <Box sx={{ py: 5, background: "white" }}>
    <Grid container spacing={6} justifyContent="center">
      {latestCollectionItems.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              maxWidth: 345,
              margin: "auto",
              backgroundColor: "black",
              color: "white",
              borderRadius: '15px',
              boxShadow: '0 6px 15px rgba(0,0,0,0.2)',
              // transition: 'transform 0.3s ease',
              // '&:hover': {
              //   transform: 'scale(1.05)', // Scaling the entire card on hover
              // }
            }}
          >
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
                transition: 'transform 0.3s ease', // Smooth transition on hover
                '&:hover': {
                  transform: 'scale(1.1)', // Image zooms in when hovered
                }
              }}
            />
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
