import { useDispatch, useSelector } from "react-redux";
import { AddFavoritos } from "../actions/Actions";




const Card = ({ elementos}) => {
    const b = elementos
    const { name, dateOfBirth, gender, eyeColour, hairColour, image, house, alive, hogwartsStudent } = elementos;

    const dispatch = useDispatch();
    const reducer = useSelector((state) => state.reducer);




    const add = () =>{

        
        if(reducer.data.length <= 4){
      dispatch(AddFavoritos(elementos))}
      else{
        console.log("maximo favoritos alcanzados")
      }
    }
    


    return (<>



        <div className="card-items" >

            <div className={house==="Slytherin" ? "container-img-Slytherin" : house==="Ravenclaw" ? "container-img-Ravenclaw" : house === "Hufflepuff" ? "container-img-Hufflepuff" : "container-img-Gryffindor" } >

                <img className="img"  src={image} alt={name} />

            </div>


            <div className={alive ? "container-info" : "container-info-muerto"}   >

                <div className="titulo1">
                <p className="name-title-responsive"> {name} </p>
                <p className="status">{alive ? "VIVO" : "FINADO"}/{hogwartsStudent ? "ESTUDIANTE" : "STAFF"}</p>
                <button className="buttonAdd" onClick={
                    add
    }>
                    click
                </button>
                    
                </div>
                <div className="titulo2">
                    <h2 className="name-title"> {name} </h2>
                        <p className="status-responsive">{alive ? "VIVO" : "FINADO"}<br/>{hogwartsStudent ? "ESTUDIANTE" : "STAFF"}</p>

                </div>

                <div className="info">
                    <p className="datos">
                    <span>
                        Cumpleaños:</span> {dateOfBirth}
                        
                    </p>
                    <p className="datos"> <span> Género: </span> {gender} </p>
                    <p className="datos"> <span> Color de ojos:</span> {eyeColour} </p>
                    <p className="datos"> <span>Color de pelo:</span> {hairColour} </p>

                </div>
            </div>
        </div>


    </>)
};

export default Card