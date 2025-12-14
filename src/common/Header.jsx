import { Box, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as React from "react";
import SwipeableTemporaryDrawer from "./MobileNav";
import Logo from "../../public/logo.png";
import { Link } from "react-router-dom";

export default function AccountMenu() {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const [scrolled, setScrolled] = React.useState(false);

  const scrollToSection = (id) => (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // fallback: set hash so router can handle or user can navigate
      window.location.hash = `#${id}`;
    }
  };

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <React.Fragment>
      {isSmallScreen ? (
        <SwipeableTemporaryDrawer />
      ) : (
        <Box
          className={`header${scrolled ? " scrolled" : ""}`}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 20px",
            height: "5rem",
          }}
        >
          <Box
            className="logo"
            sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
          >
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                fontSize: {
                  xs: "1.2rem",
                  sm: "1.4rem",
                  md: "1.8rem",
                  lg: "2rem",
                },
                color: "white",
                fontWeight: "500",
              }}
            >
              <Box
                component="img"
                src={Logo}
                alt="Delicious Food"
                sx={{
                  width: { xs: "1.3vw", sm: "5vw", md: "5vw", lg: "4.5vw" },
                  maxWidth: 500,
                  height: "auto",
                  margin: "20px auto",
                  display: "block",
                  marginRight: "10px",
                }}
              />
              Rasoi Delicacies
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              color: "white",
            }}
          >
            <Typography
              sx={{
                minWidth: { xs: 60, sm: 80, md: 100 },
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" },
              }}
            >
              <a href="#home" onClick={scrollToSection('home')} style={{ color: 'inherit', textDecoration: 'none' }}>Home</a>{" "}
            </Typography>
            <Typography
              sx={{
                minWidth: { xs: 60, sm: 80, md: 100 },
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" },
              }}
            >
              <a href="#about" onClick={scrollToSection('about')} style={{ color: 'inherit', textDecoration: 'none' }}>About</a>
            </Typography>
            <Typography
              sx={{
                minWidth: { xs: 60, sm: 80, md: 100 },
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" },
              }}
            >
              <a href="#menu" onClick={scrollToSection('menu')} style={{ color: 'inherit', textDecoration: 'none' }}>Menu</a>
            </Typography>
            {/* <Typography
              sx={{
                minWidth: { xs: 60, sm: 80, md: 100 },
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" },
              }}
            >
              <Link>Contact</Link>
            </Typography>
            <Typography
              sx={{
                minWidth: { xs: 60, sm: 80, md: 100 },
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" },
              }}
            >
              <Link>Services</Link>
            </Typography> */}
          </Box>
        </Box>
      )}
    </React.Fragment>
  );
}
