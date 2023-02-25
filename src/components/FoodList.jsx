import { useState } from "react";

import FoodBox from "./FoodBox"
import AddFoodForm from "./AddFoodForm"
import Search from "./Search";

function FoodList(props) {
    const [food, setFood] = useState(props.foods);
    const [display, setDisplay] = useState(props.foods)

    const addNewFood = (newFood)=>{
        const updatedFood = [...food,newFood] 
        const updatedFoodAll = [...display,newFood] 
        setFood(updatedFood)
        setDisplay(updatedFoodAll)
    }


    const filterDisplay = (foodName) => {
      const filteredFoods = food.filter((foodStuff) => 
        foodStuff.name.toLowerCase().includes(foodName.toLowerCase())
      );
      console.log("food name", foodName)
      console.log("filtered foods", filteredFoods)
      setDisplay(filteredFoods);
    };

    const deleteFood = (foodName) => {
        const filteredFoods = food.filter(
          (foodStuff) => foodStuff.name.toLowerCase() !== foodName.toLowerCase()
        );
        const filterDisplay = display.filter(
          (foodStuff) => foodStuff.name.toLowerCase() !== foodName.toLowerCase()
        );
        setFood(filteredFoods);
        setDisplay(filterDisplay);
      };

    return(
        <div className="container">
            <h1 className="centredtitle">Food List</h1>
            <AddFoodForm addNewFood={addNewFood}></AddFoodForm>
            <Search filterDisplay={filterDisplay} />

            display.map((food) => (
              <FoodBox {...food} key={props.foods.name} food={food} deleteFood={deleteFood}></FoodBox>
            ))
        </div>
    )
}

export default FoodList