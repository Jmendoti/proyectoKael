import { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

const Gallery = () => {
    const slides = [
        {
            url: '/img/img0.jpeg',
            title: 'Bandera'
        },
        {
            url: '/img/img1.jpeg',
            title: 'Primer puesto relevos'
        },
        {
            url: '/img/img2.jpeg',
            title: 'Medalleria'
        },
        {
            url: '/img/img3.jpeg',
            title: 'Reunion'
        },
       
    ];

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex -1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }

  return (
    <div className='w-full m-auto py-28 px-6 relative group rounded-xl bg-yellow-100'>
        <div 
        className='relative overflow-hidden rounded-2xl bg-center duration-500'
        style={{
            paddingBottom: '56.25%',
            backgroundImage: `url('${slides[currentIndex].url}')`,
            backgroundSize: 'cover',
        }}
        ></div>
        {/* Flecha a la izquierda */}
        <div className='absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 hover:bg-black/60 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlide} fontSize={30}/>
        </div>
        {/* Flecha a la Derecha */}
        <div className='absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 hover:bg-black/60 text-white cursor-pointer'>
            < BsChevronCompactRight onClick={nextSlide} fontSize={30}/>
        </div>
        {/* Puntos para escojer una imagen, debajo de galeria */}
        <div className='flex top-4 justify-center py-2 '>
            {slides.map((slides, slideIndex) => (
                <div 
                className='text-2xl cursor-pointer'
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                >
                    < RxDotFilled />
                </div> 
            ))}

        </div>

      
    </div>
  )
}

export default Gallery