import React from 'react'
import classes from './ProductosItem.module.css'
import Input from '../../UI/Input'
import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { incrementByOne, increment } from '../../../store/counterSlice';


export const ProductosItemForm = (props) => {
    
    const [amountIsValid, setAmountIsValid] = useState(true);
    const numberInputRef = useRef();
    const dispatch = useDispatch();
    const submitHandler = (event) => {
        event.preventDefault();
        const enteredAmount = numberInputRef.current.value
  
        const amount = +enteredAmount
        if ( amount === 0  ||amount > 5 ||amount < 1) {
        setAmountIsValid(false);
 
        return;
        }

    setAmountIsValid(true);
    props.onAddtoCart(amount);
    
    dispatch(increment(amount));
    }

  return (
    <>
        <form className={classes.form} onSubmit={submitHandler} noValidate>
            <Input label="Monto" ref={numberInputRef}
                input={{
                     id: 'monto',
                     type: 'number', 
                     min: '1', 
                     max: '5', 
                     step: '1', 
                    defaultValue: '1'
                    }} 
                />
            <button type="submit">+ Agregar</button>
        {!amountIsValid &&<p> Por favor ingresar un monto entre 1 y 5. </p>}
        </form>
    </>
  )
}

export default ProductosItemForm;