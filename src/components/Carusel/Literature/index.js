import React from 'react'
import Image from 'next/image'
import { useState, forwardRef } from 'react'

import styles from "./literatur.module.css"
import { FaQuoteRight } from 'react-icons/fa'

import Poem from './poem'
import PoemSelector from './selector'
import Poet from './poet'

import { poems } from './data'

// eslint-disable-next-line react/display-name
const LiteratureContent = forwardRef((props, ref) => {

    const [selectedIndex, setSelectedIndex] = useState(0)

    const navigate = (direction) => {
        if (direction === "left") {
            if (selectedIndex > 0) {
                setSelectedIndex(selectedIndex - 1)
            }
        } else {
            if (selectedIndex < poems.length - 1) {
                setSelectedIndex(selectedIndex + 1)
            }
        }
    }

    return(
        <div 
            className={styles.window}
            ref={ref}
        >
            <div className={styles.spacerTop} />

            <div className={styles.content}>

                <div className={styles.topRow}>
                    <Poet 
                        image={poems[selectedIndex].image}
                        name={poems[selectedIndex].author}
                    />

                    <FaQuoteRight color='#fff' size={50}/>

                    <Poem 
                        title={poems[selectedIndex].title}
                        date={poems[selectedIndex].date}
                        text={poems[selectedIndex].text}
                    />
                </div>

                <PoemSelector 
                    poemArray={poems}
                    selectedIndex={selectedIndex}
                    onSelection={navigate}
                />

                <button
                    onClick={() => console.log("width: ",window.innerWidth)}
                >
                    test
                </button>
            </div>     
       </div>
    ) 
})

export default LiteratureContent;