

import Navbar from '../components/Layout/navbar'
import Footer from '../components/Layout/footer'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
