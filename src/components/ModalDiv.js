export const ModalDiv = (props)=>{
    const {personaje, handleSpan, episodesByPerson}=props;
    return(
        <div id="myModal" className="modal">
        <div className="modal-content window">
          <span className="close" onClick={handleSpan}>
            &times;
          </span>
          <h2>{personaje.name}</h2>
          <img src={personaje.image} alt="img.Personaje" />
          <p>Origin: {personaje.origin.name}</p>
          <p>Gender: {personaje.gender}</p>
          <p>Species: {personaje.species}</p>
          <p>Location: {personaje.location.name}</p>
          <p>Status: {personaje.status}</p>
          <div className="container-episodes">
            <p>Episode: </p>
            {episodesByPerson}
          </div>
        </div>
      </div>
    )
}