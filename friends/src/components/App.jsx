import React from 'react'
import {Container, Typography, Box, TextField} from '@material-ui/core'
import Login from './Login'

const App = () => {



    return (
      <Container maxWidth='sm'>
        <Typography variant="h2" align="center">
          The Killer List
        </Typography>
        <Login />
      </Container>
    )
}

export default App
