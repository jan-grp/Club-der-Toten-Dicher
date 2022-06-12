import Head from 'next/head'
import Image from 'next/image'
import { useRef, useEffect, useContext, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { scrollTo } from '../utils/scroll'

import ContentNavigation from '../components/Navigation'
import LiteratureContent from '../components/Carusel/Literature'
import CharactersWrapper from '../components/Carusel/Characters/wrapper'

import { NavigationContext, SwitchNavigationContext, navigationOptions } from '../utils/context/navigation.context'

import styles from '../styles/Home.module.css'

const MIN_WIDTH = 1300

export default function Home() {
  const navigionContext = useContext(NavigationContext)
  const switchNavtigationContext = useContext(SwitchNavigationContext)
  
  const [characterThreshold, setCharacterThreshold] = useState(0.25)
  useEffect(() => {
    const width = window.innerWidth
    width > MIN_WIDTH ? setCharacterThreshold(0.25) : setCharacterThreshold(0.1)
  }, [])

  const { ref: navigationRef, inView: navigationInView } = useInView({ })
  const navigationScrollRef = useRef(null)

  const { ref: charactersRef, inView: charactersInView } = useInView({ threshold: characterThreshold })
  const charactersScrollRef = useRef(null)
  const scrollToCharakters = () => scrollTo({ref: charactersScrollRef, duration: 500, offset: 140})

  const { ref: poemRef, inView: poemInView } = useInView({ threshold: 0.2 })
  const poemScrollRef = useRef(null)
  const scrollToPoems = () => scrollTo({ref: poemScrollRef, duration: 500, offset: -200})

  useEffect(() => {
    navigationInView &&  switchNavtigationContext("Top")
  }, [navigationInView])

  useEffect(() => {
    charactersInView && switchNavtigationContext("Charaktere")
  }, [charactersInView])
  

  useEffect(() => {
    poemInView && switchNavtigationContext("Gedichte")
  }, [poemInView])

  useEffect(() => {
    console.log("navigation context: ", navigionContext)
  }, [navigionContext])

  return (
    <div className={styles.window}>
      <Head>
        <title>Klassenspiel 2022</title>
        <meta name="Programmheft" content="Club der Toten Dichter" />
      </Head>

      <ContentNavigation 
        scrollToPoems={scrollToPoems}
        scrollToCharakters={scrollToCharakters}
        ref={navigationRef}
      />

      <CharactersWrapper 
        ref={charactersRef}
        charactersScrollRef={charactersScrollRef}
      />

      <LiteratureContent 
        ref={poemRef}
        poemScrollRef={poemScrollRef}
      />
    </div>
  )
}
