import React, { HTMLProps } from "react";
import { StyledWrapper, StyledBodyWrapper } from "./styles";

function Layout({ children }: HTMLProps<HTMLDivElement>) {
  return (
    <StyledWrapper>
      {/* // <Header /> */}
      <StyledBodyWrapper>{children}</StyledBodyWrapper>
      {/* // <Footer /> */}
    </StyledWrapper>
  );
}

// const Layout: HTMLProps<HTMLDivElement> = ({ children }) => {
//   return (
//     <StyledWrapper>
//       <Header />
//       <StyledBodyWrapper>{children}</StyledBodyWrapper>
//       <Footer />
//     </StyledWrapper>
//   );
// };

export default Layout;
