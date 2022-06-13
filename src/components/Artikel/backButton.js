import { motion } from 'framer-motion'
import styled from 'styled-components'

import { AiOutlineArrowLeft } from 'react-icons/ai'

const BackButton = styled(motion.div)`
    background: rgba(255, 255, 255, 0.47);
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.25);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px;
    cursor: ${props => props.opacity !== 0 && "pointer"};
    opacity: ${props => props.opacity};
`

const ArtikelBackButton = ({ 
    onClick,
    opacity
}) => {

    return(
        <BackButton
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}

            opacity={opacity}

            onClick={onClick}
        >
            <AiOutlineArrowLeft size={20}/>
        </BackButton>
    )
}

export default ArtikelBackButton