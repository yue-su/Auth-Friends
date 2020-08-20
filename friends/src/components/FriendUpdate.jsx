import React, {useState, useEffect} from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { axiosWithAuth } from "../utils/axiosWithAuth"
import { Box, TextField, Button } from "@material-ui/core"

const FriendUpdate = props => {

    const { id } = useParams()
    const history = useHistory()

    const [item, setItem] = useState({ id:'', name: "", age: "", email: "" })

    useEffect(() => {
        axiosWithAuth()
            .get(`/api/friends/${id}`)
            .then(res => setItem(res.data))
        
    }, [id])

    const updateHandler = (event) => {
      const { name, value } = event.target
      setItem({
        ...item,
        [name]: value,
      })
    }

    const submitHandler = (event) => {
      event.preventDefault()
      axiosWithAuth()
        .put(`/api/friends/${id}`, item)
        .then((res) => {
          console.log(res.data)
          props.setList(res.data)
          history.push("/friendList")
        })
    }

    return (
      <Box>
        <form>
          <TextField
            label="name"
            name="name"
            value={item.name}
            onChange={updateHandler}
          />
          <TextField
            label="age"
            name="age"
            value={item.age}
            onChange={updateHandler}
          />
          <TextField
            label="email"
            name="email"
            value={item.email}
            onChange={updateHandler}
          />
          <Button onClick={submitHandler}>Submit</Button>
        </form>
      </Box>
    )
}

export default FriendUpdate
