import Layout from '../components/Layout'
import Navbar from '../components/Navbar/Navbar'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {

  return (
    <Layout>
      <Navbar />
      <Component {...pageProps} />
    </Layout>
  )
}
