
import { GiPlainCircle } from 'react-icons/gi'
import styles from './selector.module.css'

import SkipButton from './skipButton'

const PoemSelector = ({
    poemArray,
    onSelection
}) => {

    return(
        <div
            className={styles.window}
        >
            <SkipButton direction={"left"}/>

            {poemArray.map((item, index) => (
                <GiPlainCircle 
                    key={index} 
                    color={"rgba(133, 133, 133, 0.8)"}
                    className={styles.selctionCircle}
                />
            ))}

            
            <SkipButton direction={"right"}/>
        </div>
    )
}

export default PoemSelector