import styled from 'styled-components'
import Head from 'next/head'

import ImpressumContent from "../components/impressum/content"
import ImpressumNavbar from "../components/impressum/navbar"

const Window = styled.div`
`

const Impressum = () => {

    return(
        <div>
            <Head>
                <title>Impressum</title>
            </Head>
            <ImpressumNavbar />
            <ImpressumContent />
        </div>
    )
}

export default Impressum