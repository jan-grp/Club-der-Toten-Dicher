import { useState, useContext, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

import { scrollTo } from '../../utils/scroll/index'

import styles from './navigationDropdown.module.css'

import { 
    NavigationContext, 
    SwitchNavigationContext, 
    navigationOptions,
    NavigationOptionsContext,
    SwitchNavigationOptionsContext
} from '../../utils/context/navigation.context'

const NavigationDropdown = ({
    close
}) => {
    const router = useRouter()
    const navigationContext = useContext(NavigationContext)
    const switchNavigationContext = useContext(SwitchNavigationContext)
    const navigationOptionsContext = useContext(NavigationOptionsContext)
    const switchNavigationOptionsContext = useContext(SwitchNavigationOptionsContext)

    const [selectedIndex, setSelectedIndex] = useState(0)

    useEffect(() => {
        const currentIndex = navigationOptions.findIndex(option => option.name === navigationContext.name)
        setSelectedIndex(currentIndex)
    }, [navigationContext])

    const navigateTo = (index) => {
        const content = navigationOptionsContext[index]

        if(content.name === "Artikel") return router.push('/artikel')

        let offset
        switch (content.name) {
            case "Charaktere":
                offset = 140
                break;
            
            case "Gedichte":
                offset = -200
                break;
            default:
                offset = -50
        }

        switchNavigationContext(navigationOptions[index])
        scrollTo({ ref: content.ref, duration: 500, offset })
        close()
    }

    return(
        <motion.div 
            className={styles.window}
            initial={{ y: -500 }}
            animate={{ y: 0 }}
            exit={{ y: -500 }}
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
                            whileHover={{
                                backgroundColor: "rgba(165, 165, 165, 0.15)"
                            }}
                            whileTap={{
                                scale: .9
                            }}
                            onClick={() => navigateTo(index)}
                        >
                            <p className={styles.itemText}>{option.name}</p>
                        </motion.div>
                    )
                })
            }
        </motion.div>
    )
}

export default NavigationDropdown