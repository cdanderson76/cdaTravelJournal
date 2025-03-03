import "./index.css";
import { useState } from "react";
import Header from "./components/Header";
import TravelList from './components/TravelList';
import data from './data'

export default function App() {

  const [ travel, setTravel ] = useState(data);

  return (
    <div className="canvas">
      <section className="travel-journal">
        <Header />
        <TravelList travel={travel}
                    setTravel={setTravel}
        />
      </section>
    </div>
  );
};