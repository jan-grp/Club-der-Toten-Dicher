import { forwardRef } from "react"


import styles from "./characters.module.css"

import ActorContainer from "./actor"
import CharakterContainer from "./character"

// eslint-disable-next-line react/display-name
const CharacterContent = ({
    actorName,
    actorImage,
    characterName,
    characterDescription,
}) => {
    
    return(
        <div
            className={styles.window}
        >
            <ActorContainer 
                actorName={actorName}
                actorImage={actorImage}
            />

            <CharakterContainer 
                characterName={characterName}
                characterDescription={characterDescription}
            />
        </div>
    )
}

export default CharacterContent