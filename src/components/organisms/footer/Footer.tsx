import React from "react";
import FooterContainer from "../../molecules/footerContainer/FooterContainer";
// import ItemsContainer from "./ItemsContainer";
// import SocialIcons from "./SocialIcons";
// import { Icons } from "./Menus";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12  bg-[#ffffff19] "></div>
      <FooterContainer />
      <div className="grid text-center pt-2 text-gray-400 text-sm pb-8">
        <span>© 2023 Exploradores del Rey Panama</span>
        {/* <SocialIcons Icons={Icons} /> */}
      </div>
    </footer>
  );
};

export default Footer;
