import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components';

function Ws1() {
  const CustomButton = styled('button')(({ theme }) => ({
    width: '200px', // Set the button width
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(15, 15, 15)',
    border: 'none',
    color: 'white',
    fontWeight: 700,
    gap: '8px',
    cursor: 'pointer',
    boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.103)',
    position: 'relative',
    overflow: 'hidden',
    transitionDuration: '.3s',
  
    '& .svgIcon': {
      width: '16px',
    },
  
    '& .svgIcon path': {
      fill: 'white',
    },
  
    '&::before': {
      width: '0%', // Start with 0% width
      height: '130px',
      position: 'absolute',
      content: '""',
      backgroundColor: 'white',
      borderRadius: '50%',
      left: '50%',
      top: '50%',
      transitionDuration: '.3s',
      mixBlendMode: 'difference',
      transform: 'translate(-50%, -50%)', // Center the circle
    },
  
    '&:hover::before': {
      transition:"2s",
      width: '200%', // Stretch the circle to cover the entire button width
      transform: 'translate(-50%, -50%) scale(1)', // Ensure the circle is centered and scales properly
      borderRadius: 0, // Remove the circle shape
    },
  
    '&:active': {
      transform: 'translate(5px,5px)',
      transitionDuration: '.3s',
    },
  }));


  return (
    <>
      <Box
        sx={{
          background: "linear-gradient(90deg, rgba(0, 0, 0, 0.8)  0%, rgba(255,255,255,1) 100%)",
          position: "relative",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: { xs: "auto", md: "200px" },
          mt: 0,
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
          overflow: "hidden",
          width: "100%",
          maxWidth: "100vw",
          flexDirection: { xs: "column", md: "row" },
          textAlign: { xs: "center", md: "left" },
          pt: 6,
          pb: 6
        }}
      >

        <Box mb={{ xs: 2, md: 0 }}>
          <img
            src="https://i.pinimg.com/originals/4c/1e/67/4c1e679883d1355b9ee0aa0fd832ee4f.png"
            width="220px"
            alt="Icon Left"
            style={{
              transform: "scale(1.1)",
              borderRadius: "50%",
              width: { xs: "100px", md: "150px" }
            }}
          />
        </Box>

        <Box sx={{ textAlign: { xs: "center", md: "center" }, alignItems: "center" }}>
          <Typography variant="h4" sx={{
            fontWeight: 'bold',
            mb: 1,
            fontSize: { xs: "1.5rem", md: "2rem" },
            color: "white"
          }}>
            Personal Shopper
          </Typography>
          <Typography sx={{
            color: 'white',
            mb: 2,
            fontSize: { xs: "0.9rem", md: "1rem" }
          }}>
            What's your style? Let us help you find it.
          </Typography>


          {/* <Button
            variant="contained"
            color="black"
            sx={{
              backgroundColor: "white",
              padding: { xs: "8px 12px", md: "10px 15px" },
              borderRadius: "5px",
              fontWeight: "bold",
              textTransform: "uppercase",
              fontSize: { xs: "0.75rem", md: "1rem" },
            }}
          >
            Book Your Advisor→
          </Button> */}

          <CustomButton>
          Book Your Advisor→
            {/* <svg className="svgIcon" viewBox="0 0 576 512">
              <path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"></path>
            </svg> */}
          </CustomButton>

        </Box>

        <Box mt={{ xs: 2, md: 0 }} sx={{ mb: 0 }}>
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/034/028/820/small_2x/fashion-model-girl-in-beige-wear-png.png"

            alt="Icon Right"
            style={{
              transform: "scale(1.1)",
              width: { xs: "90px", md: "200px" }
            }}
          />
        </Box>
      </Box>

    </>
  )
}

export default Ws1