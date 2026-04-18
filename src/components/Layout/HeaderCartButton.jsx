import React, { useState, useEffect } from 'react'
import classes from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'
import { useSelector } from 'react-redux';

const HeaderCartButton = (props) => {
  const [ btnIsHighLighted, setBtnIsHighLighted ] = useState(false);
  const value = useSelector(state => state.counter.initialValue);
  const items = useSelector(state => state.cart.items);

  const btnClasses = `${classes.button} ${btnIsHighLighted ? classes.bump : ''}`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighLighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighLighted(false);
    }, 300);
  }, [items]);
  return (
    <>
      <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
            </span>
        <span className={classes.badge}> {value} </span> 
      </button>
    </>
  )
}

export default HeaderCartButton