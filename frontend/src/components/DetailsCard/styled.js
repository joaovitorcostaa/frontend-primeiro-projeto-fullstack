import styled from "styled-components"

export const DivContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    width: 45%;
    height: 70%;
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
`

export const DivInfo = styled.div`
display: flex;
align-items: flex-start;
flex-direction: column;
width: 100%;
`

export const DivDate = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`