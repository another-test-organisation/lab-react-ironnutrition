import './App.css';
import foods from "./foods.json";
import FoodList from './components/FoodList';

function App() {
  return (
    <div>
      <FoodList foods={foods} />
    </div>
  );
}

export default App;
