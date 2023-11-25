import image_1 from "../assets/img/1.png";
import image_2 from "../assets/img/2.png";
import image_3 from "../assets/img/3.png";
import image_4 from "../assets/img/4.png";
import image_5 from "../assets/img/image-5.jpg.jpg";
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
    title: "NAVENGANTES",
    img: image_1,
    primaryColor: "red",
    secondaryColor: "yellow",
    age: "( 5, 6  y 7 años )",
    description:
      "En este grupo los niños de menor edad pueden crecer en un ambiente en el que se fomenta su participacion con actividades divertidas diseñadas para estas edades para que todos tengan oportunidades de aventura y aprendizaje ",
  },
  {
    title: "PIONEROS",
    img: image_2,
    primaryColor: "orange",
    secondaryColor: "blue",
    age: "( 8, 9 y 10 años )",
    description:
      "En este grupo, los jóvenes exploran y adquieren habilidades adicionales mediante los Premios de Avance, áreas de estudio que les proporcionarán nuevas destrezas y les ayudarán a progresar en su desarrollo individual.",
  },
  {
    title: "SEGUIDORES",
    img: image_3,
    primaryColor: "purple",
    secondaryColor: "skyblue",
    age: "( 11, 12 y 13 años )",
    description:
      "Los jóvenes de este grupo son orientados hacia nuevas posibilidades para crecer y disfrutar junto a sus pares, a través de una amplia gama de actividades que les brindarán la oportunidad de colaborar en grupo y cultivar sus habilidades de liderazgo.",
  },
  {
    title: "EXPLORADORES",
    img: image_4,
    primaryColor: "green",
    secondaryColor: "white",
    age: "( 14, 15, 16 y 17 años )",
    description:
      "Los adolescentes mayores adquieren nuevos logros al abordar temas más desafiantes, lo que les posibilita explorar nuevos aspectos en su vida y fortalecer su habilidad para liderar.",
  },
];

export const navLinks: MenuProps[] = [
  { name: "Inicio", link: "#home" },
  { name: "Quienes Somos?", link: "#quienesSomos" },
  { name: "Grupos", link: "#grupos" },
  { name: "Programa", link: "#programa" },
  { name: "Organizacion", link: "#org" },
  { name: "Inscripcion", link: "#form" },
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
