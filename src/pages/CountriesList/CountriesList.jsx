import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./CountriesList.module.css";

const CountriesList = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v2/all?fields=name,capital,flag,population,regions"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setCountries(data);
      });
  }, []);

  return countries.map((country) => {
    return (
      <Link to={country.name} key={country.name} className={styles.link}>
        <div className={styles.box}>
          <img className={styles.flagPhoto} src={country.flag} alt="flag" />
          <h2 className={styles.countryName}>{country.name}</h2>
          <p>Capital: {country.capital}</p>
          <p>Population: {country.population}</p>
        </div>
      </Link>
    );
  });
};

export default CountriesList;
