import React from "react";

const Org = () => {
  return (
    <div id="org" className="p-5 w-full mx-auto p-8 bg-white">
      <div className="bg-gray-300 p-2 rounded-md">
        <div className="text-center  text-gray-700 mt-4 mb-10">
          <h1 className="lg:text-5xl font-serif text-gray-800 text-3xl">
            Nuestra Organizacion Nacional
          </h1>
        </div>

        <div className="lg:flex justify-center">
          <div className="flex bg-white border text-gray-700 border-gray-300 shadow-lg rounded lg:w-5/12 md:w-auto  p-1  items-center">
            <div className=" w-24 h-24 lg:ml-32  shadow-lg rounded-full overflow-hidden">
              <img
                src="./src/assets/img/arturo.png"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="ml-8 justify-center">
              <h3 className="text-xl font-semibold ">Arturo Martez</h3>
              <p className="text-gray-600">Coordinador Nacional</p>
            </div>
          </div>
        </div>

        <br />

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-2 text-gray-700">
          <div className="bg-white border border-gray-300 shadow-lg flex rounded w-auto pr-1 items-center">
            <div className=" w-24 h-24 rounded-full shadow-lg overflow-hidden m-2">
              <img
                src="./src/assets/img/urbano.png"
                className="object-cover w-full h-full "
              />
            </div>
            <div className="pl-1 ">
              <h3 className="text-xl font-semibold ">Urbano Caceres</h3>
              <p className="text-gray-600">Coordinador de Adiestramiento</p>
            </div>
          </div>
          <div className="bg-white border border-gray-300 shadow-lg flex rounded w-auto pr-1 items-center">
            <div className="w-24 h-24 rounded-full shadow-lg overflow-hidden m-2">
              <img
                src="./src/assets/img/luis.png"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="pl-1 ">
              <h3 className="text-xl font-semibold ">Luis Lopez</h3>
              <p className="text-gray-600">Coordinador de Alcance</p>
            </div>
          </div>
          <div className="bg-white border border-gray-300 shadow-lg flex rounded w-auto pr-1 items-center">
            <div className="w-24 h-24 rounded-full shadow-lg overflow-hidden m-2">
              <img
                src="./src/assets/img/rafael.png"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="pl-1 ">
              <h3 className="text-xl font-semibold ">Rafael Romero</h3>
              <p className="text-gray-600">Coordinador de Programa</p>
            </div>
          </div>
        </div>

        <br />

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-2 text-gray-700">
          <div className="bg-white border border-gray-300 shadow-lg flex rounded w-auto pr-1 items-center">
            <div className="w-24 h-24 rounded-full shadow-lg overflow-hidden m-2">
              <img
                src="./src/assets/img/giancarlos.png"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="pl-1 ">
              <h3 className="text-xl font-semibold ">Giancarlos Arauz</h3>
              <p className="text-gray-600 text-xs">
                Coordinador de Comunicaciones
              </p>
            </div>
          </div>
          <div className="bg-white border border-gray-300 shadow-lg flex rounded w-auto pr-1 items-center">
            <div className="w-24 h-24 rounded-full shadow-lg overflow-hidden m-2">
              <img
                src="./src/assets/img/blanca.png"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="pl-1 ">
              <h3 className="text-xl font-semibold ">Blanca Agudo</h3>
              <p className="text-gray-600 text-sm">Coordinador de Eventos</p>
            </div>
          </div>
          <div className="bg-white border border-gray-300 shadow-lg flex rounded w-auto pr-1 items-center">
            <div className="w-24 h-24 rounded-full shadow-lg overflow-hidden m-2">
              <img
                src="./src/assets/img/jose.png"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="pl-1 ">
              <h3 className="text-xl font-semibold ">Jose Dominguez</h3>
              <p className="text-gray-600 text-xs ">
                Coordinador de Servicio Cristiano
              </p>
            </div>
          </div>
          <div className="bg-white border border-gray-300 shadow-lg flex rounded w-auto pr-1 items-center">
            <div className="w-24 h-24 rounded-full shadow-lg overflow-hidden m-2">
              <img
                src="./src/assets/img/jean.png"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="pl-1 ">
              <h3 className="text-xl font-semibold ">Jean Alabarca</h3>
              <p className="text-gray-600">Administrador</p>
            </div>
          </div>
        </div>

        <br />

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-2 text-gray-700">
          <div className="bg-white border border-gray-300 shadow-lg flex rounded w-auto pr-1 items-center">
            <div className="w-24 h-24 rounded-full shadow-lg overflow-hidden m-2">
              <img
                src="./src/assets/img/marcos.png"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="pl-1 ">
              <h3 className="text-xl font-semibold ">Marcos Sanchez</h3>
              <p className="text-gray-600 ">Coordinador distrito A1</p>
            </div>
          </div>
          <div className="bg-white border border-gray-300 shadow-lg flex rounded w-auto pr-1 items-center">
            <div className="w-24 h-24 rounded-full shadow-lg overflow-hidden m-2">
              <img
                src="./src/assets/img/edward.png"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="pl-1 ">
              <h3 className="text-xl font-semibold ">Edward Chiru</h3>
              <p className="text-gray-600">Coordinador distrito A3</p>
            </div>
          </div>
          <div className="bg-white border border-gray-300 shadow-lg flex rounded w-auto pr-1 items-center">
            <div className="w-24 h-24 rounded-full shadow-lg overflow-hidden m-2">
              <img
                src="./src/assets/img/edgar.png"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="pl-1 ">
              <h3 className="text-xl font-semibold ">Edgar Tapia</h3>
              <p className="text-gray-600 ">Coordinador distrito A4</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Org;
