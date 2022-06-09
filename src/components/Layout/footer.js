import styles from './footer.module.css'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const Footer = () => {
    const [rocketIsVisible, setRocketIsVisible] = useState(false)

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
                    <p>(Schloss Hamborn logo)</p>
                    <a>Schloss Hamborn</a>
                </div>
                
                {rocketIsVisible && <span className={`${styles.animatedRocket}`}>🚀</span>}

                <div className={styles.hiddenButton} onClick={() => setRocketIsVisible(true)}/>      
            </div>
        </div>
    )
}

export default Footer