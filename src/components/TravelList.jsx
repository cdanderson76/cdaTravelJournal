import Travel from "./Travel";

export default function TravelList({data, setTravel, travel}) {

  function removeTravel(id) {
    const newTravel = travel.filter(tour => tour.id !== id);
    setTravel(newTravel);
  };

  return (
    <div className="canvas-list">
      {travel.map(place => {
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
                  id={place.id}
                  setTravel={setTravel}
                  removeTravel={removeTravel}
          />
        )
      })}
    </div>
  )
}