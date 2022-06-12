import { useState, useContext, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import styles from './navigationDropdown.module.css'

import { NavigationContext, SwitchNavigationContext, navigationOptions } from '../../utils/context/navigation.context'

const NavigationDropdown = () => {
    const navigationContext = useContext(NavigationContext)
    const switchNavigationContext = useContext(SwitchNavigationContext)

    const [contentArray, setContentArray] = useState([])
    const [selectedIndex, setSelectedIndex] = useState(0)

    useEffect(() => {
        const currentIndex = navigationOptions.findIndex(option => option === navigationContext)
        setSelectedIndex(currentIndex)
    }, [navigationContext])

    const navigateTo = (index) => {
        switchNavigationContext(navigationOptions[index])
    }

    return(
        <motion.div 
            className={styles.window}
            initial={{ y: -500 }}
            animate={{ y: 0 }}
            transition={{
                type: "keyframes",
                duration: .15
            }}
        >
            {
                navigationOptions.map((option, index) => {
                    if(index === 0) return
                    return(
                        <motion.div 
                            key={index}
                            className={
                                index === selectedIndex ? styles.selectedItemDiv : styles.unselectedItemDiv
                            }
                            whileTap={{
                                scale: .9
                            }}
                            onClick={() => navigateTo(index)}
                        >
                            <p className={styles.itemText}>{option}</p>
                        </motion.div>
                    )
                })
            }
        </motion.div>
    )
}

export default NavigationDropdown