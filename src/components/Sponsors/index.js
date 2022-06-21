import styled from 'styled-components'
import React, { forwardRef } from 'react'
import Image from 'next/image'

import SponsorHeader from './header'

import ThielenMalerbetrieb from '../../public/Sponsoren/ThieleMalerbetrieb.png'
import Linsenmanufaktur from '../../public/Sponsoren/Linsenmanufaktur.png'
import ECuno from '../../public/Sponsoren/e-cuno.png'

const Winodw = styled.div`
    margin-top: 40px;
    padding: 30px;
`

const Title = styled.p`
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
`

const Sponsor = styled.div`
    margin-top: 30px;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
`

const Text = styled.p`
    margin-left: 20px;
    margin-right: 10px;
    flex-direction: column;

`

const SponsorWrapper = forwardRef((props, ref) => {


    return(
        <Winodw ref={ref}>
            <Title ref={props.sponsorsScrollRef}>Sponsoren</Title>

            <Sponsor>
                <Image 
                    src={ThielenMalerbetrieb}
                    alt="Thielen Malerbetrieb add"
                    width={640}
                    height={420}
                    objectFit="cover"
                    priority
                />
            </Sponsor>

            <Sponsor>
                <Image 
                    src={ECuno}
                    alt="Thielen Malerbetrieb add"
                    width={640}
                    height={420}
                    objectFit="cover"
                    priority
                />
            </Sponsor>

            <Sponsor>
                <Image 
                    src={Linsenmanufaktur}
                    alt="Thielen Malerbetrieb add"
                    width={400}
                    height={200}
                    objectFit="cover"
                />
            </Sponsor>
        </Winodw>
    )
})

export default SponsorWrapper;