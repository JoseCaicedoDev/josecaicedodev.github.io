import { FaReact } from 'react-icons/fa'

import imgPerson from '../../assets/JC.png'
export function Curriculum() {
  return (
    <>
      <article className="cv max-w-[1100px] mx-auto p-4 md:p-8 bg-gray-400/20">
        {/* <!-- Profile --> */}
        <div className="grid grid-cols-12 gap-4 mb-4">
          <section className="col-span-12 md:col-span-4 xl:col-span-3">
            <img
              className="w-full h-full object-cover rounded-tr-3xl rounded-bl-3xl mb-4"
              src={imgPerson}
            />
          </section>
          <section className="col-span-12 md:col-span-8 xl:col-span-9 py-4 md:px-8">
            {/* <!-- About --> */}
            <div>
              <h1 className="text-5xl md:text-7xl text-gray-700 dark:text-white/95">Malkin</h1>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white/75">
                Anderson
              </h1>
              <p className="md:text-2xl text-gray-700 dark:text-white/80">Frontend</p>
            </div>
            <h3
              className="relative text-xl font-semibold py-4 tracking-[4px] before:absolute before:w-10 before:h-[2px]
            before:bg-gray-900 before:left-0 before:bottom-0 mb-2 dark:text-gray-100"
            >
              Perfil
            </h3>
            <p className="dark:text-gray-300">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industrys standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </section>
        </div>

        <div className="grid grid-cols-12 gap-4 mb-4">
          <section className="col-span-12 md:col-span-4 xl:col-span-3">
            {/* <!-- Education --> */}
            <div className="bg-slate-500/30 dark:bg-slate-500/70 rounded-tl-3xl p-8 mb-4">
              <h3
                className="relative text-xl font-semibold py-4 tracking-[4px] before:absolute
              before:w-10 before:h-[2px] before:bg-gray-900 before:left-0 before:bottom-0 mb-6
               dark:text-gray-100"
              >
                Educación
              </h3>
              <div className="mb-6">
                <p className="text-gray-500 dark:text-gray-300 text-sm">2014 - 2018</p>
                <h4 className="font-medium">Nombre del titulo</h4>
                <p className="text-gray-500 dark:text-gray-300  text-sm">
                  Nombre de la universidad
                </p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-300 text-sm">2012 - 2014</p>
                <h4 className="font-medium">Nombre del titulo</h4>
                <p className="text-gray-500 dark:text-gray-300 text-sm">Nombre de la universidad</p>
              </div>
            </div>
            {/* <!-- Contact --> */}
            <div className="bg-slate-900/30 dark:bg-slate-900/40 rounded-tr-3xl p-8">
              <h3 className="relative text-xl font-semibold py-4 tracking-[4px] before:absolute before:w-10 before:h-[2px] before:bg-gray-900 before:left-0 before:bottom-0 mb-6">
                Contacto
              </h3>
              <div className="mb-6">
                <h4 className="font-medium">Celular</h4>
                <p className="text-gray-500 dark:text-gray-300 text-sm">+52 614 1 00 00 00</p>
              </div>
              <div className="mb-6">
                <h4 className="font-medium">Email</h4>
                <p className="text-gray-500 dark:text-gray-300 text-sm">email@jt-ui.com</p>
              </div>
              <div>
                <h4 className="font-medium">Portafolio</h4>
                <p className="text-gray-500 dark:text-gray-300 text-sm">hola.com</p>
              </div>
            </div>
          </section>
          <section className="col-span-12 md:col-span-8 xl:col-span-9">
            {/* <!-- Experience --> */}
            <div className="bg-slate-900/20 dark:bg-slate-900/60 rounded-tl-3xl rounded-br-3xl p-8 mb-4">
              <h3
                className="relative text-xl font-semibold py-4 tracking-[4px] before:absolute before:w-10
              before:h-[2px] before:bg-gray-900 before:left-0 before:bottom-0 mb-6
                dark:text-gray-100"
              >
                Experiencia
              </h3>
              <div className="flex flex-col md:flex-row gap-8 w-full mb-4">
                <div className="dark:text-gray-300 text-sm w-full md:w-[30%]">
                  <p>2020 - presente</p>
                  <p>Nombre de la empresa</p>
                </div>
                <div className="w-full md:w-[70%]">
                  <h4 className="font-semibold dark:text-slate-200">Diseñadora Senior UX</h4>
                  <p className="text-gray-500 dark:text-slate-400 text-sm">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industrys standard dummy text ever since the 1500s
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-8 w-full mb-4">
                <div className="dark:text-gray-300 text-sm w-full md:w-[30%]">
                  <p>2020 - presente</p>
                  <p>Nombre de la empresa</p>
                </div>
                <div className="w-full md:w-[70%]">
                  <h4 className="font-semibold dark:text-slate-200">Diseñadora Senior UX</h4>
                  <p className="text-gray-500 dark:text-slate-400 text-sm">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industrys standard dummy text ever since the 1500s
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-8 w-full mb-4">
                <div className="dark:text-gray-300 text-sm w-full md:w-[30%]">
                  <p>2020 - presente</p>
                  <p>Nombre de la empresa</p>
                </div>
                <div className="w-full md:w-[70%]">
                  <h4 className="font-semibold dark:text-slate-200">Diseñadora Senior UX</h4>
                  <p className="text-gray-500 dark:text-slate-400 text-sm">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industrys standard dummy text ever since the 1500s
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Skills --> */}
            <div className="bg-slate-600/30 dark:bg-slate-600/70 rounded-tr-3xl rounded-bl-3xl p-8">
              <h3
                className="relative text-xl font-semibold py-4 tracking-[4px] before:absolute before:w-10
              before:h-[2px] before:bg-gray-900 before:left-0 before:bottom-0 mb-6
                dark:text-gray-100"
              >
                Habilidades
              </h3>
              <div
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 lg:flex-row lg:items-center gap-2 lg:gap-10 mb-4
              dark:text-gray-300 text-gray-800"
              >
                <div className="flex items-center gap-4">
                  <FaReact className="text-4xl" />
                  <span>React</span>
                </div>
                <div className="flex items-center gap-4">
                  <FaReact className="text-4xl" />
                  <span>React</span>
                </div>
                <div className="flex items-center gap-4">
                  <FaReact className="text-4xl" />
                  <span>React</span>
                </div>
                <div className="flex items-center gap-4">
                  <FaReact className="text-4xl" />
                  <span>React</span>
                </div>
                <div className="flex items-center gap-4">
                  <FaReact className="text-4xl" />
                  <span>React</span>
                </div>
                <div className="flex items-center gap-4">
                  <FaReact className="text-4xl" />
                  <span>React</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  )
}
