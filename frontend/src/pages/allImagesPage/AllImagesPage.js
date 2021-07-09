import React, { useState, useEffect } from "react"
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { Button } from "@material-ui/core";
import { goToCreateImagePage, goToImageDetailsPage } from "../../routes/coordinator";
import { Card } from "../../components/Card/Card"
import { DivContainer } from "./styled";

export const AllImagesPage = () => {
    useProtectedPage()

    useEffect(() => {
        getAllImages()
    }, [])

    const history = useHistory()

    const [images, setImages] = useState([])

    const getAllImages = async() => {
        try {
            const images = await axios.get(`https://backend-fullstack-labenu.herokuapp.com/image/all`, {
                headers: {
                    Authorization: window.localStorage.getItem("token")
                }
            })
            setImages(images.data)
        } catch (error) {
            console.log(error.message)
        }
    }

    const imagesList = images && images.map((image) => {
        return (<Card 
            key = {image.key}
            file = {image.file}
            goToDetailsPage = {() => goToImageDetailsPage(history, image.id)}
            date = {image.date} 
            collection = {image.collection}
            title = {image.subtitle}
        />)
    })

    return <DivContainer>
        <Button color="secondary" type="submit" variant="contained" onClick={() => goToCreateImagePage(history)}>Criar uma imagem</Button>
         { imagesList } 
    </DivContainer>
}