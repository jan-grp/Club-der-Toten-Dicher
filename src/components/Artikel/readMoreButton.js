import { motion } from 'framer-motion'
import styled from 'styled-components'

import { BiChevronsDown } from 'react-icons/bi'

const ReadMoreButton = styled(motion.button)`
    width: min-content;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5px;
    margin-bottom: 5px;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    border: 0;
    border-radius: 9px;
    color: #057EED;
    font-size: 16px;
    font-weight: 700;
    padding-left: 14px;
    padding-right: 6px;
    padding-top: 8px;
    padding-bottom: 8px;
    cursor: pointer;
    text-height: 0;
    display: flex;
    align-items: center;
    z-index: 1;
`

const ArtikelReadMoreButton = ({ onClick }) => {

    return(
        <ReadMoreButton
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}

            onClick={() => onClick()}
        >
            weiterlesen

            <BiChevronsDown />
        </ReadMoreButton>

    )
}

export default ArtikelReadMoreButton