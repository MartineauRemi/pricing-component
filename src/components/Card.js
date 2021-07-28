import styled from "styled-components"
import Button from "./shared/Button"

const purpleGradient = 'linear-gradient(135deg, #A2A7F0 0%, #696EDD 100%)';
const veryLightGrayishBlue = 'hsl(240, 78%, 98%)';

const Wrapper = styled.div`
    padding: 2rem;
    background: ${props => props.primary? purpleGradient : "white"};
    border-radius: 0.625rem;
    color: ${props => props.primary? 'white' : 'hsl(232, 13%, 33%)'}
`

const Category = styled.h2`
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 700;
    text-transform: capitalize;
`

const List = styled.ul`
    padding: 0;
`

const ListItem = styled.li`
    list-style-type: none;
    padding: ${props => props.price ? "2rem 0" : "0.75rem 0"};
    font-size: ${props => props.price ? "4.5rem" : "1rem"};
    font-weight: 700;
    line-height: ${props => props.price ? "4.5rem" : "1.75rem"};
    letter-spacing: ${props => props.price ? "-2.16px" : "auto"};
    border-bottom: 1px solid ${props => props.primary? veryLightGrayishBlue : 'rgb(110, 114, 142)'};
`


export default function Card({className, title, price, storage, users, transfert, primary}){
    return (
        <Wrapper className={className} primary={primary}>
            <Category>{title}</Category>
            <List>
                <ListItem price primary={primary}>
                    ${price}
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