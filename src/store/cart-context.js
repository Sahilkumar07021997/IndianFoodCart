import React from 'react';

const CartContext = React.createContext({  //thats how u give initial value to the context.
    items: [],
    totalAmount: 0,
    addItem: (item) => { } ,
    removeItem: (item) => {
    }
})

export default CartContext;

