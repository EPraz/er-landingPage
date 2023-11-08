import React, { useState } from "react";

import { superList } from "../../../utils/constants";
import PlayCircleFilledOutlinedIcon from "@mui/icons-material/PlayCircleFilledOutlined";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import "./discover.css";
import { Box } from "@mui/material";

export const Discover = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [discoverData, setDiscoverData] = useState(superList[0]);

  const handleNext = () => {
    let nextIndex = currentIndex + 1;
    if (nextIndex >= superList.length) nextIndex = 0; // Loop back to the beginning
    setCurrentIndex(nextIndex);
    setDiscoverData(superList[nextIndex]);
  };

  const handlePrev = () => {
    let prevIndex = currentIndex - 1;
    if (prevIndex < 0) prevIndex = superList.length - 1; // Loop back to the end
    setCurrentIndex(prevIndex);
    setDiscoverData(superList[prevIndex]);
  };

  return (
    <Box className="discoverContainer" id="quienesSomos">
      <Box
        className="primaryContainer_Color"
        style={{
          backgroundColor: discoverData.primaryColor,
        }}
      />
      <Box
        className="secondaryContainer_Color"
        style={{ backgroundColor: discoverData.secondaryColor }}
      />

      <Box className="mainContainer">
        <Box
          className="primaryContainer_Content transtionAnimation"
          style={{
            color: discoverData.primaryColor !== "white" ? "#fff" : "#000",
          }}
        >
          <h5>{discoverData.title}</h5>
          <p>{discoverData.description}</p>
        </Box>

        <Box className="secondaryContainer_Content">
          <Box className="title">
            <p>
              01 | <b>Discover</b>
            </p>
          </Box>
          {/*  */}
          <Box className="image fade-in-image">
            <img src={discoverData.img} />
          </Box>
          {/*  */}
          <Box className={"buttons transtionAnimation"}>
            <PlayCircleOutlineRoundedIcon
              className="transtionAnimation"
              sx={{
                rotate: "180deg",
                width: "35px",
                height: "35px",
                fill: discoverData.primaryColor,
              }}
              onClick={handlePrev}
            />
            <PlayCircleFilledOutlinedIcon
              className="transtionAnimation"
              sx={{
                fill: discoverData.primaryColor,
                height: "35px",
                width: "35px",
              }}
              onClick={handleNext}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
