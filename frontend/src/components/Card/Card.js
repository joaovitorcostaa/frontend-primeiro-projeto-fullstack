import {DivContainer, Img} from "./styled"

export const Card = ({key, file, goToDetailsPage, date, collection, title }) => {
    return <DivContainer key = {key }>
        <Img src={file} onClick = {() => goToDetailsPage()}/>
        <p>{collection}</p>
        <p>{title}</p>
    </DivContainer>
}