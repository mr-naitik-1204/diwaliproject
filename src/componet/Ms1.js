import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'

function Ms1() {
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
            color:"white"
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
          <Button 
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
          </Button>
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

export default Ms1