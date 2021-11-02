import React from 'react'
import { useDispatch } from 'react-redux'
import { delteUser, getUsers } from '../redux/actions';
import EditeUser from './EditeUser';

const UserCard = ({el}) => {
    const dispatch = useDispatch();
    return (
        <div>
            <h1>{el.name}</h1>
            <h2>{el.email}</h2>
            <h3>{el.number}</h3>
            <button onClick={()=>{dispatch(delteUser(el._id));dispatch(getUsers())}}>Delete</button>
            <EditeUser el={el}/>
        </div>
    )
}

export default UserCard
