import Head from 'next/head'
import Navigation from './Navigation'
import MainBlock from './blocks/Main'
import AboutBlock from './blocks/About'
import AboutConductorBlock from './blocks/AboutConductor'
import AchievementsBlock from './blocks/Achievements'
import SupportBlock from './blocks/Support'
import ContactBlock from './blocks/Contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>Moravski Chamber Choir</title>
      </Head>
      <Navigation />
      <MainBlock />
      <AboutBlock />
      <AboutConductorBlock />
      <AchievementsBlock />
      <SupportBlock />
      <ContactBlock />
    </>
  )
}
