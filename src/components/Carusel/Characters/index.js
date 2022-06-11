import { forwardRef } from "react"


import styles from "./characters.module.css"

import ActorContainer from "./actor"
import CharakterContainer from "./character"

// eslint-disable-next-line react/display-name
const CharacterContent = forwardRef((props, ref) => {
    
    return(
        <div
            ref={ref}
            className={styles.window}
        >
            <ActorContainer 
                actorName={props.actorName}
                actorImage={props.actorImage}
            />

            <CharakterContainer 
                characterName={props.characterName}
                characterDescription={props.characterDescription}
            />
        </div>
    )
})

export default CharacterContent