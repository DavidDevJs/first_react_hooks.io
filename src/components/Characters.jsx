import React, { useState, useEffect } from 'react';

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  const url = `https://rickandmortyapi.com/api/character/?page=${page}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  });

  return (
    <div>
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
                <div className="p-5 rounded-b-sm dark:text-green-500 text-orange font-play bg-blueOpacity dark:bg-gray-700">
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
