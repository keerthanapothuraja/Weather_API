
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
            <h3>Popular Events at Covelong Beach</h3>
            <p>Covelong Point Surf, Music & Yoga Festival: One of the most famous events held annually, this festival attracts surf enthusiasts, music lovers, and yoga practitioners from around the world. It typically features surfing competitions, live music performances, yoga sessions, and other beachside activities.
Surf Competitions: Regular surf competitions are organized, attracting both amateurs and professionals. The beach's waves are ideal for beginners and experienced surfers alike.
Cultural Events: Occasional cultural events and local festivals are celebrated at the beach, showcasing traditional Tamil music, dance, and arts.
</p>
        </div>
        <div className="content">
            <h3>Attractions Nearby Covelong Beach</h3>
            <p>Covelong Fort: Originally built by the Dutch in the 18th century, this fort adds a historical charm to the beach. Though much of it is in ruins, it's a great spot for history enthusiasts.
Surfing Schools: Several surfing schools and clubs are located nearby, offering lessons for beginners and advanced surfers.
The Crocodile Bank: About 14 km from the beach, this reptile zoo is home to various species of crocodiles, alligators, and other reptiles.
</p>
        </div>
        <div className="content">
            <h3>Marina Beach Entry Fees and Timings</h3>
            <p>The beach is generally free to enter. However, fees may apply for certain activities like surfing lessons, events, or access to private beach areas managed by resorts.
Timings: Covelong Beach is open to the public 24/7, but it’s advisable to visit during daylight hours (6:00 AM to 6:00 PM) for safety and to enjoy the beach activities.
How to Reach Covelong Beach
</p>
        </div>
      </div>
      <h1>How to Reach Marina Beach</h1>
      <div className="about">
        
        <div className="content">
            
            <p>By Train: The nearest railway station is Chennai Central, which is about 35 km from the beach. From the station, you can take a taxi or a bus to Covelong.
            </p>
        </div>
        <div className="content">
            
            <p>By Bus: Regular buses run from Chennai and other nearby cities to Covelong. You can catch a bus from the Chennai Mofussil Bus Terminus (CMBT) to reach the beach.
            </p>
        </div>
        <div className="content">
            
            <p>By Car: Covelong Beach is easily accessible by road. You can drive or hire a taxi from Chennai, which is about a 1-hour drive along the scenic East Coast Road (ECR).
            </p>
        </div>
        </div>
        <div className="why">
            <h2>FAQ’s and General Information about Besant Beach</h2>
            <div className="co">
                <h3>Is the beach safe for swimming?
                </h3>
                <p>Yes, the beach is generally safe for swimming, but it’s advisable to stay within designated areas and be cautious during high tides.
                </p>
            </div>
            <div className="co">
                <h3>Are there any water sports available?
                </h3>
                <p>Yes, the beach is popular for water sports like surfing, windsurfing, and stand-up paddleboarding. Surfing lessons are also available.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;