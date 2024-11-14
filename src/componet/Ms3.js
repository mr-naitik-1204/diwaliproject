import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'

function Ms3() {
  return (
    <>
    
    <Box
        sx={{
          backgroundColor: '#000',
          display: "flex",    
          textAlign: 'center',
          position: 'relative',
          pb:4,
          mt:0
          ,borderRadius:"150px 0 150px 0"
        }}>
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
          sx={{
            margin: '0 auto',
            position: 'relative',
            maxWidth: '1200px' 
          }}
        >

        
          <Grid
            item
            xs={12}
            md={4}
            sx={{ display: { xs: 'none', md: 'block' } }}
          >
            <Box>
              <img
                src="https://www.shutterstock.com/image-photo/rome-italy-circa-november-2017-260nw-1154455039.jpg"
                alt="Fashion Community"
                style={{
                  width: '100%', 
                  height: 'auto',
                  borderRadius: '40px 0px 40px 0px',
                }}
              />
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
          >
            <Box sx={{ padding: '10px', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
              <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3,color:"red" }}>
              "Crafted for the Fearless."

              </Typography>
              <Typography variant="body1" sx={{ mb: 4, color: '#fff ' }}>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi eligendi exercitationem facilis dicta maxime itaque magnam officia, labore facere neque vel commodi doloremque nam velit expedita perferendis aspernatur quas debitis?
              </Typography>
              <Button
                variant="contained"
                sx={{
                    fontWeight:"700",
                  backgroundColor: 'white',
                  color: 'black',
                  padding: '10px 20px',
                  borderRadius: '30px'
                }}
              >
                SHOP NOW →
              </Button>
            </Box>
          </Grid>

         
          <Grid
            item
            xs={12}
            md={4}
            sx={{ display: { xs: 'none', md: 'block' } }}
          >
            <Box>
              <img
                src="https://www.shutterstock.com/image-photo/men-shopping-shirts-clothing-store-260nw-2198623377.jpg"
                alt="Fashion Community"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '40px 0px 40px 0px',
                }}
              />
            </Box>
          </Grid>

        </Grid>
      </Box>

    </>
  )
}

export default Ms3