import axios from 'axios';
import React from 'react';
import { useEffect, useState } from "react";
import CardPersonajes from '../../components/CardPersonaje';
import Spinner from '../../components/Spinner';
import './Personajes.css'

const Personajes = () => {
    const [personajes, setPersonajes] = useState([]);
    const [busqueda, setBusqueda] = useState("")

    const obtenerPersonajes = async () => {
        const response = await axios.get('https://rickandmortyapi.com/api/character')
        setPersonajes(response.data.results);
    }
    
    const searcher = (e) => {
        setBusqueda(e.target.value)
    }
    const results = !busqueda ? personajes : personajes.filter((personaje)=> personaje.name.toLowerCase().includes(busqueda.toLowerCase()))

    useEffect(() => {
        obtenerPersonajes()
    }, [])
    
    return (
        <>
            <div className='container mb-4 w-25'>
                <input className="form-control" onChange={searcher} type="text" placeholder="Busqueda de personajes" value={busqueda}/>
            </div>
        <div className='container'>
            <div className='d-flex flex-wrap justify-content-between'>
                {
                personajes.length > 0 ?
                    results.map(personaje => (
                        <CardPersonajes key={personaje.id} {...personaje}/>
                    ))
                    :
                        <Spinner />
                } 
            </div>
        </div>
        </>
    )
}

export default Personajes