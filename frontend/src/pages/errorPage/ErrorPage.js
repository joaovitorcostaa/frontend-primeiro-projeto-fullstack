import React from "react"
import { DivContainer } from "./styled"
import { Button } from "@material-ui/core"
import { goToAllImagesPage } from "../../routes/coordinator"
import { useHistory } from "react-router-dom"

export const ErrorPage = () => {

    const history = useHistory()

    return (<DivContainer>
        <h1>Está página não existe!</h1>
        <Button variant="contained" color="secondary" onClick={() => goToAllImagesPage(history)} >Voltar</Button>
    </DivContainer>)
}