import Image from 'next/image'
import { motion } from 'framer-motion'
import styles from "./literatur.module.css"

const Poet = ({
    image,
    name,
}) => {

    return(
        <motion.div 
            className={styles.poetDev}
            initial={{
                x: -200,
                opacity: 0
            }}
            whileInView={{ 
                x: 0,
                opacity: 1 
            }}
            viewport={{ once: true, margin: "-100px" }}
        >
            <Image 
                src={image} 
                alt="nietzscg"
                width={300}
                height={300}
                className={styles.image}
                priority
            />

            <label className={styles.poetName}>{name}</label>
        </motion.div>
    )
}

export default Poet