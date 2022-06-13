import { motion } from 'framer-motion'
import Image from 'next/image'

import styles from './actor.module.css'

const ActorMobile = ({
    actorName,
    actorImage
}) => {

    return(
        <motion.div
            className={styles.windowMobile}
            initial={{
                opacity: 0,
            }}
            whileInView={{ 
                opacity: 1,
                y: 0,
                x: 0
            }}
            viewport={{ once: true, margin: "-80px" }}
        >
            <p className={styles.gespieltVon}>Gespielt von:</p>
            
            <div className={styles.imageDivMobile}>
                <Image 
                    alt="gabriel"
                    src={actorImage}
                    className={styles.image}
                    width={240}
                    height={240}
                    objectFit="cover"
                />
            </div>

            <p className={styles.nameMobile}>{actorName}</p>
        </motion.div>
    )
}

export default ActorMobile