import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom'; // Import Link for navigation
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import beach2 from './besan.jpg';
import beach3 from './covelong.jpg';
import beach4 from './kadimedu.jpg';
import beach5 from './marina.jpg';
import beach6 from './neelankarai.jpg';
import beach7 from './nettuppam.jpg';
import beach8 from './pebble.jpg';
import beach9 from './santhome.jpg';
import heroImage from './hero.jpg';
import './home.css';

// Fix Leaflet icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const Main = () => {
    const [mapCenter, setMapCenter] = useState([13.0827, 80.2707]);

    const beachLocations = [
        { name: "Besant Nagar Beach", coords: [12.9992, 80.2707], image: beach2, link: "/besan" },
        { name: "Covelong Beach", coords: [12.7936, 80.2537], image: beach3, link: "/ovelong" },
        { name: "Kadimedu Beach", coords: [12.7849, 80.2450], image: beach4, link: "/Kasimedu" },
        { name: "Marina Beach", coords: [13.0475, 80.2824], image: beach5, link: "/marina" },
        { name: "Neelankarai Beach", coords: [12.9492, 80.2451], image: beach6, link: "/Neela" },
        { name: "Nettukkupam Beach", coords: [13.2466, 80.3283], image: beach7, link: "/Neetu" },
        { name: "Pebble Beach", coords: [12.9852, 80.2584], image: beach8, link: "/pebble" },
        { name: "Santhome Beach", coords: [13.0328, 80.2796], image: beach9, link: "/san" },
    ];

    const handleBeachClick = (coords) => {
        setMapCenter(coords);
    };

    return (
        <div className='beach'>
             <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="hero-content">
                    <h1>Discover your world</h1>
                    <p>Indulge your adventurous spirit</p>
                </div>
                </section>  

            <div className='content'>
                {beachLocations.map((beach, index) => (
                    <div
                        className='beach-card'
                        key={index}
                        onClick={() => handleBeachClick(beach.coords)}
                    >
                        <img src={beach.image} alt={beach.name} className="beach-image" />
                        <h3 className="beach-name">{beach.name}</h3>
                        <p className="beach-coordinates">
                            Coordinates: {beach.coords[0]}° N, {beach.coords[1]}° E
                        </p>
                        {beach.link && (
                            <Link to={beach.link} className="beach-link">
                                Go to {beach.name} Page
                            </Link>
                        )}
                    </div>
                ))}
            </div>

            <MapContainer
                center={mapCenter}
                zoom={10}
                style={{ height: "500px", width: "100%", marginTop: "50px" }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {beachLocations.map((beach, index) => (
                    <Marker key={index} position={beach.coords}>
                        <Popup>
                            <h3>{beach.name}</h3>
                            <p>{beach.coords[0]}° N, {beach.coords[1]}° E</p>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default Main;
