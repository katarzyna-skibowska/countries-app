import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { DarkModeContext } from "../context/ThemeContext.context";
import Header from "../pages/Header/Header";

const Layout = () => {
  const { currentTheme } = useContext(DarkModeContext);
  return (
    <div
      style={{
        backgroundColor: currentTheme.background,
        color: currentTheme.foreground,
      }}
    >
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
