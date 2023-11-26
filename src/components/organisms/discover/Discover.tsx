import React, { useState } from "react";

import { discoverList, superList } from "../../../utils/constants";
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
    <Box id="grupos" className="discoverContainer p-10">
      {/* <div className="bg-white flex w-full p-8"> */}
      <Box
        className="primaryContainer_Color rounded-md"
        style={{
          backgroundColor: discoverData.primaryColor,
        }}
      />
      <Box
        className="secondaryContainer_Color rounded-md"
        style={{ backgroundColor: discoverData.secondaryColor }}
      />

      <Box className="mainContainer ">
        <Box
          className="primaryContainer_Content transtionAnimation"
          style={{
            color: discoverData.primaryColor !== "white" ? "#fff" : "#000",
          }}
        >
          <h5 className="pr-14">{discoverData.title}</h5>
          <h2 className="pt-4 pr-14">{discoverData.age}</h2>
          <p className="pr-14 mt-4 text-center">{discoverData.description}</p>
        </Box>

        <Box className="secondaryContainer_Content">
          <Box className="title">
            <p>
              <b></b>
            </p>
          </Box>
          {/*  */}
          <Box className="image fade-in-image">
            {" "}
            <img className="" src={discoverData.img} />
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
      {/* </div> */}
    </Box>
  );
};
