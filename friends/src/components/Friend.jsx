import React, {useEffect, useState} from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { Box, Typography, Button, ButtonGroup } from '@material-ui/core'

const initialFriend = { id: "", name: "", age: "", email: "" }

const Friend = props => {

    const history = useHistory()

    const [friend, setFriend] = useState(initialFriend)

    const { id } = useParams()
    
    const editHandler = event => {
        event.preventDefault()
    }
    const deleteHandler = event => {
        event.preventDefault()
    }

    useEffect(() => {
        axiosWithAuth()
            .get(`/api/friends/${id}`)
            .then(res => setFriend(res.data))    
    }, [id])

    return (
      <Box display='flex' justifyContent='space-between' my={3}>
        <Box>
          <Typography>{friend.name}</Typography>
          <Typography>{friend.age}</Typography>
          <Typography>{friend.email}</Typography>
        </Box>
        <ButtonGroup>
          <Button onClick={() => history.push("/friendList")}>Back</Button>
          <Button onClick={editHandler} color='primary'>Edit</Button>
          <Button onClick={deleteHandler} color='secondary'>Delete</Button>
        </ButtonGroup>
      </Box>
    )
}

export default Friend
