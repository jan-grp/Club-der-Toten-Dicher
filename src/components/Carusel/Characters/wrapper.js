import React from 'react';
import { useState, useEffect, forwardRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

import CharacterContent from './index'
import CharakterContentMobile from "./indexMobile"

import styles from './wrapper.module.css'

import data from './data'

const MIN_WIDTH = 1300

// eslint-disable-next-line react/display-name
const CharactersWrapper = forwardRef((props, ref) => {
    const [width, setWidth] = useState(null)

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [])

    return(
        <div ref={ref}>
            <div 
                className={styles.charactersSpacerTop}
                ref={props.charactersScrollRef}
            />

            <div className={styles.characters}>
                <p 
                    className={width > MIN_WIDTH ? styles.charactersTitle : styles.charactersTitleMobile}
                >
                    Charaktere
                </p>

                {width > MIN_WIDTH && data.map((item, index) => (
                    <CharacterContent 
                        key={index}
                        actorName={item.actor}
                        actorImage={item.image}
                        characterName={item.character}
                        characterDescription={item.text}
                    />
                ))}

                {width < MIN_WIDTH && data.map((item, index) => (
                    <CharakterContentMobile 
                        key={index}
                        actorName={item.actor}
                        actorImage={item.image}
                        characterName={item.character}
                        characterDescription={item.text}
                    />
                ))}
                <Link
                    href="/beteiligte"
                >
                    <motion.a 
                        className={styles.moreCharacters}
                        whileHover={{
                            textDecorationLine: "underline"
                        }}
                        whileTap={{
                            scale: .9,

                        }}
                        href='/beteiligte'
                    >
                        weitere Beteiligte
                    </motion.a>
                </Link>
            </div>

            <div className={styles.charactersSpacerBottom} />
        </div>
    )
})

export default CharactersWrapper