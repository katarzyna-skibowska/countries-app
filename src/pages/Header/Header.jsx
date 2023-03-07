import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext.context";
import styles from "./Header.module.css";

const Header = () => {
  const { currentTheme, isDarkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <div className={styles.layout}>
      <h1>Where in the world?</h1>
      <button
        className={styles.modeButton}
        style={{
          backgroundColor: currentTheme.background,
          color: currentTheme.foreground,
        }}
        onClick={() => setDarkMode(!isDarkMode)}
      >
        {isDarkMode ? "Dark mode 🌛" : "Light mode ☀️"}
      </button>
    </div>
  );
};

export default Header;
