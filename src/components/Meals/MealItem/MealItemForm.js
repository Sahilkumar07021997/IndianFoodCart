import { useRef ,useState} from 'react';
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input';

const MealItemForm = (props) => {
    
    const [amountisValid, setAmountisValid] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value; //so this will be a String value we convert it into number by using + sign in next line..->
        const enteredAmountNumber = +enteredAmount;

        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            setAmountisValid(false); return;  //if this is invalid!! then just return!!
        }

        props.onAddToCart(enteredAmountNumber);
    };

    

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input ref={amountInputRef}
                label='Amount' input={{
                id: 'amount',
                type: 'number',
                min: '1',
                max: '10',
                step: '1',
                defaultValue:'1',
            }}/>
            <button>+ Add</button>
            {!amountisValid && <p>Please enter a valid amount(1-5)</p>}
        </form>

    );
}
export default MealItemForm;