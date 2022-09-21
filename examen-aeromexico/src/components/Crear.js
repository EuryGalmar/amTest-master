import { useState } from "react";
import { Input } from "./Input";

export const Crear = ({fun}) => {

  const [form] = useState({
    id: "",
    nombre: "",
    cumpleaños: "",
    color_ojos: "",
    color_pelo: "",
    genero: "",
    posicion: "",
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

    <div className="cerrar" onClick={fun}> <span>x</span></div>


    <form className="Form-add" onSubmit={e => guardarPersonaje(e, form.id)}>
      <h3 className="title">{titulo_componente}</h3>


      <div>

        <div className="inputs">

        <Input title={"NOMBRE"} defaultValue={form.nombre}/>

        <Input title={"CUMPLEAÑOS"} defaultValue={form.cumpleaños}/>

      </div>

      <div className="inputs">
        <Input title={"COLOR DE OJOS"} defaultValue={form.color_ojos}/>

        <Input title={"COLOR DE PELO"} defaultValue={form.color_pelo}/>

        </div>

        




          

        <div className="radios">
        <div className="genero">
        <p >GENERO</p>
        
        <div className="radio-input"> 
        
        <div><input type="radio"
          name="genero"
          defaultValue={form.genero}
          className="genero_creado"
        /> Mujer
        </div>

        <div>
        <input type="radio"
          name="genero"
          defaultValue={form.genero}
          className="genero_creado"
        /> Hombre
        </div>

        </div>
        </div>


        <div className="genero">

        <p>POSICION</p>
        <div className="radio-input">
        <div>
        
        <input type="radio"
          name="posicion"
          defaultValue={form.posicion}
          className="posicion_creada"
        /> Estudiante
        </div>

        <div>
        <input type="radio"
          name="posicion"
          defaultValue={form.posicion}
          className="posicion_creada"
        /> Staff
        </div>

      </div>
      </div>

      </div>


        <p className="fotografia">FOTOGRAFIA(input type file)</p>
        <div className="button-save"> 
        <input type="submit"
          className="agregar"
          value="Agregar"
        />
      </div>
      </div>
    </form>

  </div>
  )
}
