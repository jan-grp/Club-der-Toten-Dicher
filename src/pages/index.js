import Head from 'next/head'
import Image from 'next/image'
import { useRef, useEffect, useContext, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { scrollTo } from '../utils/scroll'

import LiteratureContent from '../components/Carusel/Literature'
import CharactersWrapper from '../components/Carusel/Characters/wrapper'
import Summary from '../components/Summary/index'
import LiteratureContentMobile from '../components/Carusel/Literature/indexMobile'
import SponsorWrapper from '../components/Sponsors'

import { 
  NavigationContext, 
  SwitchNavigationContext, 
  NavigationOptionsContext,
  SwitchNavigationOptionsContext
} from '../utils/context/navigation.context'

import styles from '../styles/Home.module.css'

const MIN_WIDTH = 1300

export default function Home() {
  const [width, setWidth] = useState(null)
  // navigation context
  const navigionContext = useContext(NavigationContext)
  const switchNavtigationContext = useContext(SwitchNavigationContext)
  const navigationOptionsContext = useContext(NavigationOptionsContext)
  const switchNavigationOptionsContext = useContext(SwitchNavigationOptionsContext)

  // defining settings for position detection
  const [characterThreshold, setCharacterThreshold] = useState(0.25)
  useEffect(() => {
    const width = window.innerWidth
    width > MIN_WIDTH ? setCharacterThreshold(0.25) : setCharacterThreshold(0.1)
    setWidth(width)
  }, [])

  // defining refs

  // scroll to top
  const scrollToTopRef = useRef(null)  
    
  // characters
  const { ref: charactersRef, inView: charactersInView } = useInView({ threshold: 0.1})
  const charactersScrollRef = useRef(null)
  const scrollToCharakters = () => scrollTo({ref: charactersScrollRef, duration: 500, offset: 140})

  // poems
  const { ref: poemRef, inView: poemInView } = useInView({ threshold: 0.2 })
  const poemScrollRef = useRef(null)
  const scrollToPoems = () => scrollTo({ref: poemScrollRef, duration: 500, offset: -200})

  // sponsors
  const { ref: sponsorsRef, inView: sponsorsInView } = useInView({ threshold: 0.1 })
  const sponsorsScrollRef = useRef(null)
  const scrollToSponsors = () => scrollTo({ ref: sponsorsScrollRef, duration: 500, offset: 0 })

  // pushing refs to context
  useEffect(() => {
    const newOptions = [...navigationOptionsContext]
    newOptions[0].ref = scrollToTopRef
    newOptions[1].ref = charactersScrollRef
    newOptions[2].ref = poemScrollRef
    newOptions[3].ref = sponsorsScrollRef
    switchNavigationOptionsContext(newOptions)
  }, [])

  // detecting position
    
  useEffect(() => { 
    // characters
    charactersInView && switchNavtigationContext({
      name: "Charaktere",
      ref: charactersScrollRef
    })
  }, [charactersInView])
  
  useEffect(() => {
    // poems
    poemInView && switchNavtigationContext({
      name: "Gedichte",
      ref: poemScrollRef
    })
  }, [poemInView])

  return (
    <div className={styles.window}>
      <Head>
        <title>Klassenspiel 2022</title>
        <meta name="Programmheft" content="Club der Toten Dichter" />
      </Head>

      <Summary 
        ref={scrollToTopRef}
      />

      <CharactersWrapper 
        ref={charactersRef}
        charactersScrollRef={charactersScrollRef}
      />

      {
        width > 900 && <LiteratureContent 
          ref={poemRef}
          poemScrollRef={poemScrollRef}
        />
      }

      {
        width <= 900 && <LiteratureContentMobile 
          ref={poemRef}
          poemScrollRef={poemScrollRef}
        />
      }

      <SponsorWrapper 
        ref={sponsorsRef}
        sponsorsScrollRef={sponsorsScrollRef}
      />
    </div>
  )
}
