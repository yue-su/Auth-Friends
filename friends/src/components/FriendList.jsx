import React, { useState, useEffect } from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import { Container, Typography, Box } from '@material-ui/core'

const FriendList = () => {

    const [list, setList] = useState([])

    useEffect(() => {
        axiosWithAuth()
            .get('/api/friends')
            .then(res => setList(res.data))
            .catch(err => console.log(err))
    },[])

    return (
        <Container maxWidth="sm">
            {
                list.map(item => {
                    return (
                      <Box key={item.id}>
                            <Typography>{item.name}</Typography>
                            <Typography>{item.age}</Typography>
                            <Typography>{item.email}</Typography>
                      </Box>
                    )
                })
            }
        </Container>
    )
}

export default FriendList
