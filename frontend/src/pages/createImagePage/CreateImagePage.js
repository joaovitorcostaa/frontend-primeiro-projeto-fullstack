import { useProtectedPage } from "../../hooks/useProtectedPage"
import { TextField, Button } from "@material-ui/core"
import { goToAllImagesPage } from "../../routes/coordinator"
import { useHistory } from "react-router"
import { DivContainer, Form } from './styled';
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

    // const createImage = async(event) => {
    //     event.preventDefault()
    //     const body = {}
    //     try {
    //         await axios.post(``, body,  {
    //             headers: {
    //                 Authorization: window.localStorage.getItem("token")
    //             }
    //         })
    //         goToAllImagesPage(history)
    //     } catch (error) {
            
    //     }
    // }

    return <DivContainer>
        <Button color="secondary" type="submit" variant="contained" onClick={() => goToAllImagesPage(history)}>Lista de imagens</Button>
        <Form>
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
            <Button color="secondary" type="submit" variant="contained">Criar Imagem</Button>
        </Form>
    </DivContainer>
}