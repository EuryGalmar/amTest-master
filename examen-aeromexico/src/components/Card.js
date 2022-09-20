export const Card = ({ elementos  })=>{
    const { name,dateOfBirth, gender, eyeColour, hairColour, image} = elementos;

    return(<>

          <div className="card-items" >
            <div className="contaienr-img" >
                <img src={image}  alt={name} />
            </div>
            <div className="cotainer-info" >
                <h2 className="name-title"> { name } </h2>
                <h4>
                    Cumpleaños: { dateOfBirth}
                </h4>
                <h4> Género { gender } </h4>
                <h4> Color de ojos: { eyeColour } </h4>
                <h4> Color de pelo: { hairColour } </h4>
                </div>
          </div>
    </>)
};