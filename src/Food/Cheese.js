// This is the cheese page that fetches information from the api regarding its pairing with wine

import React from 'react';
import "./Cheese.css"
import useAPI from '../useAPI';
import wine from './wine.jfif';

function Cheese() {
    
    const { data, loading } = useAPI(
        // APIKEY PART IS THE PRIVATE KEY
        "https://api.spoonacular.com/food/wine/pairing?food=cheese&apiKey=APIKEY"
      );

    if (loading) return (
        
        <div>
            <img class = "wine" src={wine} alt="wine" />
            <h1 class = "loading"> LOADING . . .</h1>
        </div>

    );

    return (
        <div>

            <h1 class = "header">
                Our Selected Wines for Cheese
            </h1>

            <body class = "description">{data?.pairingText}</body>

        </div>
    );

}

export default Cheese;