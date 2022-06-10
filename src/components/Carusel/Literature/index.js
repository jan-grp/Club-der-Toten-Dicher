import Image from 'next/image'

import styles from "./literatur.module.css"

import nietzsche from "../../../public/Images/Poets/Nietzsche.jpg"

import Poem from './poem'
import PoemSelector from './selector'

const wahrheitUndLüge = "In irgend einem abgelegenen Winkel des in zahllosen Sonnensystemen flimmernd ausgegossenen Weltalls gab es einmal ein Gestirn, auf dem kluge Tiere das Erkennen erfanden. Es war die hochmütigste und verlogenste Minute der 'Weltgeschichte': aber doch nur eine Minute. Nach wenigen Atemzügen der Natur erstarrte das Gestirn, und die klugen Tiere mußten sterben. - So könnte jemand eine Fabel erfinden und würde doch nicht genügend illustriert haben, wie kläglich, wie schattenhaft und flüchtig, wie zwecklos und beliebig sich der menschliche Intellekt innerhalb der Natur ausnimmt. Es gab Ewigkeiten, in denen er nicht war; wenn es wieder mit ihm vorbei ist, wird sich nichts begeben haben. Denn es gibt für jenen Intellekt keine weitere Mission, die über das Menschenleben hinausführte."

const LiteratureContent = () => {

   return(
       <div className={styles.window}>
            <div className={styles.spacerTop} />

            <div className={styles.content}>
                <div className={styles.topRow}>
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

                    <Poem text={wahrheitUndLüge}/>
                </div>

                <PoemSelector 
                    poemArray={["cool", "auch cool", "sehr cool"]} 
                />
            </div>

            
       </div>
   ) 
}

export default LiteratureContent;