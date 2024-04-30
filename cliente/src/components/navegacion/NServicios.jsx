import React from "react";

function NServicios() {
  return (
    <div
      id="nservicios"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center"
    >
      <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

        <div className="grid grid-cols-1">
          <div className="relative flex items-center justify-center text-lg font-bold text-white mb-4 bg-yellow-800 transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
            <img
              src="/img/nbebes.jpg"
              alt=""
              className="top-0 left-0 w-full object-cover opacity-80 h-[85%]"
            />
            <span className="absolute top-0 left-0 w-full h-full flex justify-center">
              Natación para bebés
            </span>
          </div>
        </div>

        <p className="p-2 my-4">
          Las clases de natacion para bebes acompañados de papa o mama, ayudan a
          fortalecer los lazos fraternales. mediante actividades ludicas
          aprenderan de manera divertida y segura.
        </p>

        <div className="grid grid-cols-1">
          <div className="relative flex items-center justify-center text-lg font-bold text-white mb-4 bg-yellow-800 transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
            <img
              src="/img/nniños.jpg"
              alt=""
              className="top-0 left-0 w-full h-[85%] object-cover opacity-80"
            />
            <span className="absolute top-0 left-0 w-full h-full flex justify-center">
              Natación niños y niñas
            </span>
          </div>
        </div>

        <p className="p-2 my-4">
          Las clases de natacion para niños inicia con el aprendizaje de las
          habilidades acuaticas necesrarias para poder desempeñarse en un
          hambiente acuatico
        </p>

        <div className="grid grid-cols-1">
          <div className="relative flex items-center justify-center text-lg font-bold text-white mb-4 bg-yellow-800 transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
            <img
              src="/img/ncarreras.jpg"
              alt=""
              className="top-0 left-0 w-full h-[85%] object-cover opacity-80"
            />
            <span className="absolute top-0 left-0 w-full h-full flex justify-center">
              Natación Profesional
            </span>
          </div>
        </div>

        <p className="p-2 my-4">
          Inicio del mundo competitivo perfeccionando las tecnicas de natacion y
          el ingreso de actividades competitivas oficiales
        </p>

        <div className="grid grid-cols-1">
          <div className="relative flex items-center justify-center text-lg font-bold text-white mb-4 bg-yellow-800 transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
            <img
              src="/img/nrecre.jpg"
              alt=""
              className="top-0 left-0 w-full h-[85%] object-cover opacity-80"
            />
            <span className="absolute top-0 left-0 w-full h-full flex justify-center">
              Vacaciones recreativas
            </span>
          </div>
        </div>

        <p className="p-2 my-4">
          Las vacaciones recreativas orientadas al aprendizaje y desarrollo
          sicomotor de los niños, es un ambiente propicio para todos
        </p>

        <div className="grid grid-cols-1">
          <div className="relative flex items-center justify-center text-lg font-bold text-white mb-4 bg-yellow-800 transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
            <img
              src="/img/ndomi.jpg"
              alt=""
              className="top-0 left-0 w-full h-[85%] object-cover opacity-80"
            />
            <span className="absolute top-0 left-0 w-full h-full flex justify-center">
              Natación en tu domicilio 
            </span>
          </div>
        </div>

        <p className="p-2 my-4">
          Las clases de natacion para bebes acompañados de papa o mama, ayudan a
          fortalecer los lazos fraternales. mediante actividades ludicas
          aprenderan de manera divertida y segura.
        </p>

        <div className="grid grid-cols-1">
          <div className="relative flex items-center justify-center text-lg font-bold text-white mb-4 bg-yellow-800 transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
            <img
              src="/img/nadul.jpg"
              alt=""
              className="top-0 left-0 w-full h-[85%] object-cover opacity-80"
            />
            <span className="absolute top-0 left-0 w-full h-full flex justify-center">
              Natación adultos
            </span>
          </div>
        </div>

        <p className="p-2 my-4">
          Las clases para adultos se inicia desde los primeros pasos en la
          natacion hasta el perfilamiento del alto rendimiento
        </p>
      </div>
    </div>
  );
}

export default NServicios;
