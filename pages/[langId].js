import Home from '../componets/Home'
import { langs } from '../locales'
export default Home

export async function getStaticPaths() {
  return {
    paths: langs.map((lang) => ({ params: { langId: lang } })),
    fallback: false, // can also be true or 'blocking'
  }
}

export async function getStaticProps() {
  return { props: {} }
}
