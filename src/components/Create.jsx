import axios from 'axios'
import React, { useState } from 'react'
import style from "./home.module.css"
import { useNavigate } from 'react-router-dom'

const Create = () => {
  let navigate=useNavigate()
  let [name,setName]=useState()
  let nameA=(x)=>{
    setName(x.target.value)
  }
  let [salary,setSalary]=useState()
  let salaryA=(x)=>{
    setSalary(x.target.value)
  }
  let[company,setCompany]=useState()
  let companyA=(x)=>{
    setCompany(x.target.value)
  }
  let add=(x)=>{
     x.preventDefault()
    let data={name,salary,company}
    axios.post(`http://localhost:3000/empDetails`,data)
    .then(()=>{
      console.log("data added");
      window.location.reload('/create')

    })
    .catch(()=>{
      console.log("data not added");
    })
    navigate('/users')
  }
  return (
    <div className={style.form}>
        <img src="https://c0.wallpaperflare.com/preview/751/2/550/chart-graph-business-finance.jpg" alt="uploading" id={style.img} />
        <form action="" id={style.form}>
            <label htmlFor="">Name :</label><input type="text" value={name} onChange={nameA} placeholder='Enter Employee name'/><br /><br /><br />
            <label htmlFor="">Salary :</label><input type="text" value={salary} onChange={salaryA} placeholder='Enter Employee Salary' /><br /><br /><br />
            <label htmlFor="">Company :</label><input type="text" value={company} onChange={companyA} placeholder='Enter Employee Company'/><br /><br /><br />
            <input type="button" value="Submit" className={style.button} onClick={add}/>
        </form>
    </div>
  )
}
export default Create
