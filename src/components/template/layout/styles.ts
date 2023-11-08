import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const StyledWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
}));

// export const StyledWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

export const StyledBodyWrapper = styled(Box)(() => ({
  marginBottom: "60px",
  minHeight: "100vh",
  backgroundRepeat: "no-repeat",
  backgroundColor: "rgba(4,46,66,.99)",
  background:
    "linear-gradient(100deg, rgba(4,46,66,0.2) 0.02%, rgba(255,255,255,1) 99.86%",
}));
// `
//   margin-bottom: 60px;
// `;
