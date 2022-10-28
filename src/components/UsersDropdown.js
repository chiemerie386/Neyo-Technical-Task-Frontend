// import "./Dashboard.css";
import React, { useState } from "react";
import { useQuery } from "react-query"


import {getAllUsers} from "../api/userApi"


const UsersDropDown = ({title}) => {
    const [open, setOpen] = useState(false)
    const {
      data:users
  } = useQuery('users', getAllUsers, {
      select: data => {
        return(data.data)
      }
  })
  
    return (
  <div className="dropdown_container">
  <div className="title_div">
  <h3 className="title"><b>{title}</b></h3>
  <div className="dropdown-icon" onClick={()=>setOpen(!open)}>{">>"}</div>
  </div>
   {open && ( <ul className="list_container">
      {users && users.map((user,id)=>{
        return (
            <div key={user._id} className="user">
                <div className="user-color" style={{backgroundColor:`#${user.colour}`}}></div>
                <div className="user-list-items"> {user.firstName}  {user.lastName}</div>
            </div>
        )
      })}
    </ul>)}
  </div>
    )
  }

export default UsersDropDown