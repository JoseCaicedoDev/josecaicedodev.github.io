import imgPerson from '../../assets/foto_person.jpeg'

import { dataCurriculum } from './dataCurriculum'
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
              <h1 className="text-5xl md:text-7xl text-gray-700 dark:text-white/95">
                {dataCurriculum.name}
              </h1>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white/75">
                {dataCurriculum.lastname}
              </h1>
              <p className="md:text-2xl text-gray-700 dark:text-white/80">
                {dataCurriculum.perfil}
              </p>
            </div>
            <h3
              className="relative text-xl font-semibold py-4 tracking-[4px] before:absolute before:w-10 before:h-[2px]
            before:bg-gray-900 before:left-0 before:bottom-0 mb-2 dark:text-gray-100"
            >
              Perfil
            </h3>
            <p className="dark:text-gray-300">{dataCurriculum.description}</p>
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
              {dataCurriculum.Education.map((education) => (
                <div key={education.title} className="mb-6">
                  <p className="text-gray-500 dark:text-gray-300 text-sm">{education.annio}</p>
                  <h4 className="font-medium">{education.title}</h4>
                  <p className="text-gray-500 dark:text-gray-300  text-sm">
                    {education.description}
                  </p>
                </div>
              ))}
            </div>
            {/* <!-- Contact --> */}
            <div className="bg-slate-900/30 dark:bg-slate-900/40 rounded-tr-3xl p-8">
              <h3
                className="relative text-xl font-semibold py-3 tracking-[4px] before:absolute before:w-10 before:h-[2px] before:bg-gray-900
              before:left-0 before:bottom-0 mb-5 dark:text-white"
              >
                Hobbies
              </h3>
              {dataCurriculum.hobbies.map((data) => (
                <div key={data.title} className="mb-2">
                  <p className="text-gray-500 dark:text-gray-300 text-sm">{data}</p>
                </div>
              ))}
            </div>
            <div className="bg-slate-900/30 dark:bg-slate-800/50 rounded-tr-3xl p-8 mt-4">
              <h3
                className="relative text-xl font-semibold py-3 tracking-[4px] before:absolute before:w-10 before:h-[2px] before:bg-gray-900
              before:left-0 before:bottom-0 mb-5 dark:text-white"
              >
                Idiomas
              </h3>
              {dataCurriculum.languages.map((data) => (
                <div key={data} className="mb-2">
                  <p className="text-gray-500 dark:text-gray-300 text-sm">{data}</p>
                </div>
              ))}
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
              {dataCurriculum.Experience.map((data) => (
                <div key={data.title} className="flex flex-col md:flex-row gap-8 w-full mb-4">
                  <div className="dark:text-gray-300 text-sm w-full md:w-[30%]">
                    <p>{data.annio}</p>
                    <p>{data.company}</p>
                  </div>
                  <div className="w-full md:w-[70%]">
                    <h4 className="font-semibold dark:text-slate-200">{data.title}</h4>
                    <p className="text-gray-500 dark:text-slate-400 text-sm">{data.description}</p>
                  </div>
                </div>
              ))}
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
                {dataCurriculum.skills.map((icon) => (
                  <div key={icon.title} className="flex items-center gap-4">
                    <img alt="" className="w-9" src={icon.img} />
                    <span>{icon.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  )
}
