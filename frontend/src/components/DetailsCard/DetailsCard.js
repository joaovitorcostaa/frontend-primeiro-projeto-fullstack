import { DivContainer, Img, DivInfo, DivDate } from "./styled"
import React, { useEffect, useState } from "react"
import axios from "axios"


export const DetailsCard = ({ key, file, date, collection, title, tags, author }) => {

    useEffect(() => {
        getAuthor()
    }, [])

    const [authorName, setAuthorName] = useState("")

    const getAuthor = async () => {
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
        <DivDate>
            <h3>Autor: {authorName}</h3>
            <p>{date}</p>
        </DivDate>
        <DivInfo>
            <h3>{title}</h3>
            <h3>Coleção: {collection}</h3>
            <h3>Tags: {tags} </h3>
        </DivInfo>
    </DivContainer>
}