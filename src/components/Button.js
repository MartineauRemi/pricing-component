import styled from "styled-components"
import { fontStyle } from "../data/Typography"
import { colors, gradients } from "../data/Colors"


const Button = styled.button`
    background: ${props => props.primary? 'white' : gradients.purpleGradient};
    border: 1px solid;
    border-color: ${props => props.primary? 'white' : colors.purple};
    border-radius: 6px;
    color: ${props => props.primary?  colors.purple : 'white'};
    font-weight: 700;
    text-transform: uppercase;
    padding: 16px;
    width: 100%;
    cursor: pointer;
    ${fontStyle}
    transition: background .3s, color .3s;

    &:hover{
        background: ${props => props.primary? gradients.purpleGradient : 'white'};
        color: ${props => props.primary? 'white' : colors.purple};
    }
`

export default Button;