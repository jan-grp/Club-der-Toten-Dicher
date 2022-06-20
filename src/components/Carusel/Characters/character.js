import { motion } from 'framer-motion'


import styles from './character.module.css'

const CharakterContainer = ({
    characterName,
    characterDescription
}) => {

    return(
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
            transition={{
                type: "keyframes"
            }}
            viewport={{ once: true, margin: "-80px" }}
        >
            <p className={styles.name}>{characterName}</p>

            <p className={styles.text}>{characterDescription}</p>
        </motion.div>
    )
}

export default CharakterContainer