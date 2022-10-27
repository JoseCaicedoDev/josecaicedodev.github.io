export function Hero(props) {
  return (
    <>
      <div className="text-center">
        <p className="text-md tracking-wider my-3 font-semibold text-sky-500 dark:text-sky-400">
          {props.username}
        </p>
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
          <span className="block xl:inline">
            {props.present} {props.name}
          </span>
        </h1>
        <p className="mt-3 mb-4 text-base text-slate-600 dark:text-slate-300">
          {props.description}
        </p>
      </div>
    </>
  )
}
