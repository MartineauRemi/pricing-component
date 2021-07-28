import styled from "styled-components"
import Button from "./Button"
import {colors, gradients} from "../data/Colors"

const Wrapper = styled.div`
    background: ${props => props.primary? gradients.purpleGradient : "white"};
    border-radius: 0.625rem;
    color: ${props => props.primary? 'white' : 'hsl(232, 13%, 33%)'};
    padding: 2rem 1.875rem;
    width: 20.4375rem;

    @media screen and (min-width: 1440px){
        padding: ${props => props.primary ? '3.5rem 2rem' : '2rem'};
    }
`

const Category = styled.h2`
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 700;
    text-transform: capitalize;
`

const List = styled.ul`
    margin-bottom: 2rem;

    li:first-child{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
`

const ListItem = styled.li`
    list-style-type: none;
    padding: ${props => props.price ? "1.5rem 0 2rem 0" : "0.75rem 0"};
    font-size: ${props => props.price ? "2.5rem" : "1rem"};
    font-weight: 700;
    line-height: ${props => props.price ? "3rem" : "1.75rem"};
    letter-spacing: -1.2px;
    border-bottom: 1px solid ${props => props.primary? colors.veryLightGrayishBlue : 'rgb(110, 114, 142)'};
`

const Strong = styled.strong`
font-size: 4.5rem;
line-height: 4.5rem;
letter-spacing: -2.16px;
margin-left: 0.5rem;
`


export default function Card({className, title, price, storage, users, transfert, primary}){
    return (
        <Wrapper className={className} primary={primary}>
            <Category>{title}</Category>
            <List>
                <ListItem price primary={primary}>
                    $<Strong>{price}</Strong>
                </ListItem>
                <ListItem primary={primary}>
                    {storage} Storage
                </ListItem>
                <ListItem primary={primary}>
                    {users} Users Allowed
                </ListItem>
                <ListItem primary={primary}>
                    Send up to {transfert}GB
                </ListItem>
            </List>
            <Button primary={primary}>learn more</Button>
        </Wrapper>
    )
}