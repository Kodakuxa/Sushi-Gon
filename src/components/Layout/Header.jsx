import React from 'react'
import classes from './Header.module.css';
import sushiPortada from '../../assets/sushi_portada.jpeg';
import HeaderCartButton from './HeaderCartButton';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <>
    <header className={classes.header}>
        <h1>Sushi-Gon</h1>
        <NavLink to="/login"
          className={({ isActive }) =>
          isActive ? classes['isActive'] : classes['noisActive']}
        >Iniciar Sesión</NavLink>
        <NavLink to="/registrarse"
          className={({ isActive }) =>
          isActive ? classes['isActive'] : classes['noisActive']}
        >Registrarse</NavLink>
        <NavLink to="/menu" className={({ isActive }) =>
            isActive ? classes['isActive'] : classes['noisActive']
          }>Menú</NavLink>
        <HeaderCartButton onClick={props.onShowCart} />
    </header>
    <div className={classes['main-image']}>
        <img src={sushiPortada} alt="Sushi logo" />
    </div>
    </>
  )
}

export default Header