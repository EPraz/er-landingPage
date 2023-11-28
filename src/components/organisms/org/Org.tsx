const coorNac = [
  {
    name: "Arturo Martez",
    role: "Coordinador Nacional",
    image: "./src/assets/img/arturo.png",
  },
  
];

const comNac = [
  {
    name: "Urbano Caceres",
    role: "Coordinador de Adiestramiento",
    image: "./src/assets/img/urbano.png",
  },
  {
    name: "Luis Lopez",
    role: "Coordinador de Alcance",
    image: "./src/assets/img/luis.png",
  },
  {
    name: "Rafael Romero",
    role: "Coordinador de Programa",
    image: "./src/assets/img/rafael.png",
  },
];

const teamNac = [
  {
    name: "Giancarlos Arauz",
    role: "Coordinador de Comunicaciones",
    image: "./src/assets/img/giancarlos.png",
  },
  {
    name: "Blanca Agudo",
    role: "Coordinador de Eventos",
    image: "./src/assets/img/blanca.png",
  },
  {
    name: "Jose Dominguez",
    role: "Coordinador de Servicio Cristiano",
    image: "./src/assets/img/jose.png",
  },
  {
    name: "Jean Alabarca",
    role: "Administrador",
    image: "./src/assets/img/jean.png",
  },
];

const cmDist = [
  {
    name: "Marcos Sanchez",
    role: "Coordinador distrito A1",
    image: "./src/assets/img/marcos.png",
  },
  {
    name: "Edward Chiru",
    role: "Coordinador distrito A3",
    image: "./src/assets/img/edward.png",
  },
  {
    name: "Edgar Tapia",
    role: "Coordinador distrito A4",
    image: "./src/assets/img/edgar.png",
  },
];

const Org = () => {
  return (
    <div id="org" className="p-5 w-full mx-auto p-8 bg-white">
      <div className="bg-gray-300 p-2 rounded-md">
        <div className="text-center text-gray-700 mt-4 mb-10">
          <h1 className="lg:text-5xl font-serif text-gray-800 text-3xl">
            Nuestra Organizacion Nacional
          </h1>
        </div>

        <div className="lg:flex justify-center">
          {coorNac.map((person, index) => (
            <div
              key={index}
              className="flex bg-white border text-gray-700 border-gray-300 shadow-lg rounded lg:w-5/12 md:w-auto p-1 items-center"
            >
              <div className="w-24 h-24 shadow-lg rounded-full overflow-hidden">
                <img
                  src={person.image}
                  className="object-cover w-full h-full"
                  alt={person.name}
                />
              </div>
              <div className="ml-0 justify-center" style={{ flex: 2 }}>
                <h3 className="text-xl font-semibold ">{person.name}</h3>
                <p className="text-gray-600">{person.role}</p>
              </div>
            </div>
          ))}
        </div>

        <br />

        <div className="lg:flex justify-center gap-1">
          {comNac.map((person, index) => (
            <div
              key={index}
              className="flex bg-white border text-gray-700 border-gray-300 shadow-lg rounded lg:w-5/12 md:w-auto p-1 items-center"
            >
              <div className="w-24 h-24 shadow-lg rounded-full overflow-hidden">
                <img
                  src={person.image}
                  className="object-cover w-full h-full"
                  alt={person.name}
                />
              </div>
              <div className="ml-2 justify-center" style={{ flex: 2 }}>
                <h3 className="text-xl font-semibold ">{person.name}</h3>
                <p className="text-gray-600 text-sm">{person.role}</p>
              </div>
            </div>
          ))}
        </div>

        <br />

        <div className=" lg:flex justify-center gap-1">
          {teamNac.map((person, index) => (
            <div
              key={index}
              className="flex bg-white border text-gray-700 border-gray-300 shadow-lg rounded lg:w-5/12 md:w-auto p-1 items-center"
            >
              <div className="w-24 h-24 shadow-lg rounded-full overflow-hidden">
                <img
                  src={person.image}
                  className="object-cover w-full h-full"
                  alt={person.name}
                />
              </div>
              <div className="justify-center" style={{ flex: 2 }}>
                <h3 className="text-xl font-semibold ">{person.name}</h3>
                <p className="text-gray-600 text-sm">{person.role}</p>
              </div>
            </div>
          ))}
        </div>

        <br />

        <div className=" lg:flex justify-center gap-1">
          {cmDist.map((person, index) => (
            <div
              key={index}
              className="flex bg-white border text-gray-700 border-gray-300 shadow-lg rounded lg:w-5/12 md:w-auto p-1 items-center"
            >
              <div className="w-24 h-24 shadow-lg rounded-full overflow-hidden">
                <img
                  src={person.image}
                  className="object-cover w-full h-full"
                  alt={person.name}
                />
              </div>
              <div className="justify-center" style={{ flex: 2 }}>
                <h3 className="text-xl font-semibold ">{person.name}</h3>
                <p className="text-gray-600 text-sm">{person.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Org;