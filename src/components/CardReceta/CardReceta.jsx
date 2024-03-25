import './CardReceta.css'

const CardReceta = ({name, ingrds, time}) => {


  return( 
    <div className='container'>
      <h1>{name}</h1>
      <ul>
        {
          ingrds.map((ingrediente, idx) =>{
            return(
              <li key={idx}>{ingrediente}</li>
            )
          })
        }
      </ul>
      <p>Tiempo: {time}</p>
    </div>
    );
};

export default CardReceta;
