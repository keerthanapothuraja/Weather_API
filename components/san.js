
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
      <h1>Santhome Beach Chennai</h1>
      <div className="about">
        
        <div className="content1">
            <h3>Popular Events at Santhome Beach</h3>
            <p>Religious Gatherings: Santhome Beach is near the famous Santhome Basilica, and you might find religious events or gatherings related to this historic church.
Local Festivals: Occasionally, local festivals or cultural events might be organized on the beach, especially during the festive seasons.
Morning Yoga Sessions: Some groups organize yoga or meditation sessions during the early mornings.
</p>
        </div>
        <div className="content1">
            <h3>Attractions Nearby Santhome Beach</h3>
            <p>Santhome Basilica: A historic church built over the tomb of Saint Thomas the Apostle. It's a major pilgrimage site and a significant attraction near the beach.
Lighthouse: The Chennai Lighthouse offers panoramic views of the coastline. It's a short distance from Santhome Beach.
</p>
        </div>
        <div className="content1">
            <h3>Santhome Beach Entry Fees and Timings</h3>
            <p> There is no entry fee to visit Santhome Beach.
Timings: The beach is open 24/7, but it is advisable to visit during daylight hours for safety and convenience.
</p>
        </div>
      </div>
      <h1>How to ReachSanthome Beach</h1>
      <div className="about">
        
        <div className="content1">
            
            <p>Santhome Beach is well connected by road. You can take a taxi, auto-rickshaw, or use ride-hailing services like Uber or Ola to reach the beach.
            </p>
        </div>
        <div className="content1">
            
            <p> Several city buses run through the area. The nearest bus stop is Santhome Church.
By Train: The nearest railway station is Thirumayilai (Mylapore) MRTS station, which is about 2 km from the beach.
</p>
        </div>
        <div className="content1">
            
            <p>Prepaid taxis, local buses and auto rickshaws can be hired from the railway station, airport or bus terminal to reach the beach. Getting to the beach is very easy from the Railway station as it is located just 5 km from it.</p>
        </div>
        </div>
        <div className="why">
            <h2>FAQ’s and General Information about Santhome Beach</h2>
            <div className="co">
                <h3>What is the best time to visit Santhome Beach?
                </h3>
                <p>Early mornings or late afternoons are the best times to visit to enjoy the cooler weather and avoid the midday sun.
                </p>
            </div>
            <div className="co">
                <h3>Are there any hotels near Santhome Beach?
                </h3>
                <p>Yes, there are several hotels and guest houses in the Mylapore area, catering to various budgets.
                Santhome Beach offers a peaceful escape with cultural and historical significance, making it a must-visit spot in Chennai.</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;