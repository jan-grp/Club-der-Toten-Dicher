import styled from 'styled-components'

import ImpressumContent from "../components/impressum/content"
import ImpressumNavbar from "../components/impressum/navbar"

const Window = styled.div`
`

const Impressum = () => {

    return(
        <div>
            <ImpressumNavbar />
            <ImpressumContent />
        </div>
    )
}

export default Impressum