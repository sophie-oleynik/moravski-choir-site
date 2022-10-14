import Head from 'next/head'
import Navigation from '../componets/Navigation';
import MainBlock from '../componets/blocks/Main';
import AboutBlock from '../componets/blocks/About';
import AchievementsBlock from '../componets/blocks/Achievements';
import SupportBlock from '../componets/blocks/Support'
import ContactBlock from '../componets/blocks/Contact'

export default function Home({props}) {
  console.log(props)
  return (
    <>
      <Head>
        <title>Moravski Chamber Choir</title>
      </Head>
      <Navigation />
      <MainBlock />
      <AboutBlock />
      <AchievementsBlock />
      <SupportBlock />
      <ContactBlock />
      </>
  )
}


