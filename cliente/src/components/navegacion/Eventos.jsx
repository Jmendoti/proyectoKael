import React from 'react'

function Eventos() {
  return (
    <div id='eventos' className=' sm:h-[900px] lg:h-[600px] bg-yellow-100 mx-auto mb-52 pt-16 lg:mb-[10%] md:mb-[35%] px-6 grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1   justify-center'>
      <div className='grid lg:top-20 relative lg:col-span-1 sm:text-center sm:justify-center '>
        <h3 className='text-gray-600 text-2xl font-bold hover:text-orange-500 duration-500 cursor-pointer '>
          Grandes momentos de felicidad y muchas sonrisas es lo que hace nuestro club el perfecto pra ti
        </h3>
        <p className='pt-4 text-gray-600 '>
          En cada paso que damos encontramos un mundo lleno de retos, nuestro objetivo; hacer que cada uno de estos pasos este lleno de alegria y felicidad, por esta razon nuestra metodologia acuatica comprensiva orientada en la educacion mediante actividades ditacticas, garantica que nuestros niños tengan una adaptacion al medio acuatico.
        </p>
      </div>

      <div className='grid grid-cols-2 lg:h-[400px] lg:w-[600px] col-span-2 gap-2 p-4 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 items-center justify-center'>
        <div className='flex items-center justify-center'>
        <img
          className='row-span-2 object-cover w-full h-full duration-500 hover:scale-105 cursor-pointer hover:shadow-2xl'
          src='/img/infantil.jpeg'
          alt=''
          style={{ objectFit: 'contain' }}
        />
        </div>
        <div className='flex items-center justify-center'>
        <img
          className='row-span-2 object-cover 4-full h-full duration-500 hover:scale-105 cursor-pointer hover:shadow-2xl'
          src='/img/adulto.jpeg'
          alt=''
          style={{ objectFit: 'contain' }}
        />
        </div>
        <div className='flex items-center justify-center'>
        <img
          className='row-span-2 object-cover 2-full h-full duration-500 hover:scale-105 cursor-pointer hover:shadow-2xl'
          src='/img/competitivo.jpeg'
          alt=''
          style={{ objectFit: 'contain' }}
        />
        </div>
        <div className='flex items-center justify-center'>
        <img
          className='row-span-2 object-cover 2-full h-full duration-500 hover:scale-105 cursor-pointer hover:shadow-2xl'
          src='/img/img0.jpeg'
          alt=''
          style={{ objectFit: 'contain' }}
        />
        </div>
      </div>
    </div>
  )
}

export default Eventos
