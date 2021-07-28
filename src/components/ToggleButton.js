import React from 'react'
import styled from 'styled-components'
import { fontStyle } from '../data/Typography'
import { gradients, colors } from '../data/Colors'

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 5rem;

    @media screen and (min-width: 1440px){
        margin-bottom: 4rem;
    }
`

const Text = styled.span`
    color: ${colors.darkGrayishBlue};
    ${fontStyle}
`

const Toggle = styled.button`
    border: none;
    cursor: pointer;
    background: ${gradients.purpleGradient};
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

export default function ToggleButton({leftText, rightText, monthlyPricing, setMonthlyPricing}) {
    return (
        <Wrapper onClick={() => setMonthlyPricing(!monthlyPricing)}>
            <Text>{leftText? leftText : ""}</Text>
            <Toggle monthlyPricing={monthlyPricing}/>
            <Text>{rightText? rightText : ""}</Text>
        </Wrapper>
    )
}

