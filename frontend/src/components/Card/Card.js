import {DivContainer, Img, DivInfo} from "./styled"

export const Card = ({key, file, goToDetailsPage, date, collection, title }) => {    
    return <DivContainer key = {key}>
        <Img src={file} onClick = {() => goToDetailsPage()}/>
        <DivInfo>
        <p>{title}</p>
        </DivInfo>
    </DivContainer>
}