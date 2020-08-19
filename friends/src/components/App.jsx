import React from 'react'
import { Container, Typography, Box, TextField } from '@material-ui/core'
import { Route, Link, Switch } from "react-router-dom"
import Login from './Login'

const App = () => {



    return (
      <Container maxWidth='sm'>
        <Typography variant="h2" align="center">
          The Killer List
        </Typography>
            <Login />
        <Switch>
                
        </Switch>
            
      </Container>
    )
}

export default App
