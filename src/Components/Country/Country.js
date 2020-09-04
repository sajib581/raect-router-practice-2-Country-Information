import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Country.css';

const Country = (props) => {
    const {name,capital,flag} = props.country;
    const countriesStyle = {
        border : '2px solid lightgrey',
        margin : '10px',
        paddingLeft : '10px',
        borderRadius : '5px',
        paddingBottom : '10px',

    }    
    let history = useHistory()
    const buttonHandeler = () => {
        history.push(`/country/${name}`)
    }
    return (
        <div style={countriesStyle} className="main-style">
            <div>
                <img src={flag} alt=""/>
            </div>
            <div className="details">
                <h3>Country : {name}</h3>
                <h5>Capital : {capital} <Link to={`/country/${name}`}>Show Details</Link></h5>             
                <button onClick={buttonHandeler}>Show Details</button>
            </div>
        </div>
    );
};

export default Country;