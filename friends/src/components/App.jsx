import React, { useState, useEffect } from "react"
import { Container, Typography, Box, TextField } from "@material-ui/core"
import { Route, Link, Switch } from "react-router-dom"
import Login from "./Login"
import FriendList from "./FriendList"
import Friend from "./Friend"
import { axiosWithAuth } from "../utils/axiosWithAuth"
import FriendForm from "./FriendForm"

const App = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => setList(res.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <Container maxWidth="sm">
      <Typography variant="h2" align="center">
        The Killer List
      </Typography>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/friendList" exact>
          <FriendList list={list} />
        </Route>
        <Route path="/friendList/:id">
          <Friend setList={setList} />
        </Route>
        <Route path="/friend/create">
          <FriendForm setList={setList} />
              </Route>
              <Route path='/friend/update'>
                  <FriendUpdate />
              </Route>
      </Switch>
    </Container>
  )
}

export default App
