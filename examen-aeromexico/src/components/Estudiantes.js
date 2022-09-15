import React, { useEffect, useState } from "react"

export const Estudiantes = ({}) => {

	 const [estudiantes, setEstudiantesState] = useState([])

	useEffect(() => {
		fetch("./json/hp-students.json")
		.then(response => response.json())
		.then(datos => {
			setEstudiantesState(datos)
		})
	}, [])

	return estudiantes
}

export default function Estudiantes({setEstudiantesState}) {

	const estudiantes = setEstudiantesState()

	return (
<div className="tarjeta">
<div className="estado">Estado</div>
<div className="icono">Icono Fav</div>
<div className="tipo">Tipo</div>
<img className="Imagen">Imagen</img>
<h2 className="Nombre">Nombre</h2>
    
    <ul className="datos">
            <li>Cumpleaños</li>
            <li>Genero</li>
            <li>Color de ojos</li>
            <li>Color de pelo</li>
    </ul>


        {
            estudiantes.map (estudiantes =>(
                <div className="tarjeta" key={estudiantes}>
                    <div className="estado">{estudiantes.alive}</div>
                    <div className="tipo">{estudiantes.hogwartsStudent}</div>
                    <img className="Imagen">{estudiantes.image}</img>
                    <h2 className="Nombre">{estudiantes.name}</h2>
                    <ul className="datos">
                        <li>{estudiantes.dateOfBirth}</li>
                        <li>{estudiantes.gender}</li>
                        <li>{estudiantes.eyeColour}</li>
                        <li>{estudiantes.hairColour}</li>
                    </ul>
                </div>
                
            ))
        }

</div>

)

}

