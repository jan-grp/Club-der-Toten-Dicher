import styles from './footer.module.css'
import Link from 'next/link'

// const Footer = () => {

//     return(
//         <div className={styles.window}>
//             <div className={`${styles.spacer} ${styles.layerBlue}`}></div>

//             <div className={styles.content}>
//                 <div className={styles.hambornDiv}>
//                     <div className={styles.hambornDiv}>
//                         <p>(Schloss Hamborn logo)</p>
//                         <a>Schloss Hamborn</a>
//                     </div>        
//                 </div>
//             </div>
//         </div>
//     )
// }

const Footer = () => {

    return(
        <>
            <div className={`${styles.spacer} ${styles.layerBlue}`}></div>

            <div className={styles.window}>
                hallo hier ist der footer
            </div>
        </>
    )
}

export default Footer