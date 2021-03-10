import React, { useState, useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import { useTheme } from 'react-hook-tailwind-darkmode';

const Header = () => {
  const { changeTheme } = useTheme();
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => setDarkMode(!darkMode);

  return (
    <div className="p-6">
      <h1 className="text-6xl font-bebas text-orange dark:text-green-600 text-center ">
        React_Hooks
      </h1>

      <button
        className="text-blueDark dark:text-white w-10 h-10 bg-orange rounded-full dark:bg-green-500"
        onClick={() => changeTheme()}
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Header;
