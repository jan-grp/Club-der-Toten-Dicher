import { forwardRef } from "react"


import styles from "./characters.module.css"

import ActorContainer from "./actor"
import CharakterContainer from "./charakter"

// eslint-disable-next-line react/display-name
const CharakterContent = forwardRef((props, ref) => {

    return(
        <div
            ref={ref}
            className={styles.window}
        >
            <ActorContainer />

            <CharakterContainer />
        </div>
    )
})

export default CharakterContent