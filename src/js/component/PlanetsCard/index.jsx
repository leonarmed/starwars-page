import React from 'react'
import { SpinnerComponent } from '../Spinner/index.jsx'

export const PlanetCard = ({planets}) => {
    return (
        <div className="container-fluid mt-4" style={{maxWidth: '80%'}}>
            <h3 className="text-start" style={{color:'red'}}>Planets</h3>
            <div className="overflow-auto">
                <div className="mt-5 d-flex" style={{width:'2500px'}}>
                    {
                        planets ? (
                            planets.map((planet) => {
                                return(
                                    <div key={planet.uid} className="card mb-3 me-4" style={{minWidth: "300px"}}>
                                        <img src="..." className="card-img-top" alt={`imagen de ${planet.name}`} style={{minHeight:'300px'}} />
                                        <div className="card-body text-start">
                                            <h5 className="card-title">{planet.name}</h5>
                                            <div className="d-flex justify-content-between">
                                                <a href="#" className="btn btn-outline-primary">Learn more!</a>
                                                <a href="#" className="btn btn-outline-warning"><i class="far fa-heart"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        ) 
                    : 
                    <SpinnerComponent />
                    }
                </div>
            </div>
        </div>
    )
}