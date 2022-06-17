import styled from 'styled-components'

import ArtikelNavbar from "../components/Artikel/navbar"
import ArtikelContainer from "../components/Artikel/artikelContainer"

import { artikel } from "../components/Artikel/data"

const Window = styled.div`
    padding-bottom: 80px;
`

const Arktikel = () => {
    return(
        <Window>
            <ArtikelNavbar />

            {artikel.map((item, index) => (
                <ArtikelContainer 
                    key={index}
                    artikel={item}
                />
            ))}
        </Window>
    )
}

export default Arktikel