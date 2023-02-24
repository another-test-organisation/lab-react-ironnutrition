import { useState } from "react";

import FoodBox from "./FoodBox"
import AddFoodForm from "./AddFoodForm"

function FoodList(props) {
    console.log("props.foods", props.foods)
    const [food, setFood] = useState(props.foods);
    const [foodAll,setFoodAll] = useState(props.foods)

    const addNewFood = (newFood)=>{
        const updatedFood = [...food,newFood] 
        const updatedFoodAll = [...foodAll,newFood] 
        setFood(updatedFood)
        setFoodAll(updatedFoodAll)
        console.log("updated", updatedFood)
    }
    console.log("food", food)

    return(
        <div className="container">
            <h1 className="centredtitle">Food List</h1>
            <AddFoodForm addNewFood={addNewFood}></AddFoodForm>
            <FoodBox key={props.foods.name} food={food}></FoodBox>
        </div>
    )
}

export default FoodList