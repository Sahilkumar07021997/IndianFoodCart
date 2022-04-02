import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import React from 'react';
import CartContext from '../../store/cart-context';
import { useContext } from 'react';
/*This Cart component will be rendered as a 
Modal window which will show us the total amount and items ordered!!
*/

const Cart = (props) => {

  const cartCtx = useContext(CartContext);
  const totalAmount = `Rs ${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
       { hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;