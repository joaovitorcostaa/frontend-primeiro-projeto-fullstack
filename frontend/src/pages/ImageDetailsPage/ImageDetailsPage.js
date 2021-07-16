import { useProtectedPage } from "../../hooks/useProtectedPage"
import axios from "axios";
import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom";
import { Button } from "@material-ui/core";
import { goToAllImagesPage } from "../../routes/coordinator";
import { DetailsCard } from "../../components/DetailsCard/DetailsCard";
import { DivContainer, Header, Title } from "./styled";

export const ImageDetailsPage = () => {
    useProtectedPage()

    useEffect(() => {
        getImage()
    }, [])

    const history = useHistory()

    const {id} = useParams()

    const [image, setImage] = useState({}) 

    const getImage = async() => {
        try {
            const imageData = await axios.get(`https://backend-fullstack-labenu.herokuapp.com/image/${id}`, {
                headers: {
                    Authorization: window.localStorage.getItem("token")
                }
            })
            setImage(imageData.data)
        } catch (error) {
            console.log(error.message)
        }
    }

    return <DivContainer>
        <Header>
        <Title onClick={() => goToAllImagesPage(history)}>LabeImage</Title>
        </Header>
                <DetailsCard 
                    file = {image.file}
                    title = {image.subtitle}
                />
    </DivContainer>
}