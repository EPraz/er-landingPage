import React from "react";

const About = () => {
  return (
    <div id="quienesSomos" className="relative flex w-full bg-white p-8">
      <div className="bg-gray-600 flex w-full rounded-md">
        <div className="container mx-auto bg-gray-600 rounded-md">
          <div className="text-white bg-gray-500 lg:w-10/12 pb-10 pt-5 w-full p-4 flex flex-wrap justify-center  my-10 rounded-md mx-auto">
            <h1 className="font-playfair text-2xl">
              Que es Exploradores del Rey?
            </h1>

            <div className="text-white pt-5 pb-0 text-justify">
              <div className="text-1xl mt-10">
                <p>
                  El programa Exploradores del Rey nace en Estados Unidos bajo
                  con el nombre de
                  <span className="text-blue-300"> Royal Rangers </span> en el
                  año 1962 de la mano de Johnie Barnes, desde ese momento el
                  programa fue creciendo hasta llegar a tener precensia en
                  diferentes paises al rededor del mundo.
                </p>
                <br />
                <p>
                  Con la tematica de campismo y actividades al aire libre
                  Exploradores del Rey alcanza de forma efectiva mas jovenes
                  para Cristo.
                </p>
                <br />
                <p>
                  El programa esta diseñado para niños de entre 5 a 17 años,
                  creando un ambiente social ameno y propicio para formar el
                  carácter del joven y capacitarle para ser útil allá donde
                  esté. Guiándolo en los distintos aspectos de su desarrollo
                  personal, el joven estará preparado al terminar el programa
                  para emprender sus propios proyectos y alcanzar metas
                  personales.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-About-img bg-cover bg-center hidden md:block w-full text-center rounded-md"></div>
      </div>
    </div>
  );
};

export default About;
