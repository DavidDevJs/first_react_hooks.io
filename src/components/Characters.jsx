import React, { useState, useEffect, useContext, useReducer } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const initialState = {
  favorites: [],
};

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const { theme } = useContext(ThemeContext);
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

  const url = `https://rickandmortyapi.com/api/character/?page=${page}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  });

  const handleClick = (favorite) => {
    dispatch({ type: 'ADD_FAVORITE', payload: favorite });
  };

  return (
    <div className={`bg-${theme}-300`}>
      {favorites.favorites.map((favorite) => (
        <div className="flex flex-wrap">
          <li
            key={favorite.id}
            className={`font-sans list-none inline-block text-${theme}-400 bg-${theme}-200 rounded-md w-36 m-1 ml-6 p-1 list-inside`}
          >
            {favorite.name}
          </li>
        </div>
      ))}

      <ul className="Characters grid grid-cols-1 sm:grid-cols-4 gap-4">
        {characters.map((character) => {
          return (
            <li key={character.id}>
              {' '}
              <div className="mx-auto w-max">
                <img
                  className="rounded-t-sm"
                  src={character.image}
                  alt={character.name}
                />
                <div
                  className={`bg-${theme}-200 p-5 rounded-b-sm font-play text-${theme}-400`}
                >
                  <div className="flex flex-row-reverse">
                    <button
                      className={`bg-${theme}-400 w-9 h-9 rounded-full shadow-md outline-none`}
                      type="button"
                      onClick={() => handleClick(character)}
                    >
                      <svg
                        className={`text-${theme}-100`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </button>
                  </div>
                  <p>{character.name}</p>
                  <p>{character.species}</p>
                  <p>{character.origin.name}</p>
                  <p>{character.status}</p>
                  <p>{character.location.name}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <button
        onClick={() => setPage(page + 1)}
        className="w-full p-3 mx-auto my-4 bg-green-600 h-15 text-grayLigth font-play"
      >
        Next Page
      </button>

      <button
        onClick={() => setPage(page - 1)}
        className="w-full p-3 mx-auto my-4 bg-yellow-600 h-15 text-grayLigth font-play"
      >
        Previous Page
      </button>
    </div>
  );
}

export default Characters;
