import image_1 from "../assets/img/image-1.jpg";
import image_2 from "../assets/img/image-2.jpg";
import image_3 from "../assets/img/image-3.png";
import { MenuProps } from "../types/menuProps";

export type randomListProps = {
  title: string;
  description: string;
};

export const randomList: randomListProps[] = [
  {
    title: "Xana",
    description: `Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica`,
  },
  {
    title: "Juana",
    description: `Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica`,
  },
  {
    title: "Marihuana",
    description: `Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica`,
  },
  {
    title: "Wanda",
    description: `Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica`,
  },
  {
    title: "Aasdcasdc",
    description: `Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica`,
  },
  {
    title: "The south",
    description: `Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica`,
  },
  {
    title: "The sur",
    description: `Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica`,
  },
  {
    title: "The sun",
    description: `Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica`,
  },
  {
    title: "The sour",
    description: `Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica`,
  },
];

export const superList = [
  {
    title: "Thailand",
    img: image_1,
    primaryColor: "orange",
    secondaryColor: "white",
    description: "text here some lorem ipsum",
  },
  {
    title: "Panama",
    img: image_2,
    primaryColor: "white",
    secondaryColor: "green",
    description: "text here some lorem ipsum",
  },
  {
    title: "Brazil",
    img: image_3,
    primaryColor: "black",
    secondaryColor: "yellow",
    description: "text here some lorem ipsum",
  },
];

export const navLinks: MenuProps[] = [
  { name: "Inicio", link: "#home" },
  { name: "Quienes Somos?", link: "#quienesSomos" },
  { name: "Organizacion", link: "#organizacion" },
  { name: "Grupos", link: "#grupos" },
  { name: "Tienda", link: "#tienda" },
];

export const PRODUCTOS: MenuProps[] = [
  { name: "Parches", link: "#" },
  { name: "Medallas", link: "#" },
  { name: "Pines", link: "#" },
];
export const RECURSOS: MenuProps[] = [
  { name: "Manual del Lider", link: "#" },

  { name: "Cursos de Liderazgo", link: "#" },
  { name: "Premios Trimestrales", link: "#" },
];
export const GRUPOS: MenuProps[] = [
  { name: "Navegantes", link: "#" },
  { name: "Pioneros", link: "#" },
  { name: "Seguidores", link: "#" },
  { name: "Exploradores", link: "#" },
];
export const SOPORTE: MenuProps[] = [{ name: "Documentation", link: "#" }];

export const Icons: MenuProps[] = [
  { name: "logo-facebook", link: "#" },

  { name: "logo-instagram", link: "#" },
];

export const discoverList = [
  {
    title: "Thailand",
    img: image_1,
    primaryColor: "orange",
    secondaryColor: "white",
    description: "text here some lorem ipsum",
  },
  {
    title: "Panama",
    img: image_2,
    primaryColor: "white",
    secondaryColor: "green",
    description: "text here some lorem ipsum",
  },
  {
    title: "Brazil",
    img: image_3,
    primaryColor: "black",
    secondaryColor: "yellow",
    description: "text here some lorem ipsum",
  },
];
