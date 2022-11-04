import { Link } from 'react-router-dom'

export function ListButton({ person, t }) {
  const buttonLink = person

  return (
    <>
      <div className="flex flex-col gap-4">
        {buttonLink.map((link, index) => {
          const btnColor = `btn ${link.type}`

          if (link.format == 'a') {
            return (
              <a
                key={link.titleName}
                className={`${btnColor}`}
                href={link.href}
                rel="noreferrer"
                target="_blank"
              >
                {link.iconImg}
                {t(`btn_${index}`)}
              </a>
            )
          }

          return (
            <Link key={link.titleName} className={`${btnColor}`} rel="noreferrer" to={link.href}>
              {link.iconImg}
              {t(`btn_${index}`)}
            </Link>
          )
        })}
      </div>
    </>
  )
}
