import styled from 'styled-components'
import { motion } from 'framer-motion'

import { BiChevronsUp } from 'react-icons/bI'

const ShowLessButton = styled(motion.button)`
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15px;
    color: #057EED;
    font-size: 16px;
    font-weight: 700;
    border: 0;
    background-color: rgba(255,255,255,0);
    cursor: pointer;
    text-height: 0;
    display: flex;
    align-items: center;
    z-index: 1;
`

const ArtikelShowLessButton = ({ onClick }) => {


    return(
        <ShowLessButton
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}

            onClick={() => onClick()}
        >
            weniger anzeigen

            <BiChevronsUp />
        </ShowLessButton>
    )
}

export default ArtikelShowLessButton