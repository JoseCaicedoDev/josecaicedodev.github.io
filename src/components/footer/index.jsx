import imgLogo from '../../assets/logoJC_minificado.svg'

export function Footer() {
  return (
    <footer
      className="backdrop-blur
      bg-gray-700/20 dark:bg-slate-700/20 w-full px-6 h-14
      flex flex-row justify-between items-center transition-all duration-700"
    >
      <p className="text-xs dark:text-slate-100 w-4/5">
        Building Software with ♥ from LATAM to the world
      </p>
      <a className="flex items-end font-base text-xs text-black dark:text-zinc-400" href="">
        by
        <img alt="imagen logo" className="h-4 ml-1" src={imgLogo} />
      </a>
    </footer>
  )
}
