import React from "react";

function Home() {
  return (
    <div id="inicio" className='relative w-full h-screen'>
      {" "}
      {/*Pantalla Completa*/}
      <img
        className='top-0 left-0 w-full h-screen object-cover opacity-50'
        src='/img/slide3.jpeg'
        alt=''
      />
      <div className='bg-black/30 absolute top-0 left-0 w-full h-screen'>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
          <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
            <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl hover:text-orange-500 duration-500 cursor-pointer'>
              Sobre Nosotros
            </h1>
            <p className='max-w-[500px] md:max-w-[1100px] drop-shadow-2xl py-2 text-xl'>
            ¡Bienvenidos a Clud Dragones Marinos, el mejor club de natación para bebes y niños! Nuestro objetivo es enseñar a los más pequeños a nadar mientras se divierten y disfrutan de un día lleno de actividades acuáticas. Sabemos que aprender a nadar puede ser una tarea difícil para algunos niños, pero en Dragones Marinos lo hacemos fácil y divertido.✨
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
