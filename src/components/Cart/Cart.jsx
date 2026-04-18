import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const Cart = (props) => {
    const items = useSelector(state => state.cart.items);
    const total = useSelector(state => state.cart.total);
    const cantItems = items.length;
    const hasItems = cantItems > 0;

    const cartItems = <ul className={classes['cart-items']}>{items.map(item => 
    <CartItem 
        key = {item.id}
        id = {item.id}
        name={item.name}
        price={item.price}
        quant={item.quant}
    />
    )}</ul>;
        return (
    <Modal onClose={props.onClose}>
        <>
            {cartItems}
            <div className={classes.total}>
                <span>C. Total</span>
            </div>
                <span>{total.toFixed(2)}</span>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Cerrar</button>
                { hasItems && <button className={classes.button}>Ordenar</button> }
            </div>
        </>
    </Modal>
  )
}

export default Cart;