import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const changeTheme = (e) => {
    setTheme(e.target.value);
  };

  return (
    <div className={`p-6 bg-${theme}-300`}>
      <h1 className={`text-6xl text-center font-bebas text-${theme}-400`}>
        React_Hooks
      </h1>
      <div className="flex items-center">
        <button
          className={` text-white bg-green-600 border border-solid border-green-500 hover:bg-green-500 hover:text-white font-bold uppercase px-6 py-1 mx-auto rounded-full outline-none focus:outline-none text-withe`}
          value="light"
          onClick={changeTheme}
          type="button"
        >
          light
        </button>
        <button
          className={` text-gray-700 bg-${theme}-200 border border-solid border-green-500 hover:bg-green-500 hover:text-white active:bg-green-600 font-bold uppercase px-6 py-1  rounded-full outline-none focus:outline-none mx-auto `}
          value="dark"
          onClick={changeTheme}
          type="button"
        >
          Dark
        </button>
      </div>
    </div>
  );
};

export default Header;
