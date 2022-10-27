import { social } from './dataNetwork'

export function ListNetworkSocial() {
  return (
    <>
      <section className="text-slate-800 dark:text-slate-100 my-5 flex justify-around">
        {social.map((network) => (
          <a
            key={network.titleName}
            className="w-11 h-11 bg-zinc-200/70 dark:bg-slate-800/30
              flex justify-center items-center rounded-lg hover:bg-gray-200
              hover:dark:bg-zinc-700 dark:backdrop-blur ring-1 ring-zinc-400
              dark:ring-zinc-600"
            href={network.href}
            rel="noreferrer"
            target="_blank"
          >
            {network.iconImg}
          </a>
        ))}
      </section>
    </>
  )
}
