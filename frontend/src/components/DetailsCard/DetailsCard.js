import { DivContainer, Img, DivInfo } from "./styled"
import React, {useEffect, useState} from "react"
import axios from "axios"


export const DetailsCard = ({ key, file, date, collection, title, tags, author }) => {
    
    useEffect(() => {
        getAuthor()
    }, [])

    const [authorName, setAuthorName] = useState("") 
    
    const getAuthor = async() => {
        try {
            const authorData = await axios.get(`https://labeimage-joao-vitor.herokuapp.com/user/${author}`, {
                headers: {
                    Authorization: window.localStorage.getItem("token")
                }
            })
            setAuthorName(authorData.data.name)
        } catch (error) {
            console.log(error.message)
        }
    }

    return <DivContainer key={key}>
        <Img src={file} />
        <DivInfo>
            <p>{title}</p>
            <p>Criado em: {date}</p>
            <p>Criado por: {authorName}</p>
            <p>Collection: {collection}</p>
            <p>Tags: {tags} </p>
        </DivInfo>
    </DivContainer>
}