import styled from 'styled-components'


const Window = styled.div`
    display: flex;
    flex-direction: column;
`

const Name = styled.p`
    font-size: 20px;
    
`

const SponsorHeader = () => {


    return(
        <Window>
            <Name>Coole Firma</Name>
        </Window>
    )
}

export default SponsorHeader