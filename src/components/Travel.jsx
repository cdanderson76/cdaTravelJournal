import locationImg from '../images/location.png';

export default function Travel({title, 
                                image,
                                location,
                                startDate,
                                endDate,
                                description,
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
};