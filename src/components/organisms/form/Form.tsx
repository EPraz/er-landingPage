import React from "react";
import { useForm } from "react-hook-form";
import { HiOutlineArrowCircleRight } from "react-icons/hi";
import Recluta from "../../../assets/img/recluta.png";

const fields = [
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
    type: "text",
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

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div id="form" className="relative w-full bg-white ">
      <div className="p-8">
        <div className="flex mb-12 bg-blue-100  border-2  rounded-md">
          <div className="hidden md:block w-full text-center ">
            <div className="item-center mt-12">
              <h2 className="font-serif text-3xl text-black pt-8  p-0">
                Unete a nuestro Programa
              </h2>
              <div className="relative lg:w-6/12 mt-10 ml-36">
                <img className="" src={Recluta} />
              </div>
            </div>
          </div>

          <div className="lg:container lg:mx-auto md:justify-center">
            <div className="flex justify-center text-gray-700">
              <h2 className="lg:hidden font-serif text-3xl pt-8  p-0 ">
                Unete a nuestro Programa
              </h2>
            </div>

            <div className="lg:bg-gray-300 md:bg-white lg:border-2 lg:border-gray-400 lg:w-8/12 pb-2 w-full p-4 flex flex-wrap justify-center shadow-2xl my-12 rounded-md mx-auto">
              <div className="pb-5">
                <h2 className="text-1xl font-bold text-gray-700 underline">
                  Formulario de Inscripcion
                </h2>
              </div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col justify-start items-center w-full m-auto"
              >
                <div className="text-gray-600 grid grid-cols-1 mb-6 md:grid-cols-2 gap-3 w-full">
                  {fields.map((field, index) => (
                    <div
                      key={index}
                      className={`text-left flex flex-col gap-2 w-full ${
                        field.gridCols === 2 ? "md:col-span-2" : ""
                      }`}
                    >
                      <label className="font-semibold">{field.label}</label>
                      <input
                        {...register(field.label.toLowerCase(), {
                          required: field.required,
                        })}
                        className={`border border-gray-300 bg-white text-black text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-blue-500 ${
                          field.gridCols === 2 ? "md:w-full" : ""
                        }`}
                        type={field.type}
                        placeholder={field.placeholder}
                      />
                      {errors[field.label.toLowerCase()] && (
                        <span>Este campo es requerido</span>
                      )}
                    </div>
                  ))}
                  <div className="w-full text-left">
                    <button
                      type="submit"
                      className="flex justify-center items-center gap-2 w-full py-3 px-4 bg-blue-500 text-white text-md font-bold border border-blue-500 rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-blue-500 lg:m-0 md:px-6"
                      title="Confirm Order"
                    >
                      <span>Enviar</span>
                      <HiOutlineArrowCircleRight size={20} />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
