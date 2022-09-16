import { useState } from 'react';
import './App.scss';
import { Crear } from "./components/Crear";

const [setState, ] = useState (false);

function App() {

  const crear = () => {
    

    if(crear){
        return (setState) ? <Crear/> : null
    }else{
      return null
    }
  }
  
  return (
    <div>
    <div className="Flex-container">
        <button className='rectangulo'>
          Favoritos
        </button>
        <button className="rectangulo"onClick={() => crear(!setState)}>
          Agregar
        </button>
    </div>
    <br/><br/><br/><br/>
    <h1 className='titulo'>Harry Potter</h1>

    <h2>Seleciona tu filtro</h2>
    
    <br/>

    <div className='flex-container'>
      <button className='estudiantes'>Estudiantes</button>
      <button className='estudiantes'>Staff</button>
    </div>

</div>

  );
  
}

export default App;
