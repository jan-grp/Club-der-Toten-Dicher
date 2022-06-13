import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

import styles from './navbar.module.css'

import ArtikelBackButton from './backButton'

const ArtikelNavbar = () => {
    const router = useRouter()

    return(
        <div className={styles.window}>
            <ArtikelBackButton 
                onClick={() => router.push("/")}
            />
        
            <p className={styles.title}>Artikel</p>

            <ArtikelBackButton opacity={0}/>
        </div>
    )
}

export default ArtikelNavbar