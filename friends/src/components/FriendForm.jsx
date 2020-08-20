import React, { useState } from 'react'
import { Box, TextField, Button } from '@material-ui/core'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import { useHistory } from 'react-router-dom'

const initialItem = { name: "", age: "", email: "" }

const FriendForm = props => {

    const history = useHistory()

    const [item, setItem] = useState(initialItem)

    const updateHandler = event => {
        const { name, value } = event.target
        setItem({
            ...item,
            [name]: value
        })
    }

    const submitHandler = event => {
        event.preventDefault()
        axiosWithAuth()
            .post('/api/friends', item)
            .then(res => {
                console.log(res.data)
                props.setList(res.data)
                history.push('/friendList')
            })
    }

    return (
        <Box>
            <form>
                <TextField label='name' name='name' value={item.name} onChange={updateHandler} />
                <TextField label='age' name='age' value={item.age} onChange={updateHandler} />
                <TextField label='email' name='email' value={item.email} onChange={updateHandler} />
                <Button onClick={submitHandler}>Submit</Button>
            </form>
        </Box>
    )
}

export default FriendForm
