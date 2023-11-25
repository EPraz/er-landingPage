import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./HeroSection.css";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const HeroSection = () => {
  //   const social_media = [
  //     { icon: "logo-facebook", link: " link here" },
  //     { icon: "logo-instagram", link: "google.com" },
  //   ];

  return (
    <Box className="hero" id="home">
      <Box className="content">
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" className="subTitle">
            Exploradores del Rey
          </Typography>
          <Typography className="bigTitle" sx={{ marginLeft: "137px" }}>
            Panama
          </Typography>
        </Box>
        <Box style={{ display: "flex", gap: "10px" }}>
          <Link to={"#link here"}>
            <FacebookIcon sx={{ color: "#fff" }} />
          </Link>
          <Link to={"#link here"}>
            <InstagramIcon sx={{ color: "#fff" }} />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
