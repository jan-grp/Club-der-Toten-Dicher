import React, { useState } from 'react'
import Navbar from '../components/Layout/navbar'
import Footer from '../components/Layout/footer'

import Layout from '../components/Layout/layout'

import '../styles/globals.css'

import { NavigationContext, SwitchNavigationContext, navigationOptions } from '../utils/context/navigation.context'

function MyApp({ Component, pageProps }) {
  const [navigationState, setNavigationState] = useState(navigationOptions[0])


  return (
    <NavigationContext.Provider value={navigationState}>
      <SwitchNavigationContext.Provider value={setNavigationState}>
        <Navbar />
          <Component {...pageProps} />
        <Footer />
      </SwitchNavigationContext.Provider>
    </NavigationContext.Provider>
  )
}

export default MyApp
