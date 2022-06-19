import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useState } from 'react'

import { BiChevronDown, BiChevronUp } from 'react-icons/bi'

const Header = styled(motion.div)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 10px;
    cursor: pointer;
`

const Title = styled.p`
    font-weight: 700;
    font-size: 20px;
`

const Text = styled(motion.p)`
    padding-left: 25px;
    padding-right: 25px;
`

const Line = styled.hr`
    width: 80%;
    color: gray;
    background-color: gray;
`

const description = "Die von uns präsentierte Geschichte verfolgt dieselbe Grundidee, wurde jedoch etwa durch das Anpassen der rezitierten Gedichte und der Musik personalisiert.So soll eine gute Symbiose zwischen dem Klassiker und unserer Interpretation entstehen."

const TheaterDescription = () => {
    
    const [isOpen, setIsOpen] = useState(false)

    return(
        <>
            <Header
                whileTap={{
                    scale: 0.95,
                }}
                onClick={() => setIsOpen(!isOpen)}
            >
                <Title>Unser Theater</Title>
                {
                    isOpen && <BiChevronDown size={25} />
                }
                {
                    !isOpen && <BiChevronUp size={25} />
                }
            </Header>

            <Text>
                { isOpen && description }
            </Text>

            {/* <Line /> */}
        </>
    )
}

export default TheaterDescription