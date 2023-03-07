import { useContext } from "react";
import { DarkModeContext } from "../../context/ThemeContext.context";
import styles from "./Header.module.css";

const Header = () => {
  const { currentTheme, toggleDarkMode, isDarkMode } =
    useContext(DarkModeContext);
  const handleClick = () => {
    toggleDarkMode();
  };
  return (
    <div
      style={{
        color: currentTheme.color,
        backgroundColor: currentTheme.backgroundElement,
      }}
      className={styles.layout}
    >
      <h1>Where in the world?</h1>
      <button className={styles.modeButton} onClick={handleClick}>
        {isDarkMode ? "Light mode ☀️" : "Dark mode 🌛"}
      </button>
    </div>
  );
};

export default Header;
