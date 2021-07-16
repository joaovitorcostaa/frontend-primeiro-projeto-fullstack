import styled from "styled-components"
import {primaryColor} from "../../constants/colors"

export const DivContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    width: 100%;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 30%;
    height: 80%;
    @media(max-width: 1024px){
        width: 65%;
    }
`

export const Header = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 80px;
    background: ${primaryColor};
    color: white;
`

export const Title = styled.h1`
    margin-left: 6px;
    :hover{
    cursor: pointer;
    }
`