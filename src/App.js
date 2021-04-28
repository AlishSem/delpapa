import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap'
import MenuComponent from "./components/MenuComponent"
import {DISHES} from './shared/dishes'
import { useState } from 'react'

function App() {
  const [dishes, setDishes] = useState(DISHES)


  return (
    <div>
      <Navbar dark color = "primary"> 
        <div className = "container">
          <NavbarBrand href = "/"> Del Papa </NavbarBrand>
        </div>
      </Navbar>
      <MenuComponent dishes = {dishes}/>
    </div>
  );
}

export default App;
