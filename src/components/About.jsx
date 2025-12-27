import React from 'react';

import { Box, Container, Typography, Grid } from "@mui/material";
import MainLogo from '../../public/Fulllogo.png';
import CustomContainer from '../common/CustomContainer';
const About = () => {
    return (
        <section className='about' id="about">
            <CustomContainer color="black">
                <Grid container spacing={0}>
                    <Grid display="flex" alignItems="center" justifyContent="center" size={{ xs: 12, md: 6, lg: 7 }}>
                        <Typography className='content-section' sx={{ backgroundColor: '#FBFBFB' }}>
                            <span className='heading-text'>
                                About Us
                            </span><br />
                            <span className='content-text'>

                                For over 30 years, Rasoi has been a cherished destination for food lovers seeking authentic flavors and timeless delicacies. Established with a passion for culinary excellence, our restaurant has proudly served generations with the same commitment to quality and taste since day one.
                                Our signature dishes—Fried & Garlic Fish and Butter Chicken—have become legendary among our patrons. Each recipe is crafted with the finest ingredients, free from artificial preservatives and colors, ensuring every bite is as wholesome as it is delicious. We believe in preserving the true essence of traditional cooking, allowing the natural flavors to shine through in every dish.
                                <br/><br/>
                                At Rasoi, we honor our legacy by maintaining the same standards and taste that have delighted our guests for three decades. Whether you're a fan of our classic non-veg specialties or our wide range of vegetarian offerings, you'll experience the warmth, hospitality, and unforgettable flavors that define us.
                            </span>
                        </Typography>
                    </Grid>
                    <Grid display="flex" justifyContent="start" size={{ xs: 12, md: 6, lg: 5 }}>
                        <Box
                            component="img"
                            src={MainLogo}
                            alt="Delicious Food"
                            sx={{
                                width: { xs: '50vw', sm: '55vw', md: '35vw', lg: '38vw' },
                                overflow: 'hidden',
                                height: 'auto',
                                objectFit: "contain",
                                zIndex: -1,
                                margin: { xs: '0rem auto', sm: "-1.5rem auto", md: '-1rem auto 0rem', lg: '-5rem auto 0rem' },
                            }}
                        />
                    </Grid>
                </Grid>

            </CustomContainer>
        </section>
    );
};

export default About;