import React, { useState, useEffect } from 'react';
import Country from '../Country/Country';

const Home = () => {
    const [countries, setCountries] = useState([]);
    useEffect(()=>{
        const URL = 'https://restcountries.eu/rest/v2/all' ;
        fetch(URL)
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div>
            <h1>Total Loded Country : {countries.length}</h1>
            {
                countries.map((country,index) =><Country key={index} country={country}></Country>)                
            }

        </div>
    );
};

export default Home;