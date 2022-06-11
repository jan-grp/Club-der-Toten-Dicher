import Image from 'next/image'
import { motion } from 'framer-motion'

import styles from './actor.module.css'

import gabriel from '../../../public/Images/Actor/GabrielKuss.jpg'

const ActorContainer = () => {

    return (
        <motion.div
            className={styles.window}
            initial={{
                opacity: 0,
                y: 200
            }}
            whileInView={{ 
                opacity: 1,
                y: 0,
                x: 0
            }}
            viewport={{ once: true, margin: "-80px" }}
        >
            <div className={styles.imageDiv}>
                <Image 
                    alt="gabriel"
                    src={gabriel}
                    className={styles.image}
                    width={240}
                    height={240}
                />
            </div>

            <p className={styles.name}>Gabriel Gleisberg</p>

            <p className={styles.spielt}>Spielt:</p>
        </motion.div>
    )
}

export default ActorContainer