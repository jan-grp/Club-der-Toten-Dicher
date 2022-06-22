import styled from 'styled-components'
import { useState, useEffect } from 'react'
import Image from 'next/image'

import styles from './artikelContainer.module.css'

import ArtikelReadMoreButton from './readMoreButton'
import ArtikelShowLessButton from './showLoessButton'

const ArtikelText = styled.div`
    font-weight: 700;
    font-size: 20px;
    color: #333333;
    max-height: ${props => props.maxheight || ""};
    margin-top: 34px;

    ${props => props.maxheight && "-webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 100%);"}
    ${props => props.maxheight && "mask-image: linear-gradient(to bottom, black 40%, transparent 100%);"}
`

const ImageDiv = styled.div`
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
`

const ArtikelContainer = ({ artikel }) => {

    const [isBlured, setIsBlured] = useState(false)
    const [maxheight, setMaxheight] = useState("30vh")
    const [collapsable, setCollapsable] = useState(true)

    const showMore = () => {
        setMaxheight("")
        setIsBlured(false)
    }

    const showLess = () => {
        setMaxheight("30vh")
        setIsBlured(true)
    }

    useEffect(() => {
        if(!artikel) return

        if(artikel.text.length < 550) {
            setCollapsable(false)
            setIsBlured(false)
            setMaxheight("")
            return
        }

        if(artikel.blured){
            setMaxheight("30vh")
            setIsBlured(true)
        } else {
            setMaxheight("")
            setIsBlured(false)
        }
    }, [artikel])

    return(
        <div className={styles.window}>
            <div className={styles.artikelName}>
                {artikel && artikel.name}
            </div>

            <div className={styles.autherName}>
                {artikel && artikel.auther}
            </div>

            <ArtikelText
                maxheight={maxheight}
            >
                {artikel && artikel.text}
            </ArtikelText>

            {artikel.image && <ImageDiv>
                <Image 
                    src={artikel.image}
                    width={600}
                    height={400}
                    objectFit="cover"
                />
                </ImageDiv>
            }

            {collapsable && isBlured ? <ArtikelReadMoreButton onClick={showMore}/> : null}
            {collapsable && !isBlured && artikel.blured ? <ArtikelShowLessButton onClick={showLess}/> : null}
        </div>
    )
}

export default ArtikelContainer