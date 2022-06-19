import styled from 'styled-components'
import { motion } from 'framer-motion'
import Image from 'next/image'

import SchlossImage from "../../public/Images/schlossHamborn.jpeg"

const Window = styled.div`
    width: clamp(50%, 820px, 90%);
    display: flex;
    margin-left: auto;
    margin-right: auto;
    flex-direction: column;
    padding-bottom: 80px;
`

const Headline = styled.p`
    font-weight: 800;
    font-size: 22px;
`

const Data = styled.div`
    margin-left: 25px;
    color: #757575;
    line-height: 30px;
    margin-top: -10px;
`
const HambornLink = styled(motion.a)`
    color: #248EFF;
`

const ImageDiv = styled.div`
    border-radius: 30px;
    margin-top: 80px;
    border-radius: 35px;
    overflow: hidden;
`

const AufKarteSehen = styled(motion.a)`
    color: #248EFF;
    cursor: pointer;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15px;
`

const ImpressumContent = () => {

    return(
        <Window>
            <Headline>
                Ort
            </Headline>
            <Data>
                Rudolf Steiner Schule Schloss Hamborn <br /> 33178 Borchen 5
            </Data>

            <Headline>
                Kontakt
            </Headline>
            <Data>
                Tel.: 05251/389 116 
                <br /> 
                <HambornLink 
                    href='https://www.schlosshamborn.de/'
                    whileHover={{
                        textDecorationLine: "underline"
                    }}
                    whileTap={{
                        scale: .9
                    }}
                >
                    www.schlosshamborn.de
                </HambornLink>
            </Data>
            
            <ImageDiv>
                <Image 
                    src={SchlossImage}
                    alt="image schloss hamborn"
                    objectFit='cover'
                    priority
                />
            </ImageDiv>

            <AufKarteSehen
                whileHover={{
                    textDecorationLine: "underline"
                }}
                href="https://www.google.com/maps/place/Schloss+Hamborn+1,+33178+Borchen/@51.6622827,8.7711915,18.24z/data=!4m13!1m7!3m6!1s0x47bbb31cd4c5bb65:0x88d2dca02fd3a898!2sSchloss+Hamborn,+33178+Borchen!3b1!8m2!3d51.6622437!4d8.7729716!3m4!1s0x47bbb31d32e74eed:0xcee34bd15cd97269!8m2!3d51.6624174!4d8.7711332"
            >
                Auf der Karte anzeigen
            </AufKarteSehen>

        </Window>
    )
}

export default ImpressumContent