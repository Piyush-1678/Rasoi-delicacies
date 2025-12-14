import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Butter from '../../public/assets/Butter.png';
import CustomContainer from '../common/CustomContainer';

const Home = () => {
    return (
        <Box className="home">
            <CustomContainer color="white">
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    height: { xs: '45vh', sm: '60vh', md: '80vh',lg:'90vh' },
                    width: { xs: '95vw', sm: '95vw', md: '90vw',lg:'90vw',xl:'90vw' },
                    padding: '2rem 0',
                    margin: '0 auto'
                }}>
                    <Box sx={{width:"100%"}} alignItems={'center'} justifyContent={'center'}>
                        <Typography className='primary-text' variant="h2" component="h1" gutterBottom>
                            Welcome to Rasoi Delicacies
                        </Typography>
                        <Typography className='secondary-text'>
                            Celebrating 30 Years of Timeless Delicacies—A Tradition of Unmatched Veg & Non-Veg Flavors!
                        </Typography>
                    </Box>
                    <Box sx={{width:"100%",alignItems:"center"}} justifyContent={'flex-end'}>
                        <Box
                            component="img"
                            src={Butter}
                            alt="Delicious Food"
                            sx={{
                                width: { xs: '40vw', sm: '40vw', md: '40vw',lg:'50vw' },
                                maxWidth: 500,
                                height: 'auto',
                                display: 'block'
                            }}
                        />
                    </Box>
                </Box>
            </CustomContainer>
        </Box>
    );
};

export default Home;