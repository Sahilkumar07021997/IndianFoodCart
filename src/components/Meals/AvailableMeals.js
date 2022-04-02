import React, { Fragment } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Aloo Parantha',
        description: 'potato stuffed Roti served with curd',
        price:50.00,
    },
    {
        id: 'm2',
        name: 'Idli Sabmher',
        description: 'South Indian idli served with sabhar curry',
        price:30.00,
    },
    {
        id: 'm3',
        name: 'Double Sandwich',
        description: 'Vegetable and potato Patty stuffed inside bread served with tomato sauce',
        price:45.00,
    },
    {
        id: 'm4',
        name: 'Rajma Chawal',
        description: 'Kidney beans curry served with Rice',
        price:80.00,
    },
    {
        id: 'm5',
        name: 'chole bhature',
        description: 'stuffed Roti served with Channa curry and salad',
        price:90.00,
    },
    {
        id: 'm6',
        name: 'Momos',
        description: 'stuffed boiled dumplings served with mayonise sauce',
        price:90.00,
    }
]

const AvailableMeals = (props) => {

    const mealsList = DUMMY_MEALS.map((meal)=> (
        <MealItem
            key={meal.id} 
            id={meal.id}
            name={meal.name} 
            description={meal.description} 
            price={meal.price}/>
    ));  //create a list of meals using MealItem component...

    //console.log(mealsList);

    return (
        <section className={classes.meals}>
                <Card>
               <ul>{mealsList}</ul>
                </Card>
        </section>
        
    );
}

export default AvailableMeals;