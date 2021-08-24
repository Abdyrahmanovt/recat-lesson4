import React, {useEffect, useState} from 'react';
import axios from "axios";
const PokemonGo = () => {
    const [pokemones,setPokemones] = useState([])

    useEffect(()=>{
        axios('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
            .then(({data}) => console.log(data.pokemon))
    })


   // const start =()=>{
   //
   // }
    return (
        <div>
            <button onClick={'start'}>START</button>

        </div>
    );
};

export default PokemonGo;