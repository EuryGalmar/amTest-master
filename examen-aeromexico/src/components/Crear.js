import React, { useState } from 'react'


export const Crear = ({setEstudiantesState}) => {

    const tituloComponente = "Agregar un Personaje";

    const [ personajeState, setPersonajeState ] = useState ({
      name:'',
      dateOfBirth:'',
      eyeColour:'',
      hairColour:'',
      gender:'',
      hogwartsStudent:'',
      hogwartsStaff:''
    });
  
    const { name, dateOfBirth, eyeColour, hairColour, gender, hogwartsStudent, hogwartsStaff } = personajeState

    const conseguirDatosForm = e =>{
        e.preventDefault();

        let target = e.target;
        let name = target.name.value;
        let dateOfBirth = target.dateOfBirth.value;
        let eyeColour = target.eyeColour.value;
        let hairColour = target.hairColour.value;
        let gender = target.gender.value;
        let hogwartsStudent = target.hogwartsStudent.value;
        let hogwartsStaff = target.hogwartsStaff.value;

        let agregar = {
          id: new Date().getTime(),
          name,
          dateOfBirth,
          eyeColour,
          hairColour,
          gender,
          hogwartsStudent,
          hogwartsStaff,
        };

        setPersonajeState(agregar);

        setPersonajeState(elementos => {
          return [...elementos, agregar];
        })
    }

  return (
    <div className="add">
      <h2 className="title">{tituloComponente}</h2>

      <form onSubmit={conseguirDatosForm}>
          Nombre:<input type="text"
                id="name"
                name="name"
                placeholder="Nombre"
          />

          Cumpleaños:<input type="text"
                id="cumpleaños"
                dateOfBirth="cumpleaños"
                placeholder="Cumpleaños"
          />

          Color de ojos:<input type="text"
                id="color de ojos"
                eyeColour="color de ojos"
                placeholder="Color de Ojos"
          />

          Color de pelo:<input type="text"
                id="color de pelo"
                hairColour="color de pelo"
                placeholder="Color de pelo"
          />

          Genero: <input type="radio"
              id="genero"
              gender="genero"/> <input type="radio"
              id="genero"
              gender="genero"/>  

          Posicion: 
          <input type="radio"
              id="posicion"
              hogwartsStudent="posicion"
          /> Estudiante
          
          <input type="radio"
              id="posicion"
              hogwartsStaff="posicion"
          /> Staff
          
          <input type="submit"
                id="save"
                value="Guardar"
          />

      </form>

    </div>
  )
}
