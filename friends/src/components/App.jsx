import React from 'react'
import { Container, Typography, Box, TextField } from '@material-ui/core'
import { Route, Link, Switch } from "react-router-dom"
import Login from './Login'
import FriendList from './FriendList'

const App = () => {

    return (
      <Container maxWidth="sm">
        <Typography variant="h2" align="center">
          The Killer List
        </Typography>
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/friendList">
            <FriendList />
          </Route>
        </Switch>
      </Container>
    )
}

export default App
