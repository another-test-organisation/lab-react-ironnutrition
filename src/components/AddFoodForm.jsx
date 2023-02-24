import {useState} from 'react'
import { Input } from 'antd';


function AddFoodForm(props){

    const {addNewFood} = props
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(0);
   
    const handleName = e => setName(e.target.value)
    const handleImage = e => setImage(e.target.value);
    const handleCalories = e => setCalories(e.target.value);
    const handleServings = e => setServings(e.target.value);  

    const handleSubmit = (e) => {        // <==  ADD
        e.preventDefault();
        const newFood = { name, image, calories, servings };
        props.addNewFood(newFood)

        console.log("new food: ", newFood);
      
        setName("");
        setImage("");
        setCalories(0);
        setServings(0);
    }
     
    return (
        <div className="AddFood">
        <h4>Add new Food</h4>
    
        <form onSubmit={handleSubmit}>
          <label>New Food: </label>
          <Input type="text" name="name" value={name} onChange={handleName}/>
    
          <label>Link to Picture: </label>
          <Input type="text" name="image" value={image} onChange={handleImage} />
    
          <label>Calories: </label>
          <Input type="number" name="calories" value={calories} onChange={handleCalories} />
    
          <label>Servings: </label>
          <Input type="number" name="servings" value={servings} onChange={handleServings} />
          
          <button type="submit">Add a Foodstuff</button>
        </form>
      </div>
    )
}

export default AddFoodForm