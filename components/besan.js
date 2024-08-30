
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
      <h1>Besant Nagar Beach Chennai</h1>
      <div className="about">
        
        <div className="content1">
            <h3>Popular Events at Besant Nagar Beach</h3>
            <p>Morning Yoga Sessions: Besant Nagar Beach is a popular spot for morning yoga sessions, especially during weekends. Local groups and fitness enthusiasts often gather for early morning practices.</p>
            <p>Food Festivals: Periodically, food festivals featuring local street food are held along the beach promenade, attracting both locals and tourists.
            Marathon and Walkathons: Several marathons and walkathons are organized here, especially during the cooler months.
          </p>
        </div>
        <div className="content1">
            <h3>Attractions Nearby Besant Nagar Beach</h3>
            <p>The Annai Vailankanni Shrine: This famous Catholic church is located right by the beach, drawing both tourists and devotees.
Ashtalakshmi Temple: A well-known Hindu temple dedicated to Goddess Lakshmi, located a short distance from the beach.
Thalankuppam Pier: A serene pier offering picturesque views of the sunrise, located north of the beach.
Theosophical Society: Located nearby, this society's sprawling grounds include a historic library, gardens, and the Adyar Banyan tree.
Kalakshetra Foundation: An arts and cultural academy offering performances and workshops in classical dance and music.
</p>
        </div>
        <div className="content1">
            <h3>Besant Nagar Beach Entry Fees and Timings</h3>
            <p>and Timings
Entry Fees: The beach is open to the public and is free of charge.
Timings: The beach is accessible 24/7. However, it is best enjoyed during early mornings and evenings. Late-night visits are generally not recommended due to safety concerns.
</p>
        </div>
      </div>
      <h1>How to Reach Besant Nagar Beach</h1>
      <div className="about">
        
        <div className="content1">
            
            <p>By Bus: Besant Nagar is well-connected by Chennai’s bus network. The Metropolitan Transport Corporation (MTC) operates buses to Besant Nagar from various parts of the city. The closest bus stop is "Besant Nagar Bus Terminus."
            </p>
        </div>
        <div className="content1">
            
            <p>By Train: The nearest railway station is "Indira Nagar," on the Chennai MRTS line, about 3 km away. From there, you can take a bus, auto-rickshaw, or cab to the beach.
By Cab/Auto-rickshaw: Cabs and auto-rickshaws are readily available across Chennai. You can use ride-hailing apps like Ola or Uber for convenience.
</p>
        </div>
        <div className="content1">
            
            <p>By Car: If driving, you can park at designated spots along the beach or nearby streets. However, parking can get crowded, especially during weekends.
            </p>
        </div>
        </div>
        <div className="why">
            <h2>FAQ’s and General Information about Besant Nagar Beach</h2>
            <div className="co">
                <h3>What kind of food is available at the beach?</h3>
                <p>The beach is famous for its street food, including snacks like sundal, bajji, and ice cream. There are also several cafes and restaurants nearby offering a variety of cuisines.</p>
            </div>
            <div className="co">
                <h3>Is Besant Nagar Beach safe for swimming?</h3>
                <p>While the beach is popular for its clean and calm waters, it's recommended to swim only in designated safe zones as there can be strong undercurrents.</p>
            </div>
        </div>
     
    </div>
  );
}

export default App;