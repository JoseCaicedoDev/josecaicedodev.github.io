import { Card } from '../../components/card/indev'

import { dataPortfolio } from './dataPortfolio'

export function Portfolio() {
  return (
    <>
      <main className="my-5 max-w-5xl mx-3 md:mx-auto">
        <h1
          className="my-3 text-3xl text-center font-semibold
        dark:text-white"
        >
          Portafolio
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-5">
          {dataPortfolio.map((data) => (
            <Card
              key={data.title}
              description={data.description}
              img={data.img}
              status={data.status}
              tags={data.tags}
              title={data.title}
              url={data.url}
            />
          ))}
        </div>
      </main>
    </>
  )
}
