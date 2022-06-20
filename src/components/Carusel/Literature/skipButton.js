import { motion } from 'framer-motion'
import { useState } from 'react'
import styled from 'styled-components'
import styles from './selector.module.css'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

const Button = styled(motion.div)`
    background-color: ${props => props.backgroundcolor};
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: fit-content;
    border-radius: 50%;
    padding: 10px;
    cursor: pointer;

    margin-right: ${props => props.marginright || "20px"};
    margin-left: ${props => props.marginleft || "20px"}
`

const SkipButton = ({
    direction,
    onSelection
}) => {
    const [backgroundColor, setBackgroundColor] = useState("rgba(212, 211, 212, 0.2)")

    return(
        <Button
            backgroundcolor={backgroundColor}
            whileHover={{
                backgroundColor: "rgba(252, 252, 252, .9)"
            }}
            whileTap={{
                scale: .8,
                backgroundColor: "rgba(252, 252, 252, .9)"
            }}
            onClick={() => onSelection(direction)}
        >
            {
                direction == "left" && <AiOutlineArrowLeft 
                    marginright={"20px"}
                    color="#fff"
                />
            }
            {direction == "right" && <AiOutlineArrowRight marginleft={"20px"} color="#fff" />}
        </Button>
    )
}

export default SkipButton