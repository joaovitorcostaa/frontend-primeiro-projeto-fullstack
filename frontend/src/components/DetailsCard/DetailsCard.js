import { DivContainer, Img, DivInfo } from "./styled"

export const DetailsCard = ({ key, file, date, collection, title }) => {
    return <DivContainer key={key}>
        <Img src={file} />
        <DivInfo>
            <p>{title}</p>
            <p>Criado em: 14/07/21</p>
            <p>Criado por: Guiba</p>
            <p>Collection: Verão</p>
            <p>Tags: tag1, tag2</p>
        </DivInfo>
    </DivContainer>
}