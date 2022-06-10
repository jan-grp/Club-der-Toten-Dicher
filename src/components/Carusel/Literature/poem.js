import { motion,
    AnimatePresence,
    useAnimation
} from 'framer-motion'
import { useState, useEffect } from 'react'

import styles from './poem.module.css'

const Poem = ({
    text,
    title,
    date
}) => {

    return(
        <motion.div
            className={styles.window}
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
                <p className={styles.date}>{date}</p>
            </div>
            <div className={styles.text}>
                {text}
            </div>
        </motion.div>
    )
}

export default Poem