import React from 'react'
import classes from './ProductosItem.module.css'
import ProductosItemForm from './ProductosItemForm';
import { addItem } from '../../../store/cartSlice';
import { useDispatch } from 'react-redux';

const ProductosItem = (props) => {
    const price = `$${props.price.toFixed(2)}`

    const dispatch = useDispatch();

    const addNewCart = (amount) => {
      const item = {
        id: props.id,
        name: props.name,
        price: props.price,
        amount: amount
      }
      dispatch(addItem(item));
    }
  
  return (
    <>
      <li className = {classes.proditem}>
      <div>
        <h3 className= {classes.name}>{props.name}</h3>
        <div className= {classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
        <div>
            <ProductosItemForm id = {props.id} onAddtoCart = {addNewCart}/>
      </div>
      </li>
    </>
  )
}

export default ProductosItem;