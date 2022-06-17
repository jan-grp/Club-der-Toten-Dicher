import styled from "styled-components"
import { motion } from 'framer-motion'

import styles from './actors.module.css'

import { rollen } from './data'

// const Actors = () => {

//     console.log(rollen.length)
//     return(
//         <div className={styles.window}>
//             <div>
//                 <p className={styles.columnHeadline}>Schauspieler</p>
//                 {
//                     rollen.map((item, index) => (
//                         <p className={styles.person} key={index}>{item.name}</p>
//                     ))
//                 }
//             </div>
//             <div className={styles.rolleDiv}>
//                 <p className={styles.columnHeadline}>Rolle</p>
//                 {
//                     rollen.map((item, index) => (

//                         <p 
//                             key={index} 
//                             className={styles.rolle}
//                         >
//                             {item.rolle}
//                         </p>
//                     ))
//                 }
//             </div>

//             <div className={styles.gruppenDiv}>
//                 <p className={styles.columnHeadline}>Sonstige</p>
//                 {
//                     rollen.map((item, index) => (
//                         <p>{item.gruppen[0]}</p>
//                     ))
//                 }
//             </div>
//         </div>
//     )
// }

const Actors = () => {

    return(
        <div className={styles.window}>
            <div className={styles.grid}>
                {
                    rollen.map((item, index) => (
                        <p>{item.name}</p>

                    ))
                }
            </div>
        </div>
    )
}

export default Actors