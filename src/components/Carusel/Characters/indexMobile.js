import { forwardRef } from "react"


import styles from "./characters.module.css"

import CharakterContainerMobile from "./charakterMobile"
import ActorMobile from "./actorMobile"

// eslint-disable-next-line react/display-name
const CharakterContentMobile = ({
    actorName,
    actorImage,
    characterName,
    characterDescription,
}) => {

    return(

        <div
            className={styles.windowMobile}
        >
            <CharakterContainerMobile 
                characterDescription={characterDescription}
                characterName={characterName}
            />

            <ActorMobile
                actorImage={actorImage}
                actorName={actorName}
            />
        </div>

    )
}
export default CharakterContentMobile