import React, { useEffect, useState } from "react";
import styles from "./Weather.module.css";
import vector from "../../assets/Vector.png"
import windspeed from "../../assets/windspeed.png"
import group from "../../assets/Group.png"
import axios from "axios";

function Weather() {
    const [DateTime,setDateTime]=useState("");
    const [condition,setCondition]=useState("");
    const [ConditionIcon,setConditionIcon]=useState("");
    const [Temperature,setTemperature]=useState("");
    const [Pressure,setpressure]=useState("");
    const [wind,setWind]=useState("");
    const [humidity,setHumidity]=useState("");
  const fetchWeather = async () => {
    const requrl =
      "http://api.weatherapi.com/v1/current.json?key=326abce5c6304ea2bc470307241509&q=Nellore";

    try {
      const response = await axios.get(requrl);
      setDateTime(response.data.location.localtime);
      setCondition(response.data.current.condition.text);
      setConditionIcon(response.data.current.condition.icon);
      setTemperature(response.data.current.temp_c);
      setpressure(response.data.current.pressure_mb);
      setWind(response.data.current.wind_kph);
      setHumidity(response.data.current.humidity);

    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.dateTime}>{DateTime}</div>
      <div className={styles.bottomSection}>
        <div className={styles.bottomSectionElements}>
            <img src={ConditionIcon} alt="condition icon" />
            <p>{condition}</p>
        </div>
        <span>|</span>
        <div className={styles.bottomSectionElements}>
        <p>{Temperature}°C</p>
        <div style={{display:"flex"}}>
            <img src={vector} alt="vector" style={{height:"20px", marginTop:"12px"}}/>
            <p style={{opacity:"0.7" , fontSize:"15px",padding:"5px"}}>{Pressure} mbar<br/>Pressure</p>
        </div>
        </div>
        <span>|</span>
        <div className={styles.bottomSectionElements}>
        <div style={{display:"flex",marginTop:"0px"}}>
            <img src={windspeed} style={{height:"15px",marginTop:"5px",marginRight:"5px"}}/>
               <p style={{opacity:"0.8" ,fontSize:"11px"}}>{wind} km/h<br/>Wind</p>
            </div>
            <div style={{display:"flex",marginTop:"10px"}}>
            <img src={group} style={{height:"15px",marginTop:"5px",marginRight:"15px"}}/>
               <p style={{opacity:"0.8" ,fontSize:"11px"}}>{humidity}<br/>humidity</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
