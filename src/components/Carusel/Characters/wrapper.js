import { useState, useEffect } from 'react'


import CharacterContent from './index'
import CharakterContentMobile from "./indexMobile"

import styles from './wrapper.module.css'

import data from './data'

const MIN_WIDTH = 1300

const CharactersWrapper = ({
    scrollRef
}) => {
    const [width, setWidth] = useState(null)

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [])

    return(
        <>
            <div 
                className={styles.charactersSpacerTop}
                ref={scrollRef}
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
            </div>

            <div className={styles.charactersSpacerBottom} />
        </>
    )
}

export default CharactersWrapper