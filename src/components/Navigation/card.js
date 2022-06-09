import styled from 'styled-components'
import { useState } from 'react'

import NavigationButton from './navigateButton'

import styles from './card.module.css'

const CardWindow = styled.div`
    ackground-color: ${props => props.backgroundcolor}
    width: 200px;
    padding-top: 15px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
    margin-left: 200px;
`

const NavigationCard = ({
    backgroundColor,
    textColor,
    buttonColor,
    buttonBackgroundColor,
    buttonBorderColor
}) => {

    return(
        <CardWindow
            backgroundcolor={backgroundColor}
        >
            <div className={styles.title}>
                Charaktere
            </div>

            <hr className={styles.titleDevider}/>

            <div className={styles.content}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
            </div>

            <NavigationButton 
                backgroundColor={buttonBackgroundColor}
                textColor={buttonColor}
                borderColor={buttonBorderColor}
            />
        </CardWindow>
    )
}

export default NavigationCard