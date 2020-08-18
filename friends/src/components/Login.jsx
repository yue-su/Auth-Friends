import React,{useState} from 'react'
import { Typography, Box, TextField, Button } from "@material-ui/core"
import {axiosWithAuth} from '../utils/axiosWithAuth'

const Login = props => {

    const [login, setLogin] = useState({ username: '', password: '' })
    
    const updateHandler = event => {
        const { name, value } = event.target
        setLogin({
            ...login,
            [name]:value
        })
        console.log(login)
    }

    const submitHandler = event => {
        event.preventDefault()
        axiosWithAuth()
            .post('/api/login', login)
            .then(res => {
                console.log(res.data)
                localStorage.setItem("token", res.data.payload)
                props.history.push('/friendList')
        }).catch(err => console.log(err.data))
    }

    return (
      <Box my={3}>
        <form>
          <Box display='flex' flexDirection='column' height='300px' justifyContent='space-around'>
            <Typography variant="h6" color="Secondary">
              Login to check your dead list:
            </Typography>
            <TextField
              name="username"
              onChange={updateHandler}
              value={login.username}
              label="username"
              variant="outlined"
            ></TextField>
            <TextField
              type="password"
              name="password"
              onChange={updateHandler}
              value={login.password}
              label="password"
              variant="outlined"
            ></TextField>
            <Button
              variant="contained"
              color="secondary"
              onClick={submitHandler}
            >
              Login
            </Button>
          </Box>
        </form>
      </Box>
    )
}

export default Login
