import React from "react";

const Footer = () => {
  return (
    <footer className="text-gray-300">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {/* Sección: Sobre nosotros */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Sobre nosotros</h3>
            <p className="text-sm">
              Somos una empresa dedicada a brindar soluciones innovadoras y
              sostenibles para nuestros clientes. Creemos en la excelencia y en
              el impacto positivo.
            </p>
          </div>

          {/* Sección: Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="hover:text-[#00ffa7]">
                  Acerca de
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-[#00ffa7]">
                  Servicios
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[#00ffa7]">
                  Contacto
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-[#00ffa7]">
                  Preguntas frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Sección: Contacto */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contáctanos</h3>
            <p className="text-sm">
              Email:{" "}
              <a href="mailto:info@empresa.com" className="hover:text-[#00ffa7]">
                info@empresa.com
              </a>
            </p>
            <p className="text-sm">Teléfono: +34 123 456 789</p>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="text-gray-400 hover:text-[#00ffa7]"
                aria-label="Facebook"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35C.592 0 0 .592 0 1.325v21.351C0 23.408.592 24 1.325 24H12v-9.294H9.294V10.59H12V8.294c0-2.689 1.64-4.162 4.032-4.162 1.15 0 2.141.085 2.429.123v2.818h-1.666c-1.308 0-1.561.622-1.561 1.534v2.01h3.122l-.406 3.116H15.234V24h7.441c.734 0 1.325-.592 1.325-1.325V1.325C24 .592 23.408 0 22.675 0z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#00ffa7]"
                aria-label="Twitter"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.897-.959-2.178-1.555-3.594-1.555-2.717 0-4.924 2.208-4.924 4.917 0 .39.045.765.126 1.124-4.09-.205-7.719-2.165-10.148-5.144-.423.729-.666 1.575-.666 2.476 0 1.71.87 3.213 2.188 4.099-.807-.026-1.566-.247-2.23-.616v.062c0 2.388 1.698 4.384 3.946 4.837-.414.112-.849.171-1.296.171-.316 0-.623-.03-.924-.086.631 1.953 2.445 3.376 4.6 3.416-1.68 1.317-3.808 2.102-6.102 2.102-.39 0-.779-.022-1.17-.066 2.189 1.394 4.768 2.208 7.548 2.208 9.057 0 14.002-7.497 14.002-13.986 0-.21-.004-.42-.014-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <p className="text-sm text-center">
            © {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
