import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Team from "./pages/team";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Navbar />
        <Routes>
          <Route path='/about' element={ <About /> } />
          <Route path='/team' element={ <Team /> } />
        </Routes>
        <Footer />
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
