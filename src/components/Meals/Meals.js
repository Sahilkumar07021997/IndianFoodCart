import React, { Fragment } from "react";   //make use of Wrapper element Fragment
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

const Meals = () => {
    
    return (
        <Fragment> 
            <MealsSummary />
            <AvailableMeals/>
        </Fragment>
    );
}
export default Meals;