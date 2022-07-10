import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Detail from "./pages/Detail";
function App() {
  return (
    <div className="App font-nunito relative bg-[#101010] h-auto ">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watchlist" element={<Home />} />
          <Route path="/login" element={<Home />} />
          <Route path="/movies/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
