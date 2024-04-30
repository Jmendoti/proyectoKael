import { FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope } from 'react-icons/fa'; // Importa los iconos

const Footerindex = () => {
  return (
    <div
      id="contacto"
      className="flex w-full mt-24 bg-yellow-100 text-gray-200 py-2 px-2"
    >
      {/*Contenedor Principal*/}
      <div className="items-center text-center justify-center max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-2 py-8 px-4">
        {/*Seccion contacto*/}
        <img src="/img/MED.jpeg" alt="" className="w-60 rounded-md transition-transform hover:scale-125 hover:border-indigo-700 hover:border-solid shadow-lg" />
        <div className="grid  items-center justify-center ">
          <h6 className="text-black font-bold uppercase pt-2 transition-transform duration-500 hover:scale-105 cursor-pointer">
            Contactos
          </h6>
          <ul>
            <li className="text-fuchsia-900 py-1 transition-transform duration-500 hover:scale-105 cursor-pointer flex items-center">
              <FaInstagram /> <a
                href="https://www.instagram.com/club_dragones_marinos/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2"
              >
                Instagram
              </a>
            </li>
            <li className="text-blue-700 py-1 transition-transform duration-500 hover:scale-105 cursor-pointer flex items-center">
              <FaFacebook /> <a
                href="https://www.facebook.com/people/Club-de-Nataci%C3%B3n-Dragones-Marinos/100085682863164/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2"
              >
                Facebook
              </a>
            </li>
            <li className="text-green-500 py-1 transition-transform duration-500 hover:scale-105 cursor-pointer flex items-center">
              <FaWhatsapp /> <a
                href="https://wa.link/95pecg"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2"
              >
                Whatsapp
              </a>
            </li>
            <li className="text-red-400 py-1 transition-transform duration-500 hover:scale-105 cursor-pointer flex items-center">
              <FaEnvelope /> <a
                href="mailto:correo@ejemplo.com" // Asegúrate de reemplazar esto con tu correo electrónico real
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2"
              >
                Correo Electronico
              </a>
            </li>
          </ul>
          
        </div>
      </div>
    </div>
  );
};

export default Footerindex;
