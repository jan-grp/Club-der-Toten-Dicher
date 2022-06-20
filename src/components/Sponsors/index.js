import styled from 'styled-components'
import React, { forwardRef } from 'react'

const Title = styled.p`
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
`

const Text = styled.p`
    margin-left: 20px;
    margin-right: 10px;
    flex-direction: column;

`

const SponsorWrapper = forwardRef((props, ref) => {


    return(
        <div ref={ref}>
            <Title ref={props.sponsorsScrollRef}>Sponsoren</Title>

            <Text>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </Text>
        </div>
    )
})

export default SponsorWrapper;