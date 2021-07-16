import styled from "styled-components"
import {primaryColor} from "../../constants/colors"

export const DivContainer = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    height: 80px;
    width: 100%;
    background: ${primaryColor};
    color: white;
`

export const Title = styled.h1`
    margin: 6px; 
    :hover{
        cursor: pointer;
    }
`