
import { GiPlainCircle } from 'react-icons/gi'
import { motion } from 'framer-motion'
import styles from './selector.module.css'

import SkipButton from './skipButton'

const PoemSelector = ({
    poemArray,
    selectedIndex,
    onSelection
}) => {
    return(
        <motion.div
            className={styles.window}
            initial={{
                opacity: 0,
            }}
            whileInView={{ 
                opacity: 1,
            }}
            viewport={{ once: true, margin: "-10px" }}
        >
            <SkipButton 
                direction={"left"}
                onSelection={onSelection}
            />

            {poemArray.map((item, index) => (
                <GiPlainCircle 
                    key={index} 
                    color={index == selectedIndex ? "#fff" : "rgba(133, 133, 133, 0.6)"}
                    className={styles.selctionCircle}
                />
            ))}

            
            <SkipButton 
                direction={"right"}
                onSelection={onSelection}
            />
        </motion.div>
    )
}

export default PoemSelector