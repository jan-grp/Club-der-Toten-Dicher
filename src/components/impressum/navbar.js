import { motion } from "framer-motion";
import styled from 'styled-components'
import { useRouter } from 'next/router'

import ArtikelBackButton from "../Artikel/backButton";

const Window = styled.div`
    width: 100%;
    height: 50px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    overflow-x: hidden;
    overflow-y: hidden;

    -webkit-backdrop-filter: saturate(180%) blur(20px);
    backdrop-filter: saturate(180%) blur(20px);
    background-color: rgba(255,255,255,0.72);
    border-bottom: #e0e0e0 solid 1px;

    display: flex;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    justify-content: space-between;
`

const Titel = styled.p`
    font-weight: 800;
    font-size: 40px;
    text-align: center;

    color: #898989;
`

const ImpressumNavbar = () => {
    const router = useRouter()
    

    return(
        <Window>
            <ArtikelBackButton 
                onClick={() => router.push("/")}
            />
        
            <Titel>Impressum</Titel>

            <ArtikelBackButton opacity={0}/>    
        </Window>
    )
}

export default ImpressumNavbar