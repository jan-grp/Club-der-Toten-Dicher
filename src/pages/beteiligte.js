import styled from 'styled-components'
import Head from 'next/head'

import BeteiligteNavbar from '../components/Beteiligte/navbar'
import Actors from '../components/Beteiligte/actors'
import Leaders from '../components/Beteiligte/leaders'

const Window = styled.div`
    display: flex;
    overflow-x: hidden;
    flex-wrap: wrap;
    padding-bottom: 80px;
`

const Beteiligte = () => {


    return(
        <div>
            <Head>
                <title>
                    Beteiligte
                </title>
            </Head>
            <BeteiligteNavbar />

            <Window>
                <Actors />
                <Leaders />
            </Window>
        </div>
    )
}

export default Beteiligte