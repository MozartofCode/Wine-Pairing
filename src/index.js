import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { 
  BrowserRouter,
  Routes,
  Route, 
} from "react-router-dom";

import Steak from './Food/Steak'
import Pork from './Food/Pork'
import Pizza from './Food/Pizza'
import Salmon from './Food/Salmon'
import Cheese from './Food/Cheese'


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
    <Route path= "/" element={<App />} />
    <Route path= "Steak" element={<Steak />} />
    <Route path= "Salmon" element={<Salmon />} />
    <Route path= "Pork" element={<Pork />} />
    <Route path= "Pizza" element={<Pizza />} />
    <Route path= "Cheese" element={<Cheese />} />
    <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
    </Routes>
  </BrowserRouter>
);

