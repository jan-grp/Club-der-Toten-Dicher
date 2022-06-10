
import { motion } from "framer-motion"
import NavigationCard from "./card"

import styles from './navigation.module.css'

const content = [
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
  
]

const ContentNavigation = ({
    scrollToPoems
}) => {

    return (
        <motion.div
            className={styles.window}
        >
            <NavigationCard 
                backgroundColor={"#B197CF"}
                buttonBackgroundColor={"#9A7BBD"}
                buttonBorderColor={'#542784'}
                buttonColor={"#fff"}
                titleColor={"#fff"}
                contentText={content[0]}
                titleText={"Charaktere"}
                contentColor={"#fff"}
            />

            <NavigationCard 
                backgroundColor={"#78C5FA"}
                buttonBackgroundColor={"#96C1F0"}
                buttonBorderColor={'#79ACF3'}
                buttonColor={"#fff"}
                titleColor={"#fff"}
                contentText={content[0]}
                titleText={"Lyrik"}
                contentColor={"#fff"}

                scrollToSection={scrollToPoems}
            />

            <NavigationCard 
                backgroundColor={"#EAB1B1"}
                buttonBackgroundColor={"#EA9F9E"}
                buttonBorderColor={'#F38A87'}
                buttonColor={"#fff"}
                titleColor={"#fff"}
                contentText={content[0]}
                titleText={"Geschichte"}
                contentColor={"#fff"}
            />
        </motion.div>
    )
}

export default ContentNavigation