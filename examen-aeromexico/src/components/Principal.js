import {  useState } from "react";
import { Crear } from "./Crear";
import { Card } from './Card'

import characters from '../json/hp-characters.json';

export const Principal = () => {


    const [ state, setState ] = useState(null);

      return (
        <div>
        <div className="flex-container">
            <button className='rectangulo'>
              Favoritos
            </button>
            <button className="rectangulo"onClick={() =>  setState(  !state )  }>Agregar</button>
            {
          state && <Crear />
            }

        </div>
        <br/><br/><br/><br/>
        <h1 className='titulo'>Harry Potter</h1>


        <h2>Seleciona tu filtro</h2>
        
        <br/>
    
        <div className='flex-container'>
          <button className='estudiantes'>Estudiantes</button>
          <button className='estudiantes'>Staff</button>
        </div>

        <div className="container-elements" > 
        {
          characters.map((element) =>  <Card key={ element.name } elementos={element} /> )
        } 
        </div>


    </div>);
}