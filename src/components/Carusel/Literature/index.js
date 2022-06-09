import Image from 'next/image'

import styles from "./literatur.module.css"

import nietzsche from "../../../public/Images/Poets/Nietzsche.jpg"

const LiteratureContent = () => {

   return(
       <div className={styles.window}>
            <div className={styles.spacerTop} />

            <div className={styles.content}>
                <div className={styles.poetDev}>
                    <Image 
                        src={nietzsche} 
                        alt="nietzscg"
                        width={300}
                        height={300}
                        className={styles.image}
                    />

                    <label className={styles.poetName}>Friedrich W. Nietzsche</label>
                </div>
            </div>

            
       </div>
   ) 
}

export default LiteratureContent;