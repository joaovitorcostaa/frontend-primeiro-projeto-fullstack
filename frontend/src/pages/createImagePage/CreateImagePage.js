import React from "react"
import { useProtectedPage } from "../../hooks/useProtectedPage"
import { TextField, Button } from "@material-ui/core"
import { goToAllImagesPage } from "../../routes/coordinator"
import { useHistory } from "react-router"
import { DivButtons, DivContainer, Form, Header, Title } from './styled';
import useForm from "../../hooks/useForm";
import axios from "axios";

export const CreateImagePage = () => {
    useProtectedPage()

    const history = useHistory()

    const initialForm = {
        title: "",
        file: "",
        tags: "",
        collection: ""
    }

    const [form, onChange, clear] = useForm(initialForm)

    const createImage = async (event) => {
        event.preventDefault()

        const body = {
            title: form.title,
            file: form.file,
            tags: form.tags,
            collection: form.collection
        }

        try {
            await axios.post(`https://labeimage-joao-vitor.herokuapp.com/image/create`, body, {
                headers: {
                    Authorization: window.localStorage.getItem("token")
                }
            })
            goToAllImagesPage(history)
        } catch (error) {
            console.log(error.message)
        }
    }

    return <DivContainer>
        <Header>
            <Title onClick={() => goToAllImagesPage(history)}>LabeImage</Title>
        </Header>
        <Form onSubmit={createImage}>
            <TextField
                required
                value={form.title}
                name="title"
                type="text"
                onChange={onChange}
                label="Título"
                variant="standard"
                color="secondary"
                margin={"normal"}
            />

            <TextField
                required
                value={form.file}
                name="file"
                type="text"
                onChange={onChange}
                label="Arquivo de imagem"
                variant="standard"
                color="secondary"
                margin={"normal"}
            />

            <TextField
                required
                value={form.tags}
                name="tags"
                type="text"
                onChange={onChange}
                label="Tags"
                variant="standard"
                color="secondary"
                margin={"normal"}
            />

            <TextField
                required
                value={form.collection}
                name="collection"
                type="text"
                onChange={onChange}
                label="Coleção"
                variant="standard"
                color="secondary"
                margin={"normal"}
            />

            <DivButtons>
                <Button color="secondary" onClick={() => goToAllImagesPage(history)} variant="contained">Voltar</Button>
                <Button color="secondary" type="submit" variant="contained">Criar Imagem</Button>
            </DivButtons>

        </Form>
    </DivContainer>
}