import { useEffect, useState } from "react";
import "./css/favoritos.css";

export const Favoritos = () => {
  const favoritos = Object(localStorage);
  const objFavoritos = Object.entries(favoritos);

  return (
    <details>
      <summary>
        <h3 className="favorito">Ver mis Favoritos</h3>
      </summary>
      <ul>
        {objFavoritos.map((favorito, index) => {
          return (
            <li key={index}>
              {favorito[0]} : <a href={favorito[1]}>{favorito[1]}</a>
              <button
                className="button-eliminar"
                onClick={(e) => {
                  localStorage.removeItem(favorito[0]);
                }}
              >
                Eliminar favorito
              </button>
            </li>
          );
        })}
      </ul>
    </details>
  );
};
