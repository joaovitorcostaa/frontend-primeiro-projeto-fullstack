import { useProtectedPage } from "../../hooks/useProtectedPage"
import axios from "axios";
import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom";
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

    const [authorName, setAuthor] = useState("")


    const getImage = async() => {
        try {
            const imageData = await axios.get(`https://labeimage-joao-vitor.herokuapp.com/image/${id}`, {
                headers: {
                    Authorization: window.localStorage.getItem("token")
                }
            })
            setImage(imageData.data)
            setAuthor(imageData.data.author)
        } catch (error) {
            console.log(error.message)
        }
    }

    return <DivContainer>
        <Header>
        <Title onClick={() => goToAllImagesPage(history)}>LabeImage</Title>
        </Header>
        {authorName && <DetailsCard 
                    id = {image.id}
                    file = {image.file}
                    title = {image.title}
                    author = {authorName}
                    date = {image.date}
                    collection = {image.collection}
                    tags = {image.tags}
                />}
    </DivContainer>
}