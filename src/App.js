import styled from 'styled-components'
import './App.css'
import React, { useState } from 'react'
import Card from './components/Card'
import { pricings } from './data/pricings'
import ToggleButton from './components/shared/ToggleButton'

const PRIMARY_CARD_TITLE = 'Professional'
const darkGrayishBlue = '#6d708d';

function App() {
  const [monthlyPricing, setMonthlyPricing] = useState(true)

  return (
    <div className="App">
      <Wrapper>
        <Title>Our pricing</Title>
        <ToggleButton
          leftText='Annually'
          rightText='Monthly'
          monthlyPricing={monthlyPricing}
          setMonthlyPricing={setMonthlyPricing}
          />
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
      </Wrapper>
    </div>
  );
}

const Title = styled.h1`
    text-align: center;
    font-size: 2rem;
    line-height: 2.5rem;
    margin-bottom: 2.5rem;
    color: ${darkGrayishBlue};
  `

  const Wrapper = styled.section`
    padding: 4rem 1.5rem;
    height: 100%;
    max-width: 100vw;
    background-color: hsl(240, 78%, 98%);

    .card:not(:last-child){
      margin-bottom: 2rem;
    }
  `

export default App;
