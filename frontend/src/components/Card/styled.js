import styled from "styled-components"

export const DivContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    width: 42rem;
    height: 22rem;
    margin: 8px;
    padding-top: 2%;
    border-radius: 2%;
    background-color: #f2f2f2;
    box-shadow: 2px 2px 2px 2px #dbdbdb;
    @media(max-width: 1024px){
        height: 18rem;
        width: 95%;
    }
    :hover{
        cursor: pointer;
        box-shadow: 2px 2px 2px #787878;
    }
`

export const Img = styled.img`
    width: 95%;
    height: 75%;
`

export const DivInfo = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 25%;
    margin-left: 5%;
    font-size: 20px;
`