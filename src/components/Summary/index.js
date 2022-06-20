import React, { forwardRef } from "react"
import styled from 'styled-components'
import { motion } from 'framer-motion'

import MovieDescription from './movie'
import BookDescription from './book'
import TheaterDescription from './theater'

const Window = styled.div`
    display: flex;
    flex-direction: column;
    width: clamp(50%, 800px, 95%);
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
    padding-top: 14px;
    padding-bottom: 14px;
    padding-right: 20px;
    padding-left: 20px;
    border-radius: 20px;
    margin-top: 30px;
`

const Headline = styled.div`
    font-weight: 800;
    font-size: 30px;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
    color: #a2d2ff;
    // background: #F8BF05;
    // background: linear-gradient(to right, #F8BF05 0%, #FC5E0F 100%);
    // -webkit-background-clip: text;
    // -webkit-text-fill-color: transparent;
`

const Text = styled.p`
    margin-top: 0;
    margin-bottom: 10px;
    font-weight: 600;
    font-size: 15px;

    color: #000;
`

const MehrErfahren = styled(motion.a)`

    color: #248EFF;
    cursor: pointer;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15px;
`

const summaryText1 = "Der „Club der toten Dichter“ spielt im Jahr 1959 und startet im Welton Internat mit dem Beginn eines neuen Schuljahres und der Vorstellung einer neuen Lehrerin namens Johana Keating, die viele Jahre zuvor selbst Schülerin in diesem Internat war. Mrs. Keating unterrichtet Englisch und sorgt in ihrem Unterricht, den sie auf lockere und witzige Art gestaltet, erstmals für etwas Abwechslung im sonst tristen und konservativen Schulalltag der Schüler."
const summaryText2 = "Neil Perry, einer ihrer Schüler, entdeckt in einem alten Jahrbuch, dass Mrs. Keating ehemals im sogenannten „Club der toten Dichter“ war. Neugierig geworden, fragen Neil und seine Freunde Mrs. Keating über diesen Club aus und beschließen anschließend, ihn erneut aufleben zu lassen. Die Mitglieder trafen sich häufig nachts, um sich gegenseitig Gedichte längst verstorbener Autoren vorzutragen."
const summaryText3 = "In dem Club ging es um Selbstverwirklichung, Poesie und das Freidenken seiner Mitglieder, womit sich auch die Schüler fortan zusammen mit Mrs. Keating regelmäßig beschäftigen. So entdeckt Neil seine Leidenschaft für das Theater und auch seine Freunde Todd Anderson und Knox Overstreet entdecken neue Seiten an sich, ganz zum Missfallen ihrer Eltern und der anderen Lehrer."

// eslint-disable-next-line react/display-name
const Summary = forwardRef((props, ref) => {

    return(
        <Window ref={ref}>
            <Headline>
                {"Worum geht's? 📘"}
            </Headline>

            <Text>
                {summaryText1}
            </Text>

            <Text>
                {summaryText2}
            </Text>

            <Text>
                {summaryText3}
            </Text>

            <MovieDescription />

            <BookDescription />

            <TheaterDescription />

            <MehrErfahren
                href='https://de.wikipedia.org/wiki/Der_Club_der_toten_Dichter'
                whileHover={{
                    textDecorationLine: "underline"
                }}
            >
                ich will noch mehr erfahren
            </MehrErfahren>
        </Window>
    )
})

export default Summary