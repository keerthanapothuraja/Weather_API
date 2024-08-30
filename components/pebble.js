
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
      <h1>Pebble Beach  Chennai</h1>
      <div className="about">
        
        <div className="content1">
            <h3>Popular Events at Pebble Beach </h3>
            <p>Sunrise and Sunset Watching: The beach offers a perfect spot for watching the sunrise and sunset, making it a favorite among photographers and nature enthusiasts.
Yoga and Meditation: The serene environment is ideal for yoga sessions and meditation, which are occasionally organized by local groups.
Beach Clean-Up Drives: Community-driven clean-up events are often held, promoting environmental awareness among locals and tourists.
</p>
        </div>
        <div className="content1">
            <h3>Attractions Nearby Pebble Beach </h3>
            <p>Kapaleeshwarar Temple: Located in Mylapore, this ancient Hindu temple dedicated to Lord Shiva is a significant cultural and religious site.
Santhome Basilica: A historical church with stunning architecture, believed to be built over the tomb of St. Thomas, one of Jesus' apostles.
Elliot's Beach (Besant Nagar Beach): Another popular beach nearby, known for its vibrant atmosphere, restaurants, and cafes.
Tholkappia Poonga (Adyar Eco Park): A large ecological park, perfect for nature walks and bird watching.
</p>
        </div>
        <div className="content1">
            <h3>Pebble Beach  Entry Fees and Timings</h3>
            <p>Entry Fees: Pebble Beach does not have any entry fees. It is open to the public.
Timings: The beach is open 24/7. However, it's recommended to visit during daylight hours for safety reasons, especially for those unfamiliar with the area.
</p>
        </div>
      </div>
      <h1>How to Reach Pebble Beach </h1>
      <div className="about">
        
        <div className="content1">
            
            <p>Being a metropolitan city, Chennai is accessible through all the means of transportation including air, water and land. Chennai Central and Chennai Egmore are the two major railway stations of the state capital that connects it to the different parts of the country.</p>
        </div>
        <div className="content1">
            
            <p>Domestic airlines operate at the Kamaraj domestic terminal on a daily basis. Anna International Airport at Chennai connects the capital city to the major airports of the world. Chennai Mofussil Bus Terminal or CMBT is one of Asia’s largest bus stations and has several buses connecting all the cities of the country to Chennai.</p>
        </div>
        <div className="content1">
            
            <p>Prepaid taxis, local buses and auto rickshaws can be hired from the railway station, airport or bus terminal to reach the beach. Getting to the beach is very easy from the Railway station as it is located just 5 km from it.</p>
        </div>
        </div>
        <div className="why">
            <h2>FAQ’s and General Information about Pebble Beach </h2>
            <div className="co">
                <h3>Is Pebble Beach suitable for swimming?
                </h3>
                <p>No, Pebble Beach is not ideal for swimming due to the rocky shoreline and strong currents.
</p>
            </div>
            <div className="co">
                <h3>Can I camp overnight at Pebble Beach?
                </h3>
                <p>Overnight camping is not officially permitted on Pebble Beach. It's better to explore other nearby beaches or resorts for such activities.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;