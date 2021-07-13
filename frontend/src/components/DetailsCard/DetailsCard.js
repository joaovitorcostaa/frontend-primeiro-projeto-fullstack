import {DivContainer, Img, DivInfo} from "./styled"

export const Card = ({key, file, goToDetailsPage, date, collection, title }) => {
    return <DivContainer key = {key }>
        <DivInfo>
        <p>{collection}</p>
        <p>{title}</p>
        </DivInfo>
        <Img src={file} onClick = {() => goToDetailsPage()}/>
    </DivContainer>
}