import React from 'react'
import styled from 'styled-components'
import { fontStyle } from './Typography';

export default function ToggleButton({leftText, rightText, monthlyPricing, setMonthlyPricing}) {
    return (
        <Wrapper onClick={() => setMonthlyPricing(!monthlyPricing)}>
            <Text>{leftText? leftText : ""}</Text>
            <Toggle monthlyPricing={monthlyPricing}/>
            <Text>{rightText? rightText : ""}</Text>
        </Wrapper>
    )
}

const purpleGradient = 'linear-gradient(135deg, #A2A7F0 0%, #696EDD 100%)';
const darkGrayishBlue = '#6d708d';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 5rem;
`

const Text = styled.span`
    color: ${darkGrayishBlue};
    ${fontStyle}
`

const Toggle = styled.button`
    border: none;
    cursor: pointer;
    background: ${purpleGradient};
    height: 2rem;
    width: 3.5rem;
    border-radius: 1.5rem;
    position: relative;
    margin: 0 2rem;

    &::after{
        content: '';
        width: 1.5rem;
        height: 1.5rem;
        background: white;
        position: absolute;
        left: ${props => props.monthlyPricing? '1.75rem' : '0.25rem'};
        top: 0.25rem;
        border-radius: 1.5rem;
        transition: all 0.1s ease-in-out;
    }
`
