import data from "../data";
import Travel from "./Travel";

export default function TravelList() {
  return (
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