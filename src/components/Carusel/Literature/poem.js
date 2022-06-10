

import styles from './poem.module.css'

const Poem = ({ text }) => {

    return(
        <div className={styles.window}>
            <div className={styles.header}>
                <p className={styles.title}>Über Wahrheit und Lüge</p>
                <p className={styles.date}>1896</p>
            </div>
            <div className={styles.text}>
                {text}
            </div>
        </div>
    )
}

export default Poem