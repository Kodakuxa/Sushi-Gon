import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { addItem, removerItem } from '../../store/cartSlice';
import { incrementByOne, decrementByOne } from '../../store/counterSlice';

const CartItem = (props) => {
      const { name, price, quant, id } = props;

      const dispatch = useDispatch();
      const totalItem = price * quant;

      const onAdd = () => {
        dispatch(addItem({...props, amount: 1}));
        dispatch(incrementByOne(quant))
        }

      const onRemove = () => {
        dispatch(removerItem(id));
        dispatch(decrementByOne(quant))
        }
        return (
        <li className ={classes['cart-item']}>
        <div>
            <h2>{name}</h2>
            <div className={classes.summary}>
                <span className={classes.price}>${price}</span>
                <span>x {quant}</span>
                <span className={classes.amount}>${totalItem}</span>
                </div>
            </div>
            <div className={classes.actions}>
                <button onClick={onRemove}>-</button>
                <button onClick={onAdd}>+</button>
            </div>
        </li>
    );
}

export default CartItem