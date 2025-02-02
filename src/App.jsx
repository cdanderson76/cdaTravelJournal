import "./index.css";
import { FaEarthAmericas } from "react-icons/fa6";
import data from "./data";
import locationImg from './images/location.png';

export default function App() {
  return (
    <div className="canvas">
      <section className="travel-journal">
        <Header />
        <TravelList />
      </section>
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <FaEarthAmericas />
      <p className="travel-journal-letters">my travel journal</p>
    </header>
  )
}

function TravelList() {
  return (
    // WHOS THE CANVAS???
    <div className="canvas-list">
      {data.map(place => {
        return (
          <Travel key={place.title}
                  title={place.title}
                  image={place.imageUrl}
                  location={place.location}
                  startDate={place.startDate}
                  endDate={place.endDate}
                  description={place.description}
                  imageUrl={place.imageUrl}
                  map={place.googleMapsUrl}
          />
        )
      })}
    </div>
  )
}

function Travel({title, 
                 image,
                 location,
                 startDate,
                 endDate,
                 description,
                 imageUrl,
                 map}) {
  return (
    <div className="container">
      <img src={image}
           alt={title}
           className="container-img"/>
      <div className="info-container">
        <span>
          <img src={locationImg} 
             alt="image of a location pin"  
             className="location-img"
          />
        </span>
        <h2 className="location-style">{location}</h2>
        <a href={map} target='_blank'>View on Google Maps</a>
        <h1>{title}</h1>
        <h3>{startDate} - {endDate}</h3>
        <div className="para-container">
          <p>
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}
