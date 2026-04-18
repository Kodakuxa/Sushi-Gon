import React, { useRef, useState } from 'react'
import classes from './Login.module.css';
import sushiPortada from '../../assets/logo.jpg';
import PerfilLogo from '../Platillos/PerfilLogo';
import InputL from '../UI/InputL';

const Login = (props) => {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const [errorUsername, setErrorUsername] = useState(false);
  const [errorMsgUsername, setErrorMsgUsername] = useState(null);

  const [errorPassword, setErrorPassword] = useState(false);
  const [errorMsgPassword, setErrorMsgPassword] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    const username = usernameRef.current?.value?.trim();
    const password = passwordRef.current?.value?.trim();

    // Reset errors
    setErrorUsername(false);
    setErrorMsgUsername(null);
    setErrorPassword(false);
    setErrorMsgPassword(null);

    let hasError = false;
    if (!username) {
      setErrorUsername(true);
      setErrorMsgUsername('* campo requerido');
      hasError = true;
    }
    if (!password) {
      setErrorPassword(true);
      setErrorMsgPassword('* campo requerido');
      hasError = true;
    }

    if (hasError) return;

    console.log('Login submit', { username, password });
  }

  return (
    <>
      <PerfilLogo />
      <div className={classes.main}>
        <div className={classes['sub-main']}>
          <div>
            <div className={classes.imgs}>
              <div className={classes['container-image']}>
                <img src={sushiPortada} alt="profile" className={classes.profile} />
              </div>
            </div>
            <form onSubmit={submitHandler}>
              <h1>Iniciar sesión</h1>
              <InputL id="username" placeholder="Correo Electronico" ref={usernameRef} errors={errorMsgUsername} onChange={() => { if (errorUsername) { setErrorUsername(false); setErrorMsgUsername(null); } }} />
              <InputL id="password" placeholder="Contraseña" type="password" ref={passwordRef} errors={errorMsgPassword} onChange={() => { if (errorPassword) { setErrorPassword(false); setErrorMsgPassword(null); } }} />

              <div className={classes['login-button']}>
                <button className={classes.button}>Iniciar sesión</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
