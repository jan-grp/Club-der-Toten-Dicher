import styles from './footer.module.css'
import styled from 'styled-components'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import HambornLogo from '../../public/Icons/LOGO Schloss Hamborn NEU.PNG'

const Footer = () => {
    const [rocketIsVisible, setRocketIsVisible] = useState(false)
    const [width, setWidth] = useState(null)

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [])

    useEffect(() => {
        rocketIsVisible && setTimeout(() => {
            setRocketIsVisible(false)
        }, 3000);
    }, [rocketIsVisible])

    return(
        <div className={styles.window}>
            <div className={`${styles.spacer} ${styles.layerBlue}`}></div>

            <div className={styles.content}>
                <div className={styles.hambornDiv}>
                    <a
                        href='https://www.schlosshamborn.de'
                    >
                        <Image 
                            src={HambornLogo}
                            alt="logo schloss hamborn"
                            width={width < 500 ? 60 : 110}
                            height={width < 500 ? 60 : 100}
                            styles={{
                                borderRadius: 30
                            }}
                        />
                    </a>

                </div>

                {rocketIsVisible && <span className={`${styles.animatedRocket}`}>🚀</span>}

                <div className={styles.hiddenButton} onClick={() => setRocketIsVisible(true)}/>

                <Link
                    href={"/impressum"}
                >
                    <motion.a 
                        className={styles.impressumLink}
                        whileHover={{ textDecoration: "underline" }}
                    >
                        Impressum
                    </motion.a>
                </Link>
            </div>
        </div>
    )
}

export default Footer