import { Box, Container, IconButton, Typography } from '@mui/material';
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function Slider() {

    const slides = [
        {
          img: 'https://img.freepik.com/free-psd/black-friday-banner-template_23-2149094785.jpg?w=900&t=st=1727413218~exp=1727413818~hmac=664b5e9b230374a60e0c6faef3872d49cdfef8ab118796104cbea46fbdb16779',
          caption: 'Slide 1: Nature vs Synthetic'
        },
        {
          img: 'https://img.freepik.com/free-psd/fashion-concept-banner-template-style_23-2148582738.jpg?t=st=1727413160~exp=1727416760~hmac=9d05d371ba236131afd0575150214001cbef31f2512ad463a6402b51048db262&w=740',
          caption: 'Slide 2: Personal Shopper'
        },
        {
          img: 'https://img.freepik.com/free-psd/fashion-concept-horizontal-banner_23-2148582739.jpg',
          caption: 'Slide 3: Exploring New Ideas'
        },
        {
          img: 'https://img.freepik.com/free-psd/natural-cosmetics-template-banner_23-2148671399.jpg?w=900&t=st=1727411418~exp=1727412018~hmac=c96d9863623a6c93fc8bb0c1fc2ef5b320eb424092a9c02563117c3d4c26edee',
          caption: 'Slide 4: Minimalism'
        },
        {
          img: 'https://img.freepik.com/free-psd/banner-fashion-store-ad-template_23-2148675209.jpg?ga=GA1.1.439435672.1716038743',
          caption: 'Slide 5: Urban Adventures'
        },
        {
          img: 'https://img.freepik.com/free-psd/beautiful-model-banner-template_23-2148986055.jpg?w=900&t=st=1727412603~exp=1727413203~hmac=9973d80ed696d01ad7f8ddb179a0c897696b86f9864750fd30d610c876a6720f',
          caption: 'Slide 6: Modern Living'
        }
      ];

    return (
        <>
            <Box sx={{ background: "#fb892d", py: 4 }}>
                <Container>
                    <Box
                        sx={{
                            width: { xs: '95%', sm: '90%', md: '80%', lg: '70%' },
                            margin: 'auto',
                            borderRadius: '20px',
                            boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.3)',
                            overflow: 'hidden',
                            position: 'relative',
                            transition: 'transform 0.5s ease',
                            '&:hover': {
                                transform: 'scale(1.02)',
                            },
                        }}
                    >
                        <Carousel
                            showThumbs={false}
                            autoPlay
                            infiniteLoop
                            interval={3000}
                            showStatus={false}
                            stopOnHover={false}
                            transitionTime={1000}
                            emulateTouch={true}
                            renderArrowPrev={(clickHandler, hasPrev) => (
                                <IconButton 
                                    sx={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: 10,
                                        transform: 'translateY(-50%)',
                                        zIndex: 2,
                                        backgroundColor: 'rgba(0,0,0,0.5)',
                                        color: 'white',
                                        borderRadius: '50%',
                                        p: 1,
                                        '&:hover': {
                                            backgroundColor: 'rgba(255, 255, 255, 0.7)',
                                            color: 'black',
                                        },
                                    }}
                                    onClick={clickHandler}
                                    disabled={!hasPrev}
                                >
                                    <ArrowBackIosIcon />
                                </IconButton>
                            )}
                            renderArrowNext={(clickHandler, hasNext) => (
                                <IconButton
                                    sx={{
                                        position: 'absolute',
                                        top: '50%',
                                        right: 10,
                                        transform: 'translateY(-50%)',
                                        zIndex: 2,
                                        backgroundColor: 'rgba(0,0,0,0.5)',
                                        color: 'white',
                                        borderRadius: '50%',
                                        p: 1,
                                        '&:hover': {
                                            backgroundColor: 'rgba(255, 255, 255, 0.7)',
                                            color: 'black',
                                        },
                                    }}
                                    onClick={clickHandler}
                                    disabled={!hasNext}
                                >
                                    <ArrowForwardIosIcon />
                                </IconButton>
                            )}
                        >
                            {slides.map((slide, index) => (
                                <Box key={index} sx={{ position: 'relative' }}>
                                    <img
                                        src={slide.img}
                                        alt={`Slide ${index + 1}`}
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                            objectFit: 'cover',
                                            filter: 'brightness(90%) contrast(105%)',
                                            borderRadius: '20px',
                                            transition: 'transform 0.4s ease',
                                        }}
                                    />
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            width: '100%',
                                            backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                            color: 'white',
                                            padding: '10px 20px',
                                            boxSizing: 'border-box',
                                            textAlign: 'left',
                                        }}
                                    >
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                fontWeight: 'bold',
                                                textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)',
                                                animation: 'slideIn 1s ease-out',
                                                '@keyframes slideIn': {
                                                    from: {
                                                        transform: 'translateY(20px)',
                                                        opacity: 0,
                                                    },
                                                    to: {
                                                        transform: 'translateY(0)',
                                                        opacity: 1,
                                                    }
                                                }
                                            }}
                                        >
                                            {slide.caption}
                                        </Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Carousel>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default Slider