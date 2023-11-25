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
    <Box className="carousel">
      <Box className="content">
        <Box
          className="carousel-controls"
          gap={1.5}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <Typography variant="h5">Find Your Destination</Typography>
          {carouselData
            .slice(0, 4)
            .map((item: randomListProps, index: number) => (
              <Button
                key={index}
                onClick={() => setSelectedItem(index)}
                sx={{
                  ":focus": { outline: "none" },
                  color: selectedItem === index ? "red" : "#000",
                }}
                className="button-carousel"
              >
                {item.title}
              </Button>
            ))}
        </Box>
        <Box
          className="carousel-controls"
          gap={1.5}
          sx={{
            display: { xs: "flex", md: "none" },
            flexDirection: "column",
          }}
        >
          <Typography variant="h5" sx={{ display: "block" }}>
            Find Your Destination
          </Typography>
          <Box
            sx={{
              flexWrap: "wrap",
              width: "90%",
              margin: "auto",
              flexDirection: "row",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {carouselData.map((item: randomListProps, index: number) => (
              <Button
                key={index}
                onClick={() => setSelectedItem(index)}
                sx={{
                  color: selectedItem === index ? "red" : "#000",
                  flexWrap: "wrap",
                  width: "fit-content",
                  display: "flex",
                }}
              >
                {item.title}
              </Button>
            ))}
          </Box>
        </Box>
        <Box className="carousel-container">
          {carouselData.map((item: randomListProps, index: number) => (
            <Card
              key={index}
              sx={{ maxWidth: 345 }}
              className={adjustCarouselClass(index)}
            >
              <CardContent
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "20px",
                }}
              >
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        <Box
          className="carousel-controls"
          gap={1.5}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <Typography variant="h5">Find Your Destination</Typography>
          {carouselData
            .slice(4, 8)
            .map(
              (item: { title: string; description: string }, index: number) => (
                <Button
                  key={index + 4}
                  onClick={() => setSelectedItem(index + 4)}
                  sx={{
                    color: selectedItem === index + 4 ? "red" : "#000",
                    ":focus": { outline: "none" },
                  }}
                  className="button-carousel"
                >
                  {item.title}
                </Button>
              )
            )}
        </Box>
      </Box>
    </Box>
  );
}

export default Carousel;
