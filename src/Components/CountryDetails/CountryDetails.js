import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CountryDetails.css'

const CountryDetails = () => {
    const {countryName} = useParams()
    const [country, setCountry] = useState({});
    useEffect(()=>{
        const URL = `https://restcountries.eu/rest/v2/name/${countryName}?fullText=true`
        fetch(URL)
        .then(res => res.json())
        .then(data =>setCountry(data[0]))
    },[])
    const {name,capital,region,population,flag,languages} = country
    if(languages){
        var language = languages[0].name + "  "+ languages[0].nativeName
    }
    return (
        <div className="main-data">
            <div>
                <img src={flag} alt=""/>
            </div>
            <div>
                <h2>Country : {name}</h2>
                <h4>Capital : {capital}</h4>
                <h4>Population : {population && population.toLocaleString('en-US')}</h4>
                <h4>Language : {language}</h4>
                <h4>Region : {region}</h4>            
            </div>
        </div>
    );
};

export default CountryDetails;