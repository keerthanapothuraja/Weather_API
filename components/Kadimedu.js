
import { useState } from "react";
import './beach.css';
const api = {
  key: "e1a55c5130c87695b603560a9a539101",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  /*
    Search button is pressed. Make a fetch call to the Open Weather Map API.
  */
  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* HEADER  */}
        <h1>SEARCH THE CURRENT WEATHER</h1>

        {/* Search Box - Input + Button  */}
        <div>
          <input
            type="text"
            placeholder="Enter city/town..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchPressed}>Search</button>
        </div>

        {/* If weather is not undefined display results from API */}
        {typeof weather.main !== "undefined" ? (
          <div>
            {/* Location  */}
            <p>{weather.name}</p>

            {/* Temperature Celsius  */}
            <p>{weather.main.temp}°C</p>

            {/* Condition (Sunny ) */}
            <p>{weather.weather[0].main}</p>
            <p>({weather.weather[0].description})</p>
          </div>
        ) : (
          ""
        )}
      </header>
      <div className="test">
      <h1>Marina Beach Chennai</h1>
      <div className="about">
        
        <div className="content">
            <h3>Popular Events at Marina Beach</h3>
            <p>Numerous events like the Independence Day, Republic Day, Ganesh Chaturthi and Chennai Marathon are held at the renowned beach. The major crowd can be seen on the Kaanum Pongal day. It had also been the venue for major protests like the Jallikattu protest in 2017 and historical campaigns like the My Leader campaign launched in 2016.</p>
        </div>
        <div className="content">
            <h3>Attractions Nearby Marina Beach</h3>
            <p>Visitors can pop into the city to explore more exciting places located near the beach like Vivekananda House, Santhome Cathedral Basilica, Connemara Library, Valluvar Kottam, Kamarajar Statue, U Pope Statue, MGR Memorial, Victory War Memorial and Fort St. George.</p>
        </div>
        <div className="content">
            <h3>Marina Beach Entry Fees and Timings</h3>
            <p>There is no entry fees to be paid to visit the beach and can be visited anytime. November to February is the most preferred time period to visit the Chennai to avoid the scorching heat.</p>
        </div>
      </div>
      <h1>How to Reach Marina Beach</h1>
      <div className="about">
        
        <div className="content">
            
            <p>Being a metropolitan city, Chennai is accessible through all the means of transportation including air, water and land. Chennai Central and Chennai Egmore are the two major railway stations of the state capital that connects it to the different parts of the country.</p>
        </div>
        <div className="content">
            
            <p>Domestic airlines operate at the Kamaraj domestic terminal on a daily basis. Anna International Airport at Chennai connects the capital city to the major airports of the world. Chennai Mofussil Bus Terminal or CMBT is one of Asia’s largest bus stations and has several buses connecting all the cities of the country to Chennai.</p>
        </div>
        <div className="content">
            
            <p>Prepaid taxis, local buses and auto rickshaws can be hired from the railway station, airport or bus terminal to reach the beach. Getting to the beach is very easy from the Railway station as it is located just 5 km from it.</p>
        </div>
        </div>
        <div className="why">
            <h2>FAQ’s and General Information about Marina Beach</h2>
            <div className="co">
                <h3>Why should we visit Marina Beach?</h3>
                <p>Marina is a must visit to get soaked in its pristine beauty and to witness the statues of the legendary personalities. Witnessing the sunrise and sunset is one of the most cherished memories.</p>
            </div>
            <div className="co">
                <h3>When should we visit the Marina Beach?</h3>
                <p>Marina Beach can be visited throughout the year however people prefer to visit the capital city during the months of November to February to experience its cool breeze and its soothing ambiance.</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;