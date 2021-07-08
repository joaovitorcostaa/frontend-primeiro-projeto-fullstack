import styled from "styled-components"

export const DivContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 30%;
    @media(max-width: 1024px){
        width: 65%;
    }
`