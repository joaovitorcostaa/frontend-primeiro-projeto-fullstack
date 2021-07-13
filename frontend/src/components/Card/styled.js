import styled from "styled-components"
import { primaryColor } from "../../constants/colors"

export const DivContainer = styled.div`
color: white;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    width: 22rem;
    height: 20rem;
    margin: 8px;
    padding: 12px 0px;
    background-color: ${primaryColor};
    border-radius: 12%;
    @media(max-width: 1024px){
        height: 15rem;
    }
`

export const Img = styled.img`
    width: 100%;
    height: 65%;
`

export const DivInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 15%;
    flex-direction: column;
`