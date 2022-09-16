import React, { useEffect, useState } from "react"


export default function Estudiantes() {

    const [estudiantes, setEstudiantesState] = useState([])

	useEffect(() => {
		fetch("./json/hp-students.json")
		.then(response => response.json())
		.then(datos => {
			setEstudiantesState(datos)
		})
	}, [])


	return (
<div className="tarjeta">
<div className="estado">Estado</div>
<div className="icono">Icono Fav</div>
<div className="tipo">Tipo</div>
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

