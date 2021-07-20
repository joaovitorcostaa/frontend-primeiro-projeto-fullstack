import { DivContainer, Form, DivButtons } from './styled';
import React, { useState } from "react"
import { TextField, Button, InputAdornment, IconButton } from "@material-ui/core"
import { Visibility, VisibilityOff } from "@material-ui/icons";
import useForm from "../../hooks/useForm";
import axios from "axios";
import { goToAllImagesPage, goToLoginPage } from "../../routes/coordinator"
import { useHistory } from "react-router-dom";

export const SignupPage = () => {

  const history = useHistory()

  const [visiblePassword, setVisiblePassword] = useState(false);

  const handleClickVisiblePassword = () => {
    setVisiblePassword(!visiblePassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const initialForm = {
    name: "",
    email: "",
    password: "",
    nickname: ""
  }

  const [form, onChange, clear] = useForm(initialForm)

  const signup = async (event) => {
    event.preventDefault()

    const body = {
      name: form.name,
      nickname: form.nickname,
      email: form.email,
      password: form.password
    }

    try {
      const token = await axios.post(`https://labeimage-joao-vitor.herokuapp.com/user/signup`, body)
      window.localStorage.setItem("token", token.data.token)
      clear()
      goToAllImagesPage(history)
    } catch (error) {
      console.log(error.message)
      clear()
    }
  }
  
  return <DivContainer>
    <Form onSubmit = {signup}>
      <TextField
        required
        value={form.name}
        name="name"
        type="text"
        onChange={onChange}
        label="Nome"
        variant="standard"
        color="secondary"
        margin={"normal"}
      />

      <TextField
        required
        value={form.nickname}
        name="nickname"
        type="text"
        onChange={onChange}
        label="Nickname"
        variant="standard"
        color="secondary"
        margin={"normal"}
      />

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
        InputProps={{
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
      <DivButtons>
      <Button color="primary" variant="contained" onClick = {() => goToLoginPage(history)}> Voltar </Button>
      <Button color="primary" type="submit" variant="contained">Enviar</Button>
      </DivButtons>
    </Form>
  </DivContainer>
}