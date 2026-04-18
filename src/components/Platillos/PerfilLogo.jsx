import React from 'react'
import classes from './PerfilLogo.module.css'
import logo from '../../assets/logo.jpg';

const PerfilLogo = () => {
  return (
    <section className={classes.logo}>
      <img src={logo} alt="Logo Sushi-Gon" />
    </section>
  )
}

export default PerfilLogo