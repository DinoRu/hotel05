import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Rooms from "./components/rooms/Rooms";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Hero />
        <Rooms />
      </div>
    </div>
  );
}

export default App;
