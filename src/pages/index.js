import Head from 'next/head'
import Image from 'next/image'
import { useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { scrollTo } from '../utils/scroll'

import ContentNavigation from '../components/Navigation'
import LiteratureContent from '../components/Carusel/Literature'

import styles from '../styles/Home.module.css'

export default function Home() {
  const poemRef = useRef(null)
  const scrollToPoems = () => scrollTo({ref: poemRef, duration: 500, offset: -100})

  return (
    <div className={styles.window}>
      <Head>
        <title>Klassenspiel 2022</title>
        <meta name="Programmheft" content="Club der Toten Dichter" />
      </Head>

      <ContentNavigation 
        scrollToPoems={scrollToPoems}
      />

      <LiteratureContent ref={poemRef}/>
    </div>
  )
}
