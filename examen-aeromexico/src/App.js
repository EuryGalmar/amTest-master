import './App.scss';
import { Crear } from "./components/Crear";
import setEstudiantesState from './components/Estudiantes';

function App() {

  const [setEstudiantesState] = useState([]);

  return (
    <div>
    <div className="Flex-container">
        <div className='rectangulo'>
          Favoritos
        </div>
        <div className="rectangulo">
            <Crear setEstudiantesState={setEstudiantesState}/>
        </div>
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
