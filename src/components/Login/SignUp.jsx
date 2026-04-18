import React from 'react'
import classes from './Login.module.css';
import sushiPortada from '../../assets/logo.jpg';
import PerfilLogo from '../Platillos/PerfilLogo';

import InputL from '../UI/InputL';
import { useForm } from 'react-hook-form';

const SignUp = () => {
  const { register, handleSubmit, getValues, formState: { errors } } = useForm();

  const usernameValidations = {
    required: '* campo requerido',
    minLength: { value: 3, message: 'Min 3 caracteres' }
  };

  // useForm's getValues will be used to compare passwords

  const onSubmit = (data) => {
    console.log('SignUp submit', data);
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1>Registrarse</h1>
              <InputL
                {...register('username', usernameValidations)}
                id="username"
                placeholder="Nombre de usuario"
                errors={errors.username?.message}
              />
              <InputL
                {...register('email', { required: '* campo requerido', pattern: { value: /^\S+@\S+\.\S+$/, message: 'Correo inválido' } })}
                id="email"
                placeholder="Correo electrónico"
                type="email"
                errors={errors.email?.message}
              />
              <InputL
                {...register('password', { required: '* campo requerido', minLength: { value: 6, message: 'Min 6 caracteres' } })}
                id="password"
                placeholder="Contraseña"
                type="password"
                errors={errors.password?.message}
              />
              <InputL
                {...register('confirmPassword', { required: '* campo requerido', validate: value => value === getValues('password') || 'Las contraseñas no coinciden' })}
                id="confirmPassword"
                placeholder="Confirmar contraseña"
                type="password"
                errors={errors.confirmPassword?.message}
              />

              <div className={classes['login-button']}>
                <button className={classes.button}>Crear cuenta</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;