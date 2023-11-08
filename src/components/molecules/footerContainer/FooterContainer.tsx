import { Box } from "@mui/material";
import { MenuList } from "../../atoms";
import { GRUPOS, PRODUCTOS, RECURSOS, SOPORTE } from "../../../utils/constants";

const FooterContainer = () => {
  return (
    <Box className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-16 px-5 py-16">
      <MenuList Links={PRODUCTOS} title="PRODUCTOS" />
      <MenuList Links={RECURSOS} title="RECURSOS" />
      <MenuList Links={GRUPOS} title="GRUPOS" />
      <MenuList Links={SOPORTE} title="SOPORTE" />
    </Box>
  );
};

export default FooterContainer;
