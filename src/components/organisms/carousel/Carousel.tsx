import React, { useState } from "react";
import "./carousel.css";
import { Box } from "@mui/material";
import { randomList, randomListProps } from "../../../utils/constants";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Carousel() {
  const carouselData = randomList;
  const [selectedItem, setSelectedItem] = useState(0); // Defaulting to the center item

  const adjustCarouselClass = (index) => {
    if (index < selectedItem) return `carousel-item  prev`;
    if (index === selectedItem) return `carousel-item active`;
    if (index > selectedItem) return `carousel-item  next`;
  };

  return (
    <Box id="programa" className="carousel p-8 bg-white">
      <div className="bg-gray-600 flex w-full rounded-md">
        <Box className="content">
          <Box
            className="carousel-controls"
            gap={1.5}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <Typography variant="h5">Find Your Destination</Typography>
            {carouselData.list.map(({ title, src }, index) => (
              <Button
                key={index}
                onClick={() => setSelectedItem(index)}
                sx={{
                  color: selectedItem === index ? "red" : "#000",
                }}
                className="button-carousel"
              >
                {title}
              </Button>
            ))}
          </Box>
          <Box className="carousel-container">
            {carouselData.list.map(({ title, src }, index) => (
              <div key={index} className={adjustCarouselClass(index)}>
                <img src={src} alt={`Carousel item ${index + 1}`} />
              </div>
            ))}
          </Box>

          <Box className="carousel-controls" gap={2}>
            <Typography variant="h5">Choose your city</Typography>
            {randomList.map(
              (
                item: { city: string; list: { title: string; src: string }[] },
                index
              ) => (
                <Button
                  key={index}
                  onClick={() => setCarouselData(item)}
                  sx={{
                    color: carouselData.city === item.city ? "orange" : "#000",
                  }}
                  className="button-carousel"
                >
                  {item.city}
                </Button>
              )
            )}
          </Box>
        </Box>
      </div>
    </Box>
  );
}

export default Carousel;
