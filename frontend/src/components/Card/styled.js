import styled from "styled-components"

export const DivContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 50%;
    height: 30%;

`

export const Img = styled.img`
    width: 50%;
    height: 65%;
    @media(max-width: 1024px){
        width: 100%;
        height: 90%;
    }
    :hover{
        cursor: pointer;
    }
`