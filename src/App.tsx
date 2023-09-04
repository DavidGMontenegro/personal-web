import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import ContactMe from "./ContactMe";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact-me" element={<ContactMe />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
