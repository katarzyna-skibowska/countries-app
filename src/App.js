import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountriesList from "./pages/CountriesList/CountriesList";
import CountryDetails from "./pages/CountryDetails/CountryDetails";
import Layout from "./components/Layout";
import { ThemeProvider } from "./context/ThemeContext.context";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<CountriesList />} />
            <Route path="/:countryName" element={<CountryDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
