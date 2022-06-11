import { forwardRef } from "react"


import styles from "./characters.module.css"

import ActorContainer from "./actor"
import CharakterContainerMobile from "./charakterMobile"

// eslint-disable-next-line react/display-name
const CharakterContentMobile = forwardRef((props, ref) => {

    return(
        <div className={styles.wrapper}>
            <p className={styles.headline}>Charaktere</p>
            <div
                ref={ref}
                className={styles.windowMobile}
            >
                <CharakterContainerMobile />

            </div>
        </div>
    )
})

export default CharakterContentMobile