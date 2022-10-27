export function SwitchLanguage(props) {
  // Switch language
  const handleSwitch = (e) => {
    if (!e.target.checked) {
      return props.handle('es')
    }

    return props.handle('en')
  }

  return (
    <div className="flex items-center dark:text-white text-[#1E1E1E] font-bold text-sm">
      <span className="mr-1">es</span>
      <label className="inline-flex relative items-center cursor-pointer" htmlFor="default-toggle">
        <input
          aria-label="language change button"
          className="sr-only peer before:content-['en']"
          id="default-toggle"
          type="checkbox"
          value=""
          onChange={handleSwitch}
        />
        <div
          className="w-9 h-4 z-2 bg-slate-400 peer-focus:outline-none peer-focus:ring-2
      peer-focus:ring-zinc-300 dark:peer-focus:ring-zinc-700 rounded-full peer
      dark:bg-gray-400 peer-checked:after:translate-x-full
      peer-checked:after:order-slate-500 after:content-['']
      after:absolute after:top-0 after:left-[2px] after:bg-[#1E1E1E]
    after:border-slate-500 after:border after:rounded-full after:h-4
      after:w-4 after:z-5 after:transition-all dark:border-gray-600 peer-checked:bg-slate-400"
        />
      </label>
      <span className="ml-1">en</span>
    </div>
  )
}
