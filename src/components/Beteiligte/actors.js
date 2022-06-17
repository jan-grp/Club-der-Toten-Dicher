import styled from "styled-components"
import { motion } from 'framer-motion'

import styles from './actors.module.css'

import { rollen } from './data'

const Actors = () => {

    return(
        <div className={styles.window}>
            <div className={styles.columnTitleDiv}>
                <p className={styles.columnHeadline}>Name</p>
                <p className={styles.columnHeadline}>Rolle</p>
                <p className={styles.columnHeadline}>Sonstiges</p>
            </div>
            {
                rollen.map((person, index) => (
                    <div
                        key={index}
                        className={styles.row}
                    >
                        <p className={styles.person}>{person.name}</p>
                        <p className={styles.rolle}>{person.rolle}</p>
                        {
                            person.gruppen.map((item, index) => (
                                <p 
                                    key={index}
                                    className={styles.group}
                                >
                                    {item}
                                </p>
                            ))
                        }
                    </div>

                ))
            }
        </div>
    )
}

export default Actors