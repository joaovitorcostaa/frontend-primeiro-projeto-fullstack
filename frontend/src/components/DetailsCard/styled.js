import styled from "styled-components"

export const DivContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    width: 45%;
    margin: 8px;
    @media(max-width: 1024px){
        justify-content: space-between;
        flex-direction: column;
        width: 95%;
        height: 60%;
    }
`

export const Img = styled.img`
    width: 100%;
    height: 80%;
    @media(max-width: 1024px){
        width: 100%;
        height: 70%;
    }
    :hover{
        cursor: pointer;
    }
`

export const DivInfo = styled.div`
display: flex;
align-items: center;
flex-direction: column;
width: 100%;
`