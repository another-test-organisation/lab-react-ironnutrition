import FoodBox from "./FoodBox"

function FoodList(props) {
    console.log("props.foods", props.foods)
    return(
        <div class="container">
            <h1 class="centredtitle">Food List</h1>
            <FoodBox foods={props.foods}></FoodBox>
        </div>
    )
}

export default FoodList