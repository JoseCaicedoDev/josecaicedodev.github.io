export function Card(props) {
  const tags = props.tags

  return (
    <>
      <article
        className="flex flex-col items-center md:flex-row bg-gray-500/10 rounded-lg border shadow-md w-full
        border-gray-400/50 dark:border-gray-700 dark:bg-gray-800/40"
        href="#"
      >
        <img alt="" className="p-8 md:max-w-[43%]" src={props.img} />
        <div
          className="border-t md:border-l md:border-t-0 md:p-6 border-gray-400/50
        dark:border-gray-700 px-4 pb-4 leading-normal w-full h-full"
        >
          <span className="text-xs text-white bg-gray-700 py-1 px-2 text-center font-semibold">
            {props.status}
          </span>
          <div className="my-6 flex gap-2 text-xs text-gray-700 dark:text-white/60">
            {tags.map((tag, index) => (
              <span key={index} className=" px-2 py-1 border border-gray-400 dark:border-gray-700">
                {tag}
              </span>
            ))}
          </div>
          <h5 className="my-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.title}
          </h5>
          <p className="my-5 text-sm text-gray-700 dark:text-gray-400">{props.description}</p>
          <a
            className="inline-block my-3 px-3 py-2 rounded-md bg-[#2DAC68] font-semibold"
            href={props.url}
            rel="noreferrer"
            target="_blank"
          >
            Open App
          </a>
        </div>
      </article>
    </>
  )
}
