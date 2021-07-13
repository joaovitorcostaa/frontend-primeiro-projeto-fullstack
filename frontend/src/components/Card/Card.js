import {DivContainer, Img, DivInfo} from "./styled"
import { Button } from "@material-ui/core"

export const Card = ({key, file, goToDetailsPage, date, collection, title }) => {
    
    
    return <DivContainer key = {key }>
        <DivInfo>
        <p>{title}</p>
        </DivInfo>
        <Img src={file} />
        <Button color="secondary" type="submit" variant="contained" onClick = {() => goToDetailsPage()}>Ver Detalhes</Button>
    </DivContainer>
}