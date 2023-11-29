import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import style from "./home.module.css"

const Edit = () => {
    let navigate=useNavigate()
    let {abc}=useParams()
    console.log(abc);
    let[name,setName]=useState("")

    let nameA=(x)=>{
        setName(x.target.value)
    }

    let [salary,setSalary]=useState("")

    let salaryA=(x)=>{
        setSalary(x.target.value)
    }

    let [company,setCompany]=useState("")

    let companyA=(x)=>{
        setCompany(x.target.value)
    }

    useEffect(()=>{
        axios.get(`http://localhost:3000/empDetails/${abc}`)
        .then((resp)=>{
            console.log(resp.data);
            setName(resp.data.name)
            setSalary(resp.data.salary)
            setCompany(resp.data.company)
        })
        .catch(()=>{
            console.log('No ');
        })
    },[])

    let edi=(x)=>{
        x.preventDefault()
        let update1={name,salary,company}
        axios.put(`http://localhost:3000/empDetails/${abc}`,update1)
        .then(()=>{
            console.log('Yes updated');
        })
        .catch(()=>{
            console.log('not Updated');
        })

        navigate('/users')
    }
    
  return (
    <div className={style.form}>
      <img src="https://cdn.pixabay.com/photo/2017/06/21/07/33/background-2426328_1280.jpg" alt="uploading" />
      <form action="" id={style.form}>
        <label htmlFor="">Name :</label><input type="text" value={name} onChange={nameA} placeholder='Enter Your New Name' /><br /><br /><br />
        <label htmlFor="">Salary :</label><input type="text" value={salary} onChange={salaryA} placeholder='Enter Updated Salary'/><br /><br /><br />
        <label htmlFor="">Company :</label><input type="text" value={company} onChange={companyA} placeholder='Upade your Company' /><br /><br /><br />
        <input type="button" value='submit' className={style.button} onClick={edi}/>
      </form>
    </div>
  )
}

export default Edit
