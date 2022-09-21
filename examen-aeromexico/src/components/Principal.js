import {  useState } from "react";
import { Crear } from "./Crear";
import  Card  from './Card'
import { Favoritos } from "./Favoritos";



import characters from '../json/hp-characters.json';

export const Principal = () => {



    const [ state, setState ] = useState(false);

    const [favoritos, setFavoritos] = useState(false)

    const cerrarModal = () =>{
      setState(false)
    }


      return (
        <div className="body">
        <div className="flex-container">


            <button className='rectangulo1' onClick={()=>{
              setFavoritos(!favoritos)
            }}>
              Favoritos
            </button>



            <button className="rectangulo2"onClick={() =>  setState(  !state )  }>Agregar</button>

            {
          state && <Crear fun={cerrarModal}/>
            }
            {
              favoritos && <Favoritos/>
            }

        </div>
        <br/><br/><br/><br/>
        <h1 className='titulo'>Harry Potter</h1>


        <h2>Seleciona tu filtro</h2>
        
        <br/>
    
        <div className='buttons'>
          <button className='estudiantes'>Estudiantes</button>
          <button className='estudiantes'>Staff</button>
        </div>

        <div className="container-elements" > 
        {
          characters.map((element, index) =>  <Card key={ index } elementos={element}  /> )
        } 
        </div>


    </div>);
}