import axios from 'axios';
import React from 'react'
import { useEffect, useState } from "react";
import CardPersonajes from '../../components/CardPersonaje';
import Spinner from '../../components/Spinner';
import './Personajes.css'

const Personajes = () => {
    const [personajes, setPersonajes] = useState([])

    const obtenerPersonajes = async () => {
        const response = await axios.get('https://rickandmortyapi.com/api/character')
        setPersonajes(response.data.results);
    }

    useEffect(() => {
        obtenerPersonajes()
    }, [])
    
    return (
        <div className='container'>
            <div className='d-flex flex-wrap justify-content-between'>
                {
                personajes.length > 0 ?
                    personajes.map(personaje => (
                        <CardPersonajes key={personaje.id} {...personaje}/>
                    ))
                    :
                        <Spinner />
                } 
            </div>
        </div>
    )
}

export default Personajes