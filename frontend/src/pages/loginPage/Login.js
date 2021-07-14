import React, {useState} from "react"
import {TextField, Button, InputAdornment, IconButton} from "@material-ui/core"
import { Visibility, VisibilityOff } from "@material-ui/icons";
import useForm from "../../hooks/useForm";
import { DivContainer, Form } from './styled';
import axios from "axios";
import { goToAllImagesPage, goToSignupPage } from "../../routes/coordinator"
import { useHistory } from "react-router-dom";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";

export const LoginPage = () => {
    useUnprotectedPage()

    const history = useHistory()

    const initialForm = {
        email: "",
        password: ""
    }

    const [visiblePassword, setVisiblePassword] = useState(false);

    const handleClickVisiblePassword = () => {
      setVisiblePassword(!visiblePassword);
    };
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    const [form, onChange, clear] = useForm(initialForm)

    const login = async (event) => {
        event.preventDefault()
        try {
            const token = await axios.post(`https://backend-fullstack-labenu.herokuapp.com/user/login`, form)
            clear()
            window.localStorage.setItem("token", token.data.token)
            goToAllImagesPage(history)
        } catch (error) {
            alert("Esse usuário não existe")
            clear()
        }
    }

    return <DivContainer>
        <Form onSubmit = {login}>
        <TextField 
            required
            value={form.email}
            name="email"
            type="text"
            onChange={onChange}
            label="Email"
            variant="standard"
            color="secondary"
            margin={"normal"}
            inputProps={{ pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$" }}
            />
          
        <TextField 
            required
            value={form.password}
            name="password"
            type={visiblePassword ? "text" : "password"}
            onChange={onChange}
            label="Senha"
            variant="standard"
            color="secondary"
            margin={"normal"}            
            InputProps = {{
                endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickVisiblePassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {visiblePassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
                )
            }}
            />
  
        <Button color="primary" type="submit" variant="contained">Enviar</Button>
        <Button color="secondary" type="submit" variant="text" onClick = {() => goToSignupPage(history)}>Não Possui uma conta? clique aqui!</Button>
        </Form>
    </DivContainer>
}