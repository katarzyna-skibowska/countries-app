import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountriesList from "./pages/CountriesList/CountriesList";
import CountryDetails from "./pages/CountryDetails/CountryDetails";
import Layout from "./components/Layout";
import { DarkModeContextProvider } from "./context/ThemeContext.context";

function App() {
  return (
    <DarkModeContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<CountriesList />} />
            <Route path="/:countryName" element={<CountryDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DarkModeContextProvider>
  );
}

export default App;
