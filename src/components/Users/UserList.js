import React , {useState} from 'react'

import Card from '../UI/Card'
import classes from './UsersList.module.css'

const UsersList = props => {
    
  
    return (
      <Card className={props.input === true ? classes.users : classes.display}>
        <ul>
          {props.users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.age} years old)
            </li>
          ))}
        </ul>
      </Card>
    );
   
}

export default UsersList ;