


import styles from './leaders.module.css'

import { leitung } from './data'

const Leaders = () => {

    return(
        <div className={styles.window}>
            {
                leitung.map((person, index) => (
                    <div
                        key={index}
                        className={styles.row}
                    >
                        <p className={styles.role}>{person.role}:</p>
                        <p className={styles.name}>{person.name}</p>
                    </div>

                ))
            }
        </div>
    )
}

export default Leaders