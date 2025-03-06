import React, { useEffect, useState } from "react";
import styles from "./Weather.module.css";
import vector from "../../assets/Vector.png";
import windspeed from "../../assets/windspeed.png";
import group from "../../assets/Group.png";
import axios from "axios";

function Weather() {
  const [dateTime, setDateTime] = useState("");
  const [condition, setCondition] = useState("");
  const [conditionIcon, setConditionIcon] = useState("");
  const [temperature, setTemperature] = useState("");
  const [pressure, setPressure] = useState("");
  const [wind, setWind] = useState("");
  const [humidity, setHumidity] = useState("");

  const fetchWeather = async () => {
    const requrl =
      "https://api.weatherapi.com/v1/current.json?key=326abce5c6304ea2bc470307241509&q=Nellore";

    try {
      const response = await axios.get(requrl);
      console.log("Weather Data:", response.data); // Debugging

      setDateTime(response.data.location.localtime);
      setCondition(response.data.current.condition.text);
      setConditionIcon("https:" + response.data.current.condition.icon); // Fixed Icon URL
      setTemperature(response.data.current.temp_c);
      setPressure(response.data.current.pressure_mb);
      setWind(response.data.current.wind_kph);
      setHumidity(response.data.current.humidity);
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };

  useEffect(() => {
    fetchWeather();
    const interval = setInterval(fetchWeather, 60000); // Refresh every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.dateTime}>{dateTime}</div>

      <div className={styles.bottomSection}>
        {/* Weather Condition */}
        <div className={styles.bottomSectionElements}>
          <img src={conditionIcon} alt="Weather Condition" />
          <p>{condition}</p>
        </div>

        <span>|</span>

        {/* Temperature & Pressure */}
        <div className={styles.bottomSectionElements}>
          <p>{temperature}°C</p>
          <div style={{ display: "flex" }}>
            <img src={vector} alt="Pressure Icon" style={{ height: "20px", marginTop: "12px" }} />
            <p style={{ opacity: "0.7", fontSize: "15px", padding: "5px" }}>
              {pressure} mbar<br />Pressure
            </p>
          </div>
        </div>

        <span>|</span>

        {/* Wind & Humidity */}
        <div className={styles.bottomSectionElements}>
          <div style={{ display: "flex", marginTop: "0px" }}>
            <img src={windspeed} alt="Wind Speed Icon" style={{ height: "15px", marginTop: "5px", marginRight: "5px" }} />
            <p style={{ opacity: "0.8", fontSize: "11px" }}>{wind} km/h<br />Wind</p>
          </div>
          <div style={{ display: "flex", marginTop: "10px" }}>
            <img src={group} alt="Humidity Icon" style={{ height: "15px", marginTop: "5px", marginRight: "15px" }} />
            <p style={{ opacity: "0.8", fontSize: "11px" }}>{humidity}%<br />Humidity</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
