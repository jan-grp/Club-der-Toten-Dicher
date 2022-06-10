

import Navbar from '../components/Layout/navbar'
import Footer from '../components/Layout/footer'

import Layout from '../components/Layout/layout'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    // <>
    //   <Navbar />
    //   <Component {...pageProps} />
    //   <Footer />
    // </>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
