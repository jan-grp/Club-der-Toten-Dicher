import { motion,
    AnimatePresence,
    useAnimation
} from 'framer-motion'
import { useState, useEffect } from 'react'

import styles from './poem.module.css'

const MIN_WIDTH = 1180

const Poem = ({
    text,
    title,
    date,
    author,
    width
}) => {

    return(
        <motion.div
            className={
                width > MIN_WIDTH ? styles.window : styles.windowMobile
            }
            initial={{
                opacity: 0,
                x: 200
            }}
            whileInView={{ 
                opacity: 1,
                x: 0,
                y: 0 
            }}
            viewport={{ once: true, margin: "-100px" }}
        >
            <div className={styles.header}>
                <p className={styles.title}>{title}</p>
                {width < MIN_WIDTH && <p className={styles.author}>{author}</p>}
                <p className={styles.date}>{date}</p>
            </div>
            <div 
                className={
                    width > MIN_WIDTH ? styles.text : styles.textMobile
                }
            >
                {text}
            </div>
        </motion.div>
    )
}

export default Poem