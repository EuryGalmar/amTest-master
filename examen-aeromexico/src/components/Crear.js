import { useState } from "react";

export const Crear = () => {

  const [ form] = useState({
    id:"",
    nombre:"",
    cumpleaños:"",
    color_ojos:"",
    color_pelo:"",
    genero:"",
    posicion:"",
    //posicion:""
  })

    const titulo_componente = "Agregar un Personaje";
    const guardarPersonaje = (e, id) => {
      e.preventDefault();

     let target = e.target;

      //const personajes_almacenados = conseguirPersonaje();
      //const indice = personajes_almacenados.findIndex(personaje => personaje.id === id);

      
      let personaje_creado = {
        id,
        nombre: target.nombre.value,
        cumpleaños: target.cumpleaños.value,
        color_ojos: target.color_ojos.value,
        color_pelo: target.color_pelo.value,
        genero: target.genero.value,
        posicion: target.posicion.value

      };
      
      //personajes_almacenados[indice] = personaje_creado;

      //localStorage.setItem("personaje", JSON.stringify(personajes_almacenados));

      //setEstudiantesState(personajes_almacenados)
      //setCrear(0);
    }


  return (<div className="add">
      

      <form className="Form-add" onSubmit={ e => guardarPersonaje(e, form.id)}>
      <h3 className="title">{titulo_componente}</h3>
          Nombre:<input type="text"
                name="nombre"
                className="Nombre_creado"
                defaultValue={form.nombre}
          />

          Cumpleaños:<input type="text"
                name="cumpleaños"
                className="Cumpleaños_creado"
                defaultValue={form.cumpleaños}
          />

          Color de ojos:<input type="text"
               name="ojos"
               className="Ojos_creado"
               defaultValue={form.color_ojos}
          />

          Color de pelo:<input type="text"
             name="pelo"
             className="Pelo_creado"
             defaultValue={form.color_pelo}
          />

          Genero: <input type="radio"
             name="genero"
             defaultValue={form.genero}
             className="genero_creado"  
              /> Mujer 
              
              <input type="radio"
              name="genero"
              defaultValue={form.genero}
              className="genero_creado"              
              /> Hombre

          Posicion: 
          <input type="radio"
              name="posicion"
              defaultValue={form.posicion}
              className="posicion_creada"  
          /> Estudiante
          
          <input type="radio"
             name="posicion"
             defaultValue={form.posicion} 
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
