import './App.css'
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from "./pages/Movie.jsx";

function App() {


  return (
      <BrowserRouter>
          <Navbar />

          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movie/:id" element={<Movie />} />
          </Routes>

          <Footer />
      </BrowserRouter>
  )
}

export default App
