import { primaryColor } from "../../constants/colors"
import styled from "styled-components"

export const DivContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100vh;
    flex-direction: column;
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background: ${primaryColor} ;
    color: white;
`
export const DivCards = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 70%;
`

export const Title = styled.h1`
    margin-left: 6px;
`

export const DivButtons = styled.div`
    margin-right: 6px;
    @media(min-width: 1024px) {
        display: none;
    }
    :hover{
        cursor: pointer;
    }
`

export const DivButton = styled.div`
        margin-right: 6px;
        @media (max-width: 1024px){
        display: none;
    }
`

export const DivAdd = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    @media (max-width: 1024px){
        display: none;
    }
    :hover{
        cursor: pointer;
    }
`