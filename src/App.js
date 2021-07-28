import styled from 'styled-components'
import "./App.css"
import React, { useState } from 'react'
import Card from './components/Card'
import { pricings } from './data/pricings'
import ToggleButton from './components/ToggleButton'
import { colors } from './data/Colors'
import topBg from './images/bg-top.svg'
import bottomBg from './images/bg-bottom.svg'

const PRIMARY_CARD_TITLE = 'Professional'

const Title = styled.h1`
    z-index: 2;
    text-align: center;
    font-size: 2rem;
    line-height: 2.5rem;
    margin-bottom: 2.5rem;
    color: ${colors.darkGrayishBlue};
  `

const Wrapper = styled.section`
  height: 100%;
  min-height: 100vh;
  padding: 4rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media screen and (min-width: 1440px){
    padding: 0;
    justify-content: center;
  }
`
const CardsContainer = styled.section`
  z-index: 2;
  max-width: 65.625rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1023px){
    .card:not(:last-child){
      margin-bottom: 2rem;
    }
  }

  @media screen and (min-width: 1024px){
    flex-direction: row;
  }
`

const TopBg = styled.div`
  background: url(${topBg});
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1;
  width: 375px;
  height: 658px;

  @media screen and (max-width: 767px){
    left: auto;
    right: -200px;
    height: -150px;
  }
`

const BottomBg = styled.div`
  background: url(${bottomBg});
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 1;
  width: 353px;
  height: 304px;

  @media screen and (max-width: 600px){
    display: none;
  }
`

function App() {
  const [monthlyPricing, setMonthlyPricing] = useState(true)

  return (
    <div className="App">
      <TopBg />
      <BottomBg />
      <Wrapper>
        <Title>Our pricing</Title>
        <ToggleButton
          leftText='Annually'
          rightText='Monthly'
          monthlyPricing={monthlyPricing}
          setMonthlyPricing={setMonthlyPricing}
          />

        <CardsContainer>
          {pricings.map((pricing, index) => {
            return (
                <Card
                  key={index}
                  className='card'
                  title={pricing.title}
                  price={monthlyPricing? pricing.price.monthly : pricing.price.annually}
                  storage={pricing.storage}
                  users={pricing.users}
                  transfert={pricing.transfert}
                  primary={pricing.title === PRIMARY_CARD_TITLE? true : false}/>)}
          )}
        </CardsContainer>
      </Wrapper>
    </div>
  );
}

export default App;
