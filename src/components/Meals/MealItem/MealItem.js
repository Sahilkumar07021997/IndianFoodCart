import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';
import { useContext } from 'react';

const MealItem = (props) => {
  //  const random = Math.floor(Math.random()*100);
    const price = `Rs ${props.price.toFixed(2)}`;
  //  console.log(random);
    const cartCtx = useContext(CartContext);  //declaring context

    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    };
    
    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}
                </div>
            </div>
            <div>
                <MealItemForm onAddToCart={addToCartHandler}/>
            </div>
        </li>
    );
}
export default MealItem;