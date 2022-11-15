import imgLogo from '../../assets/logoJC_minificado.svg'

export function Footer({ t }) {
  return (
    <footer
      className="backdrop-blur
      bg-gray-700/20 dark:bg-slate-700/20 mx-auto  h-14
      flex flex-col justify-center items-center transition-all duration-700"
    >
      <p className="text-xs dark:text-slate-100">{t('footer')}</p>
      <a className="flex font-base text-xs text-black dark:text-zinc-400" href="">
        {t('footer1')}
        <img alt="imagen logo" className="h-4 ml-1" src={imgLogo} />
      </a>
    </footer>
  )
}
