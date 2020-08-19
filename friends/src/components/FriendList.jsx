import React, { useState, useEffect } from 'react'
import { Container, Typography, Box, Grid, Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'



const FriendList = props => {

    const {list} = props

    const history = useHistory()

    return (
      <Container maxWidth="sm"> 
            <Box>
              {list.map((item) => {
                return (
                  <Box key={item.id} display='flex'>
                        <Typography>{item.name}</Typography>
                        <Button onClick={()=> history.push(`/friendList/${item.id}`)}>Detail</Button>
                        <Button>Delete</Button>
                  </Box>
                )
              })}
            </Box>
      </Container>
    )
}

export default FriendList
