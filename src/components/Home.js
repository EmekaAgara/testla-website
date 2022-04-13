import React from 'react'
import Section from './Section'
import styled from "styled-components"

function Home() {
  return (
    <Container>
        <Section
            title="Model S"
            description="Order online for Touchless Delivery"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
            backgroundImg="model-s.jpg"
            
        />


        <Section 
            title="Model Y"
            description="Order online for Touchless Delivery"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
            backgroundImg="model-y.jpg"
        
        />


        <Section 
            title="Model 3"
            description="Order online for Touchless Delivery"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
            backgroundImg="model-3.jpg"
        
        />


        <Section 
            title="Model X"
            description="Order online for Touchless Delivery"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
            backgroundImg="model-x.jpg"
        
        />
        <Section
            title="Lowest Cost Solar Panels in America"
            description="Money-back guarantee"
            backgroundImg="Solar-panel.jpg"
            leftBtnText="Order now"
            rightBtnText="Learn more"

        />

        <Section
            title="Solar For New Roofs"
            description="Solar Roof Costs Less Than a New Solar Panel"
            backgroundImg="Solar-roof.jpg"
            leftBtnText="Order now"
            rightBtnText="Learn more"

        />

        <Section
            title="Accessories"
            description=""
            backgroundImg="accessories.jpg"
            leftBtnText="Shop now"
        />

    </Container>
  )
}

export default Home

const Container = styled.div`
height: 100vh;
`