import React from 'react'
import './CardPersonaje.css'

const CardPersonaje = (props) => {
    const {image, name, species, status, gender, origin} = props;
    return (
        <div className="card mb-3" style={{width: "18rem"}}>
            <img src={image} className="card-img-top" alt={name}/>
            <div className="card-body">
                <h5 className="card-title mb-3">{name}</h5>
                <p className="card-text">{species}</p>
                <p className="card-text">{gender}</p>
                <p className="card-text">Origen: {origin.name}</p>
                <p className="card-text">Estado: {status === "Alive" ? "Vivo" : status === "unkown" ? "desconocido" : "muerto"}</p>
                {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
            </div>
        </div>
        // <div>
        //     <img src={props.image} alt={props.name}/>
        //     <p className='nombrePersonaje'>{props.name}</p>
        //     <p>Especie: {props.species}</p>
        //     <p>Estado: {props.status === "Alive" ? "Vivo" : props.status === "unkown" ? "desconocido" : "muerto"}</p>
        // </div>
    )
}

export default CardPersonaje