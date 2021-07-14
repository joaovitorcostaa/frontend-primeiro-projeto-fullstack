import React, { useState, useEffect } from "react"
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { Button, Menu, MenuItem } from "@material-ui/core";
import { goToCreateImagePage, goToImageDetailsPage, goToLoginPage } from "../../routes/coordinator";
import { Card } from "../../components/Card/Card"
import { DivContainer, Header, DivCards, Title, DivButtons } from "./styled";
import MenuIcon from '@material-ui/icons/Menu';

export const AllImagesPage = () => {
    useProtectedPage()

    useEffect(() => {
        getAllImages()
    }, [])

    const history = useHistory()

    const [images, setImages] = useState([])

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const getAllImages = async () => {
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
            key={image.key}
            file={image.file}
            goToDetailsPage={() => goToImageDetailsPage(history, image.id)}
            date={image.date}
            collection={image.collection}
            title={image.subtitle}
        />)
    })

    const logout = () => {
        localStorage.removeItem("token")
        goToLoginPage(history)
    }

    return <DivContainer>
        <Header>
            <Title>LabeImage</Title>
            <DivButtons>
                <MenuIcon color="primary" onClick={handleClick} />
                <Menu
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}>
                    <MenuItem onClick={() => logout()}> Logout </MenuItem>
                    <MenuItem onClick={() => goToCreateImagePage(history)}> Criar Imagem </MenuItem>
                </Menu>
            </DivButtons>
        </Header>
        <DivCards>
            {imagesList}
        </DivCards>
    </DivContainer>
}