import "./index.css";
import Header from "./components/Header";
import TravelList from './components/TravelList';

export default function App() {
  return (
    <div className="canvas">
      <section className="travel-journal">
        <Header />
        <TravelList />
      </section>
    </div>
  );
};