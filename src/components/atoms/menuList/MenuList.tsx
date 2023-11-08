import React from "react";
import { Typography } from "@mui/material";
import { MenuProps } from "../../../types/menuProps";
import { Link } from "react-router-dom";

type Props = {
  Links: MenuProps[];
  title: string;
};

const Item = ({ Links, title }: Props) => {
  return (
    <ul>
      <h6 className="mb-1 font-semibold">{title}</h6>
      {Links.map(({ name, link }: MenuProps, index: number) => (
        <Link key={index} to={link}>
          <Typography
            variant="button"
            // sx={{ fontSize: "1.2em" }}
            sx={{
              display: "block",
              fontSize: "12px",
              color: "#cbd5e0",
              ":hover": { color: "#fff", textDecoration: "underline" },
              margin: "5px 0",
            }}
          >
            {name}
          </Typography>
        </Link>
      ))}
    </ul>
  );
};

export default Item;
