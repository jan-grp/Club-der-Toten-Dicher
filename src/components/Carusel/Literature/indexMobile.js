import React from 'react'
import Image from 'next/image'
import { useState, forwardRef, useEffect } from 'react'
import useWindowDimensions from '../../../utils/hooks/window'

import styles from "./literatureMobile.module.css"
import { FaQuoteRight } from 'react-icons/fa'

import Poem from './poem'
import PoemSelector from './selector'

import { poems } from './data'

// eslint-disable-next-line react/display-name
const LiteratureContentMobile = forwardRef((props, ref) => {
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
            <p className={styles.windowHeadline}>Lyrik aus dem Stück: </p>

            <div className={styles.spacerTop} />

            <div 
                className={styles.content}
                ref={props.poemScrollRef}
            >

                <div>
                    <p className={styles.poemTitle}>{poems[selectedIndex].title}</p>

                    <div className={styles.autherDiv}>
                        <div className={styles.autherColumn}>
                            <p className={styles.autherName}>{poems[selectedIndex].author}</p>
                            <p className={styles.date}>{poems[selectedIndex].date}</p>
                        </div>

                        <div className={styles.imageDiv}>
                            <Image 
                                src={poems[selectedIndex].image}
                                alt={poems[selectedIndex].author}
                                className={styles.autherImage}
                                width={50}
                                height={50}
                                priority
                                objectFit='cover'
                            />
                        </div>                        
                    </div>

                    <p className={styles.poemText}>{poems[selectedIndex].text}</p>       
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

export default LiteratureContentMobile