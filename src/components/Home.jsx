import React from 'react'
import { Link } from 'react-router-dom'
import style from "./home.module.css"

const Home = () => {
  return (
    <section id={style.nav}>
        <Link className={style.link} to='/create'>Create-User</Link>
        <Link className={style.link} to='/users'>Users</Link>
    </section>
  )
}

export default Home
