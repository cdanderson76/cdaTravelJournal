import "./index.css";
import data from "./data";
import locationImg from './images/location.png';

console.log(data)

export default function App() {
  return (
    <div className="canvas">
      <TravelList />
    </div>
  );
}

function TravelList() {
  return (
    <div>
      <Travel />
    </div>
  )
}

function Travel() {
  return (
    <div className="container">
      <img src={data[0].imageUrl}
           alt="" 
           className="container-img"/>
      <div className="info-container">
        <span>
          <img src={locationImg} 
             alt=""  
             className="location-img"
          />
        </span>
        <h2 className="location-style">{data[0].location}</h2>
        <a href={data[0].googleMapsUrl}>View on Google Maps</a>
        <h1>{data[0].title}</h1>
        <h3>{data[0].startDate} - {data[0].endDate}</h3>
        <div className="para-container">
          <p>
            {data[0].description}
          </p>
        </div>
      </div>
    </div>
  )
}
