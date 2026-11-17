import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedPost from "./components/FeaturedPost"; 

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <div className="hero-container">
        <Hero />
        </div>
        <FeaturedPost />
      </main>
    </div>
  );
}

export default App;

