import { motion } from 'framer-motion'
import styled from 'styled-components'
import { FiChevronsDown } from 'react-icons/fi'

const ButtonWindow = styled(motion.div)`
    background-color: ${props => props.backgroundcolor};
    display: flex;
    width: 100px;
    padding: 5px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 12px;
    color: ${props => props.textcolor};
    cursor: pointer;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    border: 1px solid ${props => props.bordercolor};
    font-size: 14px;
`

const NavigationButton = ({ 
    backgroundColor, 
    borderColor, 
    textColor,
    scrollToSection
}) => {


    return(
        <ButtonWindow
            whileHover={{
                scale: 1.2
            }}
            whileTap={{
                scale: .9
            }}
            backgroundcolor={backgroundColor}
            bordercolor={borderColor}
            textcolor={textColor}
            onClick={scrollToSection}
        >
            weiterlesen
            <FiChevronsDown size={14} />
        </ButtonWindow>
    )
}

export default NavigationButton