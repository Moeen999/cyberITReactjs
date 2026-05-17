import { useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";

const ThemeTogller = () => {
  const [theme, setTheme] = useState("light");
  //   what if we want to do the same with the boolean values
  const [isLight, setIsLight] = useState(true);

  return (
    <div
      className={`w-full min-h-screen flex justify-center items-center ${theme === "light" ? "bg-white text-black" : "bg-black text-white"}`}
    >
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="p-4 flex gap-3 border border-pink-300 rounded-md"
      >
        {theme === "light" ? "Change to Dark Mode" : "Change to Light Mode"}
        {theme === "light" ? (
          <FaRegMoon size={20} />
        ) : (
          <IoSunnyOutline size={20} />
        )}
      </button>
    </div>
  );
};

export default ThemeTogller;
