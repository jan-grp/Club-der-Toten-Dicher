import styled from 'styled-components'
import { useState } from 'react'

import NavigationButton from './navigateButton'

import styles from './card.module.css'

const CardWindow = styled.div`
    background-color: ${props => props.backgroundcolor};
    width: clamp(150px, 400px, 45%);
    padding-top: 15px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
    margin-top: 10px;
`

const Title = styled.div`
    color: ${props => props.textcolor};
    font-weight: bold;
    font-size: 20px;
    display: flex;
    align-self: center;
    margin-left: auto;
    margin-right: auto;
    letter-spacing: 1px;
`
const Content = styled.div`
    color: ${props => props.textcolor};
    align-self: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    margin-left: 15px;
    margin-right: 10px;
`

const NavigationCard = ({
    backgroundColor,
    titleColor,
    buttonColor,
    buttonBackgroundColor,
    buttonBorderColor,
    contentText,
    contentColor,
    contentImage,
    titleText,
    scrollToSection
}) => {

    return(
        <CardWindow
            backgroundcolor={backgroundColor}
        >
            <Title
                textcolor={titleColor}
            >
                {titleText}
            </Title>

            <hr className={styles.titleDevider} />

            <Content 
                textcolor={contentColor}
            >
                {contentText}
            </Content>

            <NavigationButton 
                backgroundColor={buttonBackgroundColor}
                textColor={buttonColor}
                borderColor={buttonBorderColor}
                scrollToSection={scrollToSection}
            />
        </CardWindow>
    )
}

export default NavigationCard