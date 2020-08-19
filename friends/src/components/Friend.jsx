import React, {useEffect, useState} from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { Box, Typography,Button } from '@material-ui/core'

const initialFriend = { id: "", name: "", age: "", email: "" }

const Friend = props => {

    const history = useHistory()

    const [friend, setFriend] = useState(initialFriend)

    const { id } = useParams()

    console.log(id)
    
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
        <Box>
            <Typography>{friend.name}</Typography>
            <Typography>{friend.age}</Typography>
            <Typography>{friend.email}</Typography>
            <Button onClick={()=> history.push('/friendList')}>Back</Button>
            <Button onClick={editHandler}>Edit</Button>
            <Button onClick={deleteHandler}>Delete</Button>
        </Box>
    )
}

export default Friend
