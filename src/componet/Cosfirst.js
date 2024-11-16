import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'

function Cosfirst() {
  return (
    <>
     <Box
        sx={{
          backgroundColor: 'white',
        
          borderRadius: { xs: '0', md: '900px 0 0 900px' }, 
          padding: { xs: '30px 0', md: '50px 0' }, 
        }}
      >
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
        >
       
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              textAlign: { xs: 'center', md: 'left' }, 
            }}
          >
            <Box
              sx={{
                padding: { xs: '10px', md: '20px' }, 
                ml: { md: 4 }, 
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 'bold',
                  mb: 3,
                  fontSize: { xs: '2rem', md: '3rem' }, 
                }}
              >
                Join Our Fashion Community
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  color: '#555',
                  fontSize: { xs: '1rem', md: '1.25rem' }, 
                }}
              >
                At Fashion Hub, fashion is more than clothing. It’s a movement. Join us on our journey to create a world where style knows no boundaries.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: 'white',
                  color: 'black',
                  fontWeight:"700",
                  padding: { xs: '8px 16px', md: '10px 20px' }, 
                  borderRadius: '30px',
                  fontSize: { xs: '0.875rem', md: '1rem' },
                }}
              >
                SHOP NOW →
              </Button>
            </Box>
          </Grid>

     
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              textAlign: 'center', 
              mt: { xs: 4, md: 0 }, 
            }}
          >
            <Box>
              <img
                src="https://img.freepik.com/free-photo/donation-community-service-volunteer-support_53876-121174.jpg?w=826&t=st=1727276473~exp=1727277073~hmac=859fe28c05c24d34ab79e15eb728e5644b76f7a6a309fb7c9f70550f4a155679"
                alt="Fashion Community"
                style={{
                  maxWidth: '100%',
                  borderRadius: '900px 10px 10px 900px',
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    
    </>
  )
}

export default Cosfirst