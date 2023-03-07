import { createContext, useState } from "react";

export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [isDarkModeEnabled, setDarkMode] = useState(false);

  const themes = {
    light: {
      foreground: "black",
      background: "white",
    },
    dark: {
      foreground: "white",
      background: "black",
    },
  };

  return (
    <>
      <ThemeContext.Provider
        value={{
          isDarkMode: isDarkModeEnabled,
          currentTheme: isDarkModeEnabled ? themes.dark : themes.light,
          setDarkMode,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </>
  );
};
