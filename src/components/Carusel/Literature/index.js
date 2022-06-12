import React from 'react'
import Image from 'next/image'
import { useState, forwardRef, useEffect } from 'react'
import useWindowDimensions from '../../../utils/hooks/window'

import styles from "./literatur.module.css"
import { FaQuoteRight } from 'react-icons/fa'

import Poem from './poem'
import PoemSelector from './selector'
import Poet from './poet'

import { poems } from './data'

const MIN_WIDTH = 1180

// eslint-disable-next-line react/display-name
const LiteratureContent = forwardRef((props, ref) => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [width, setWidth] = useState(null)

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

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [])

    return(
        <div 
            className={styles.window}
            ref={ref}
        >
            <div className={styles.spacerTop} />

            <div 
                className={
                    width > MIN_WIDTH ? styles.content : styles.contentMobile
                }
                ref={props.poemScrollRef}
            >

                <div className={styles.topRow}>
                    {width > MIN_WIDTH && <Poet 
                        image={poems[selectedIndex].image}
                        name={poems[selectedIndex].author}
                    />}

                    {width > MIN_WIDTH && <FaQuoteRight color='#fff' size={50}/>}
                    <Poem 
                        title={poems[selectedIndex].title}
                        date={poems[selectedIndex].date}
                        text={poems[selectedIndex].text}
                        author={poems[selectedIndex].author}
                        width={width || 0}
                    />
                </div>

                <PoemSelector 
                    poemArray={poems}
                    selectedIndex={selectedIndex}
                    onSelection={navigate}
                />
            </div>     
       </div>
    ) 
})

export default LiteratureContent;