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
                  <Box key={item.id} display='flex' justifyContent='space-between'>
                        <Typography>{item.name}</Typography>
                        <Button onClick={()=> history.push(`/friendList/${item.id}`)}>Detail</Button>
                  </Box>
                )
              })}
            </Box>
            <Box>
                <Button color='primary' onClick={()=>history.push('/friend/create')}>Add a new friend</Button>
            </Box>
      </Container>
    )
}

export default FriendList
