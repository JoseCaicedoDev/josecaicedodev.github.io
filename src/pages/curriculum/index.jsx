import { useTranslation } from 'react-i18next'

import imgPerson from '../../assets/foto_person.jpeg'

import { dataCurriculum } from './dataCurriculum'
export function Curriculum() {
  const { t, i18n } = useTranslation()
  const handleLanguageLng = (lng) => {
    i18n.changeLanguage(lng)

    localStorage.setItem('lng', lng)
  }

  return (
    <>
      <article className="cv max-w-[1100px] mx-auto p-4 md:p-8 bg-gray-400/20">
        {/* <!-- Profile --> */}
        <div className="grid grid-cols-12 gap-4 mb-4">
          <section className="col-span-12 md:col-span-4 xl:col-span-3">
            <img
              alt="Imagen de jose sentado en su silla y cara sonriente"
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
              {t('perfil')}
            </h3>
            <p className="dark:text-gray-300 h-40 sm:h-24 md:h-32 lg:h-24">{t('cv_description')}</p>
          </section>
        </div>

        <div className="grid grid-cols-12 gap-4 mb-4">
          <section className="col-span-12 md:col-span-4 xl:col-span-3">
            {/* <!-- Education --> */}
            <div className="bg-slate-500/30 dark:bg-slate-500/70 rounded-tl-3xl p-8 mb-4 md:h-96">
              <h3
                className="relative text-xl font-semibold py-4 tracking-[4px] before:absolute
              before:w-10 before:h-[2px] before:bg-gray-900 before:left-0 before:bottom-0 mb-6
               dark:text-gray-100"
              >
                {t('educacion')}
              </h3>
              {dataCurriculum.Education.map((education, index) => (
                <div key={education.title} className="mb-6">
                  <p className="text-gray-500 dark:text-gray-300 text-sm">{education.annio}</p>
                  <h4 className="font-semibold dark:text-gray-300">
                    {t(`education_title${index}`)}
                  </h4>
                  <p className="text-gray-500 dark:text-gray-300 text-sm">
                    {t(`education_description${index}`)}
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
              {dataCurriculum.hobbies.map((data, index) => (
                <div key={data.title} className="mb-2">
                  <p className="text-gray-500 dark:text-gray-300 text-sm">
                    {t(`hobbies_${index}`)}
                  </p>
                </div>
              ))}
            </div>
            <div className="bg-slate-900/30 dark:bg-slate-800/50 rounded-tr-3xl p-8 mt-4">
              <h3
                className="relative text-xl font-semibold py-3 tracking-[4px] before:absolute before:w-10 before:h-[2px] before:bg-gray-900
              before:left-0 before:bottom-0 mb-5 dark:text-white"
              >
                {t('idiomas')}
              </h3>
              {dataCurriculum.languages.map((data, index) => (
                <div key={data} className="mb-2">
                  <p className="text-gray-500 dark:text-gray-300 text-sm">
                    {t(`language_${index}`)}
                  </p>
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
                {t('experiencia')}
              </h3>
              {dataCurriculum.Experience.map((data, index) => (
                <div key={data.title} className="flex flex-col md:flex-row gap-8 w-full mb-4">
                  <div className="dark:text-gray-300 text-sm w-full md:w-[30%]">
                    <p>{data.annio}</p>
                    <p>{t(`experience_company${index}`)}</p>
                  </div>
                  <div className="w-full md:w-[70%]">
                    <h4 className="font-semibold dark:text-slate-200">
                      {t(`experience_title${index}`)}
                    </h4>
                    <p className="text-gray-500 dark:text-slate-400 text-sm">
                      {t(`experience_description${index}`)}
                    </p>
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
                {t('habilidades')}
              </h3>
              <div
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 lg:flex-row lg:items-center gap-2 lg:gap-10 mb-4
              dark:text-gray-300 text-gray-800"
              >
                {dataCurriculum.skills.map((icon) => (
                  <div key={icon.title} className="flex items-center gap-4">
                    <img alt={icon.title} className="w-9" src={icon.img} />
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
