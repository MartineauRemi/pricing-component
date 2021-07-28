import styled from "styled-components"
import { fontStyle } from "./Typography"

const purpleGradient = 'linear-gradient(135deg, #A2A7F0 0%, #696EDD 100%)';
const purple = '#6D72DE';

const Button = styled.button`
    background: ${props => props.primary? 'white' : purpleGradient};
    border: 1px solid;
    border-color: ${props => props.primary? 'white' : purple};
    border-radius: 6px;
    color: ${props => props.primary?  purple : 'white'};
    font-weight: 700;
    text-transform: uppercase;
    padding: 16px;
    width: 100%;
    cursor: pointer;
    ${fontStyle}

    &:hover{
        background: ${props => props.primary? purpleGradient : 'white'};
        color: ${props => props.primary? 'white' : purple};
    }
`

export default Button;