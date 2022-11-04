import { useTranslation } from 'react-i18next'

import { Container } from './components/container'
import { Hero } from './components/hero'
import ImageHome from './components/image'
import { ListButton } from './components/listButton'
import { ListNetworkSocial } from './components/networkSocial/listNetworkSocial'
import { Contact } from './components/contact/contact'
import { person } from './components/dataPerson'

export function Home() {
  const { t, i18n } = useTranslation()
  const handleLanguageLng = (lng) => {
    i18n.changeLanguage(lng)

    localStorage.setItem('lng', lng)
  }

  return (
    <>
      <Container>
        <ImageHome alt={person.imageAlt} imageSrc={person.imageSrc} />
        <Hero
          description={`${t('description')}`}
          name={person.name}
          present={`${t('present')}`}
          username={person.username}
        />

        <ListButton person={person.link} t={t} />

        {/* Section Network Social */}
        <ListNetworkSocial />

        <Contact />
      </Container>
    </>
  )
}
