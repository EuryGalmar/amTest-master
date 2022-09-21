import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { DeleteFavoritos } from "../actions/Actions";



import { FaRegTrashAlt } from 'react-icons/fa';
import { Button } from 'bootstrap';





export const Favoritos = () => {
  const dispatch = useDispatch();
const reducer = useSelector((state) => state.reducer);




  return (
    <div className='Favoritos'>{
    reducer.data.map((Element, Index) =><div  key={Element.name}> <div className='favorito'>
        <img className='img-favorito' src={Element.image} alt={Element.name}></img>
        <p className='favorito-nombre'>{Element.name}</p>
        <button className='iconButton'  >
        <FaRegTrashAlt />
        </button>
        
    </div>
    <hr/>
    </div>)}
    </div>
  )
}

