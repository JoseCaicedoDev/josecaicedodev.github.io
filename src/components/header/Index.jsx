import { useEffect, useRef, useState } from 'react'
import { MdDarkMode } from 'react-icons/md'
import { BsSun } from 'react-icons/bs'

import ImgLogoBlack from '../../assets/logoCaicedo.svg'
import ImgLogoWhite from '../../assets/logoCaicedoW.svg'

import './translate'
import { SwitchLanguage } from './switchLanguage'

function Header(props) {
  const darkSwitch = useRef(document.documentElement.className === 'dark')
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
      setIsDark(true)
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const changeDarkMode = () => {
    darkSwitch.current = document.documentElement.classList.toggle('dark')
    setIsDark(darkSwitch.current)

    darkSwitch.current ? (localStorage.theme = 'dark') : (localStorage.theme = 'ligth')
  }

  return (
    <>
      <header
        className="flex justify-between p-4 sticky top-0 w-full backdrop-blur
      bg-gray-700/20 dark:bg-slate-700/20"
      >
        <a className="flex flex-shrink-0 items-center cursor-pointer border-slate-900/10" href="/">
          {!isDark ? (
            <img alt="Your Company" className="block h-5 sm:h-6 md:h-7 w-auto" src={ImgLogoBlack} />
          ) : (
            <img alt="Your Company" className="block h-5 sm:h-6 md:h-7 w-auto" src={ImgLogoWhite} />
          )}
        </a>

        <div className="flex dark:text-white gap-1 items-center text-sm text-slate-900">
          <SwitchLanguage handle={props.handle} />
          <p className="mx-1 text-base">|</p>
          <button
            className="text-2xl dark:text-white text-slate-900"
            href=""
            onClick={changeDarkMode}
          >
            {!isDark ? (
              <MdDarkMode className="transition-all duration-700 ease-in-out" />
            ) : (
              <BsSun className="transition-all duration-700 ease-in-out" />
            )}
          </button>
        </div>
      </header>
    </>
  )
}
export default Header
