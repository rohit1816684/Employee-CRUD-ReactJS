import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import style from "./home.module.css"

const Users = () => {
    let [content,setContent]=useState([])
    useEffect(()=>{
        axios.get(`http://localhost:3000/empDetails`)
        .then((resp)=>{
            console.log(resp.data);
            setContent(resp.data)
        })
        .catch(()=>{
            console.log("didnot get the data");
        })
    },[])
    
    let deleteData=(id)=>{
        axios.delete(`http://localhost:3000/empDetails/${id}`)
        window.location.reload('/users')
    }
    console.log(content);
  return (
    <div className={style.card}>
        {content.map((x)=>{
            return(
                <div id={style.card}>

                    <table border={4}>
                    <th colSpan={2}> <h1 id={style.head}>ID : {x.id}</h1></th>
                    <tr><td>Name:</td><td>{x.name}</td></tr>
                    <tr><td>Salary:</td><td>{x.salary}</td></tr>
                    <tr><td>Company:</td><td>{x.company}</td></tr>
                    <tr><td><Link to={`/edit/${x.id}`}>Edit</Link></td>
                    <td id={style.del} onClick={()=>{deleteData(x.id)}}>Delete</td>
                    </tr>
                    </table>

                </div>
            )
        })}
      
    </div>
  )
}

export default Users
