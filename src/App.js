/**
 * @Author: Bertan Berker
 * The CSS Design has been inspired by: https://codepen.io/aitchiss/pen/zYKaMGo
 * This React js application uses spoonacular API to get dish-wine pairs for a fancy restaurant :)
 */

import './App.css';
import React from 'react';
import { useNavigate} from 'react-router-dom';


function App() {

  const navigate = useNavigate();

  const navigateToSteak = () => {
    // 👇️ navigate to /Steak
    navigate('/Steak');
  };

  const navigateToSalmon = () => {
    // 👇️ navigate to /Salmon
    navigate('/Salmon');
  };

  const navigateToPizza = () => {
    // 👇️ navigate to /Pizza
    navigate('/Pizza');
  };

  const navigateToCheese = () => {
    // 👇️ navigate to /Cheese
    navigate('/Cheese');
  };

  const navigateToPork = () => {
    // 👇️ navigate to /Pork
    navigate('/Pork');
  };

    return(
      <div class="container">
    
        <div class="container">
          <div class="paper">
            <h1>FIND YOUR DISH - WINE PAIR</h1>
            <p>Choose a food to order: </p>
          </div>
        

      <ul class="numbers" role="list">
        <li class="number" role="listitem">
          <div class="link-wrapper">
            <i class="fab fa-dev" aria-hidden="true"></i>
            <button onClick={navigateToSteak}>STEAK</button>
          </div>
        </li>

    
        <li class="number" role="listitem">
          <div class="link-wrapper">
            <i class="fab fa-dev" aria-hidden="true"></i>
            <button onClick={navigateToSalmon}>SALMON</button>
          </div>
        </li>


        <li class="number" role="listitem">
          <div class="link-wrapper">
            <i class="fab fa-instagram" aria-hidden="true"></i>
            <button onClick={navigateToPizza}>PIZZA</button>
          </div>
        </li>


        <li class="number" role="listitem">
          <div class="link-wrapper">
            <i class="fab fa-github" aria-hidden="true"></i>
            <button onClick={navigateToPork}>PORK</button>
          </div>
        </li>


        <li class="number" role="listitem">
          <div class="link-wrapper">
            <i class="fab fa-codepen" aria-hidden="true"></i>
            <button onClick={navigateToCheese}>CHEESE</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
        
  );
}

export default App;