export const Crear = ({personaje, conseguirPersonaje, setCrear, setEstudiantesState }) => {
    const titulo_componente = "Crear Personaje";

    const guardarPersonaje = (e, id) => {
      e.preventDefault();

      let target = e.target;

      const personajes_almacenados = conseguirPersonaje();
      const indice = personajes_almacenados.findIndex(personaje => personaje.id === id);

      let personaje_creado = {
        id,
        nombre: target.nombre.value,
        cumpleaños: target.cumpleaños.value,
        color_ojos: target.color_ojos.value,
        color_pelo: target.color_pelo.value,
        genero: target.genero.value,
        posicion: target.posicion.value

      };

      personajes_almacenados[indice] = personaje_creado;

      localStorage.setItem("personaje", JSON.stringify(personajes_almacenados));

      setEstudiantesState(personajes_almacenados)
      setCrear(0);
    }


  return (
    <div className="add">
      <h3 className="title">{titulo_componente}</h3>

      <form onSubmit={ e => guardarPersonaje(e, personaje.id)}>
          Nombre:<input type="text"
                name="nombre"
                className="Nombre_creado"
                defaultValue={personaje.nombre}
          />

          Cumpleaños:<input type="text"
                name="cumpleaños"
                className="Cumpleaños_creado"
                defaultValue={personaje.cumpleaños}
          />

          Color de ojos:<input type="text"
               name="ojos"
               className="Ojos_creado"
               defaultValue={personaje.color_ojos}
          />

          Color de pelo:<input type="text"
             name="pelo"
             className="Pelo_creado"
             defaultValue={personaje.color_pelo}
          />

          Genero: <input type="radio"
             name="genero"
             defaultValue={personaje.genero}
             className="genero_creado"  
              /> 
              
              <input type="radio"
              name="genero"
              defaultValue={personaje.genero}
              className="genero_creado"              
              />  

          Posicion: 
          <input type="radio"
              name="posicion"
              defaultValue={personaje.posicion}
              className="posicion_creada"  
          /> Estudiante
          
          <input type="radio"
             name="posicion"
             defaultValue={personaje.posicion} 
             className="posicion_creada" 
          /> Staff
          
          <input type="submit"
              className="agregar"
              value="Agregar"
          />

      </form>

    </div>
  )
}
