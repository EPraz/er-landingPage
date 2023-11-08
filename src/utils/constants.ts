import image_1 from "../assets/img/image-1.jpg";
import image_2 from "../assets/img/image-2.jpg";
import image_3 from "../assets/img/image-3.png";
import image_4 from "../assets/img/image-4.jpg";
import image_5 from "../assets/img/image-5.jpg";
import { MenuProps } from "../types/menuProps";

export const randomList = [
  {
    city: "Panama",
    list: [
      { title: "The north", src: image_1 },
      { title: "The north east", src: image_2 },
      { title: "The center", src: image_3 },
      { title: "The east", src: image_4 },
      { title: "The south", src: image_5 },
    ],
  },
  {
    city: "Colon",
    list: [
      { title: "1", src: image_5 },
      { title: "2", src: image_3 },
      { title: "3", src: image_2 },
      { title: "4", src: image_1 },
      { title: "5", src: image_4 },
    ],
  },
  {
    city: "Chiriqui",
    list: [
      { title: "1", src: image_4 },
      { title: "2", src: image_3 },
      { title: "3", src: image_2 },
      { title: "4", src: image_5 },
      { title: "5", src: image_1 },
    ],
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
