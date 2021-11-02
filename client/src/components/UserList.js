import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../redux/actions'
import UserCard from './UserCard'

const UserList = () => {

    const {users,isLoading} = useSelector(state => state)
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getUsers())
    }, [])
   
    return (
        <div>
            {isLoading?<h1>Loading...</h1>:
                users.map((el,i)=><UserCard el={el} key={i}/>)
            }
        </div>
    )
}

export default UserList
