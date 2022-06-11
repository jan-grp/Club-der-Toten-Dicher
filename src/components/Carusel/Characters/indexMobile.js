import { forwardRef } from "react"


import styles from "./characters.module.css"

import CharakterContainerMobile from "./charakterMobile"
import ActorMobile from "./actorMobile"

// eslint-disable-next-line react/display-name
const CharakterContentMobile = forwardRef((props, ref) => {

    return(

        <div
            ref={ref}
            className={styles.windowMobile}
        >
            <CharakterContainerMobile 
                characterDescription={props.characterDescription}
                characterName={props.characterName}
            />

            <ActorMobile
                actorImage={props.actorImage}
                actorName={props.actorName}
            />
        </div>

    )
})

export default CharakterContentMobile