import { motion } from 'framer-motion'
import Image from 'next/image'

import styles from './character.module.css'

import gabriel from '../../../public/Images/Actor/GabrielKuss.jpg'

const characterDescription = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At"

const CharakterContainerMobile = () => {

    return(
        <motion.div
            className={styles.windowMobile}
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
            <p className={styles.nameMobile}>Todd Anderson</p>

            <p className={styles.textMobile}>
                <Image 
                    alt="gabriel"
                    src={gabriel}
                    width={90}
                    height={90}
                    objectFit="cover"
                />
                {characterDescription}
            </p>
        </motion.div>
    )
}

export default CharakterContainerMobile