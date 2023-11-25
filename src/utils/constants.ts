import image_1 from "../assets/img/1.png";
import image_2 from "../assets/img/2.png";
import image_3 from "../assets/img/3.png";
import image_4 from "../assets/img/4.png";
import image_5 from "../assets/img/image-5.jpg.jpg";
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

export const fields = [
  {
    label: "Nombre",
    type: "text",
    placeholder: "",
    required: true,
    gridCols: 1,
  },

  {
    label: "Apellido",
    type: "text",
    placeholder: "",
    required: true,
    gridCols: 1,
  },
  {
    label: "Cedula",
    type: "text",
    placeholder: "",
    required: true,
    gridCols: 1,
  },
  {
    label: "Edad",
    type: "number",
    placeholder: "",
    required: true,
    gridCols: 1,
  },
  {
    label: "Numero de telefono",
    type: "text",
    placeholder: "",
    required: false,
    gridCols: 2,
  },
  {
    label: "Nombre del Padre",
    type: "text",
    placeholder: "",
    required: false,
    gridCols: 2,
  },
  {
    label: "Nombre de la madre",
    type: "text",
    placeholder: "",
    required: false,
    gridCols: 2,
  },
  {
    label: "Iglesia a la que asiste",
    type: "text",
    placeholder: "",
    required: true,
    gridCols: 2,
  },
];
