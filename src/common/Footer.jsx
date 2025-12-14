import { Container, Typography, Box, Divider } from "@mui/material";
import React from "react";
import Logo from "../../public/logo.png";
import CustomContainer from "./CustomContainer";

const Footer = () => {
  return (
    <footer>
      <CustomContainer>
        <Box
          display={"flex"}
          alignItems="center"
          justifyContent={{
            xs: "flex-start",
            sm: "flex-start",
            md: "flex-start",
          }}
        >
          <Box
            my={1}
            component={"img"}
            src={Logo}
            sx={{
              width: { xs: "15vw", sm: "10vw", md: "10vw", lg: "5vw" },
              overflow: "hidden",
              height: "auto",
              objectFit: "contain",
            }}
          />
          <Typography
            ml={1}
            fontWeight={500}
            fontSize={{ xs: "1.4rem" }}
            variant="h5"
          >

            Rasoi Delicacies
          </Typography>
        </Box>

        <Divider sx={{ margin: "1rem auto", bgcolor: "lightgray" }} />
        <Typography sx={{ margin: "0.5rem auto" }}>
          &copy; {new Date().getFullYear()} Rasoi Delicacies. All rights
          reserved.
        </Typography>
      </CustomContainer>
    </footer>
  );
};

export default Footer;
