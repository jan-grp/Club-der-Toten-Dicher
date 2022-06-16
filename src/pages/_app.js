import React, { useState } from 'react'
import Navbar from '../components/Layout/navbar'
import Footer from '../components/Layout/footer'
import { useRouter } from 'next/router'

import Layout from '../components/Layout/layout'

import '../styles/globals.css'

import { 
  NavigationContext, 
  SwitchNavigationContext, 
  navigationOptions,
  NavigationOptionsContext,
  SwitchNavigationOptionsContext
} from '../utils/context/navigation.context'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [navigationState, setNavigationState] = useState(navigationOptions[0])
  const [navigationOptionsState, setNavigationOptionsState] = useState(navigationOptions)
  
  return (
    <NavigationOptionsContext.Provider value={navigationOptionsState}>
      <SwitchNavigationOptionsContext.Provider value={setNavigationOptionsState}>
        <NavigationContext.Provider value={navigationState}>
          <SwitchNavigationContext.Provider value={setNavigationState}>

            { router.route == "/" && <Navbar />}

            <Component {...pageProps} />

            { router.route == "/" && <Footer />}
          </SwitchNavigationContext.Provider>
        </NavigationContext.Provider>
      </SwitchNavigationOptionsContext.Provider>
    </NavigationOptionsContext.Provider>
  )
}

export default MyApp
