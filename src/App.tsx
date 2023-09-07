import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import ContactMe from "./ContactMe";
import MyWork from "./MyWork";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact-me" element={<ContactMe />} />
          <Route path="/porfolio" element={<MyWork />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
