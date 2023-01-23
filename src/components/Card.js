import { useEffect, useRef } from "react";
import "./css/ListCard.css";
import { ModalDiv } from "./ModalDiv";

export const Card = (props) => {
  const { personaje, indexP } = props;

  const ref = useRef();

  let modal;
  useEffect(() => {
    modal = document.getElementsByClassName("modal")[indexP];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [indexP, modal]);

  const handlebtn = () => {
    modal.style.display = "block";
  };
  const handleSpan = () => {
    modal.style.display = "none";
  };
  /*   window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }; */

  const episodesByPerson = personaje.episode.map((episode, index) => {
    return (
      <p key={index} className="episodes">
        {episode.split("/")[5]}
      </p>
    );
  });

  const handleLikeBbutton = (e) => {
    const boton = document.getElementsByClassName("like-button");

    boton.addEventListener("click", (e) => {
      boton.style.opacity = 1;
    });
  };

  return (
    <li className="li-container">
      <img src={personaje.image} alt="foto-personaje" />
      <h3 id="myBtn" onClick={handlebtn}>
        {personaje.name}
      </h3>
      <ModalDiv personaje={personaje} handleSpan={handleSpan} episodesByPerson={episodesByPerson} ref={ref} />
      <img
        id={indexP}
        src="/like.png"
        className="like-button"
        alt="like"
        onClick={(e) => {
          localStorage.setItem(`${personaje.name}`, `${personaje.url}`);
          handleLikeBbutton();
        }}
      />
    </li>
  );
};
