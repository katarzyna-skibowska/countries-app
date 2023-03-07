import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../../components/BackButton/BackButton";
import styles from "./CountryDetails.module.css";

const CountryDetails = () => {
  const { countryName } = useParams();
  const [countryDetails, setCountryDetails] = useState([]);

  useEffect(() => {
    fetch(
      `https://restcountries.com/v2/name/${countryName}?fields=name,capital,region,subregion,borders,flag&fullText=true`
    )
      .then((response) => response.json())
      .then((data) => setCountryDetails(data[0]));
  }, [countryName]);

  return countryDetails ? (
    <>
      <BackButton />
      <div className={styles.wrapper}>
        <div className={styles.imageBox}>
          <img className={styles.flag} src={countryDetails.flag} alt="flag" />
        </div>
        <div className={styles.dataBox}>
          <h2>{countryDetails.name}</h2>
          <p>
            <b>Capital: </b>
            {countryDetails.capital}
          </p>
          <p>
            <b>Region: </b>
            {countryDetails.region}
          </p>
          <p>
            <b>Sub region: </b>
            {countryDetails.subregion}
          </p>
          <b>Border countries: </b>
          {countryDetails.borders?.map((border) => {
            return (
              <p className={styles.borders} key={countryDetails.capital}>
                {border}
              </p>
            );
          })}
        </div>
      </div>
    </>
  ) : (
    <h3>There is no country like this:(</h3>
  );
};
export default CountryDetails;
