import React, { useState, useEffect } from 'react';

function Characters() {
  const [characters, setCharacters] = useState([]);
  let page = 1;

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div>
      <ul className="Characters grid grid-cols-1 sm:grid-cols-4 gap-4">
        {characters.map((character) => {
          return (
            <li key={character.id}>
              <div className="mx-auto w-max">
                <img
                  className="rounded-t-sm"
                  src={character.image}
                  alt={character.name}
                />
                <div className=" p-5 dark:text-green-500 text-orange rounded-b-sm font-play bg-blueOpacity dark:bg-gray-700">
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
        className="w-full p-3 my-4 mx-auto h-15 bg-green-600 text-grayLigth font-play"
        onClick={page}
      >
        Load More
      </button>
    </div>
  );
}

export default Characters;
