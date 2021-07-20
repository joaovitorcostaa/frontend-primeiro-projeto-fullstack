import React, { useState, useEffect } from "react"
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { Button, Menu, MenuItem } from "@material-ui/core";
import { goToCreateImagePage, goToImageDetailsPage, goToLoginPage } from "../../routes/coordinator";
import { Card } from "../../components/Card/Card"
import { DivContainer, Header, DivCards, Title, DivButtons, DivAdd, DivButton } from "./styled";
import MenuIcon from '@material-ui/icons/Menu';
import AddCircleIcon from '@material-ui/icons/AddCircle';

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
            const images = await axios.get(`https://labeimage-joao-vitor.herokuapp.com/image/all`, {
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
            key={image.id}
            file={image.file}
            goToDetailsPage={() => goToImageDetailsPage(history, image.id)}
            title={image.title}
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
                <MenuIcon color="secondary" onClick={handleClick} />
                <Menu
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}>
                    <MenuItem onClick={() => logout()}> Logout </MenuItem>
                    <MenuItem onClick={() => goToCreateImagePage(history)}> Criar Imagem </MenuItem>
                </Menu>
            </DivButtons>
            <DivButton>
                <Button color="secondary" type="submit" variant="text" onClick={() => logout()} > Logout </Button>
            </DivButton>
        </Header>
        <DivCards>
            {imagesList}
        </DivCards>
        <DivAdd>
            <AddCircleIcon style={{ fontSize: 60 }} color="primary" onClick={() => goToCreateImagePage(history)}/>
        </DivAdd>
    </DivContainer>
}