import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../store/appContext.js'
const urlImage = "https://starwars-visualguide.com/assets/img/characters/"
import { CustomSkeleton } from '../Skeleton'

export const CharacterCard = ({characters}) => {
    const {store, actions} = useContext(Context)
 
    return (
        <div className="container-fluid mb-4" style={{maxWidth: '80%'}}>
            <h3 className="text-start" style={{color:'red'}}>Characters</h3>
            <div className="overflow-auto">
                <div className="mt-5 d-flex" style={{width:'2500px'}}>
                    {
                        characters.length==0 ? <CustomSkeleton cant={3}/> :
                        characters.map((character) => {
                            return(
                                <div key={`${character.uid}-character`} className="card mb-3 me-4" style={{minWidth: "300px"}}>
                                    <img src={`${urlImage}/${character.uid}.jpg`} className="card-img-top" alt={`imagen de ${character.name}`} style={{minHeight:'300px'}}/>
                                    <div className="card-body text-start">
                                        <h5 className="card-title">{character.name}</h5>
                                        <div className="d-flex justify-content-between">
                                            <Link to={`/character/${character.uid}`}>
                                                <div className="btn btn-outline-primary">Learn more!</div>
                                            </Link>
                                            <div className={`btn btn-outline-warning ${actions.isFavorite(`${character.uid}-character`, 'character') && 'active'}`} onClick={()=>{actions.addFavorites(`${character.uid}-character`, character.name, 'character')}}><i className="far fa-heart"></i></div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}