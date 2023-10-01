import React, { useEffect, useState } from "react";
import './CSS/Style.css';
import icon from '../image/weather-icon.png'

const Temp = () => {

    const [city, setCity] = useState();
    const [search, setSearch] = useState("mr");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.weatherapi.com/v1/current.json?key=011757d9f2604792a4c171552232709&q=${search}&aqi=no`;
            const res = await fetch(url);
            const resjson = await res.json();


            console.log(resjson.location.country);
            console.log(resjson.location.name);
            console.log(resjson.location.lat);
            console.log(resjson.location.lon);
            console.log(resjson.location.tz_id);
            console.log(resjson.location.region);
            console.log(resjson.current.last_updated)
            console.log(resjson.current.temp_c)
            // console.log(resjson.condition.icon)




            setCity(resjson);
        }
        fetchApi()

    }, [search]);



    return (
        <>
            <div className="box" >
                <div className="inputBox">
                    <input
                        type="text"
                        name="city"
                        placeholder="city"
                        className="inpytField"
                        onChange={(e) => {
                            const getCity = e.target.value;
                            setSearch(getCity);
                        }}
                    />
                </div>
                {!city ? (<p className="noData">Data not found</p>) : (
                    <div className="info">
                        <h2 className="location">{search}</h2>
                        <h1 className="temp">
                            { }
                            {/* {city.location.name} */}
                            {/* {city.location.current.last_updated} */}



                        </h1>
                        <p className="temp-desc">
                            City &nbsp;&nbsp;
                            {city.location.name}&nbsp;

                        </p>
                        <p className="temp-desc">
                            region&nbsp;&nbsp;
                            {city.location.region}
                            {/* {city.location.name} */}

                        </p>
                        <p className="temp-desc">
                            <img src={icon} alt="icon" className="tempIcon" />&nbsp;&nbsp;
                            {city.current.temp_c}&nbsp;&#8451;

                        </p>
                        <p className="time">
                            Time &nbsp;&nbsp;{city.location.localtime}

                        </p>
                    </div>


                )}
            </div>
        </>
    )
}

export default Temp;