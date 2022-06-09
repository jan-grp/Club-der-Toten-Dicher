import { useState } from 'react'

import styles from './navbar.module.css'

const Navbar = () => {

    return (
        <div className={styles.window}>
            <p className={styles.logo}>logo</p>
            <p className={styles.title}>Club der Toten Dichter</p>
            <p />
        </div>
    )
}

export default Navbar