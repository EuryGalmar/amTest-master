import React, { useEffect, useState } from "react"

function useStaff() {

	const [staff, setStaff] = useState([])

	useEffect(() => {
		fetch("./json/hp-staff.json")
		.then(response => response.json())
		.then(datos => {
			setStaff(datos)
		})
	}, [])

	return staff
}

export default function Staff() {

	const staff = useStaff()

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
            staff.map (staff =>(
                <div className="tarjeta" key={staff}>
                    <div className="estado">{staff.alive}</div>
                    <div className="tipo">{staff.hogwartsStudent}</div>
                    <img className="Imagen">{staff.image}</img>
                    <h2 className="Nombre">{staff.name}</h2>
                    <ul className="datos">
                        <li>{staff.dateOfBirth}</li>
                        <li>{staff.gender}</li>
                        <li>{staff.eyeColour}</li>
                        <li>{staff.hairColour}</li>
                    </ul>
                </div>
                
            ))
        }

</div>

)

}

