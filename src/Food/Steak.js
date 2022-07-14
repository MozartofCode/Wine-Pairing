// This is the steak page that fetches information from the api regarding its pairing with wine

import React from 'react';
import "./Steak.css"
import useAPI from '../useAPI';
import wine from './wine.jfif';

function Steak() {
    
    const { data, loading } = useAPI(
        // APIKEY PART IS THE PRIVATE KEY
        "https://api.spoonacular.com/food/wine/pairing?food=steak&apiKey=APIKEY"
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
                Our Selected Wines for Steak
            </h1>
           
                <div class = "pairs">
                    <ul class="list">
                        <li class="list-item-one">{data?.pairedWines[0]}</li>
                        <li class="list-item-two">{data?.pairedWines[1]}</li>
                        <li class="list-item-three">{data?.pairedWines[2]}</li>
                    </ul>
                </div>

            <body class = "description">{data?.pairingText}</body>

        </div>
    );
}

export default Steak;