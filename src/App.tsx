import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import SingleHome from "./pages/SingleHome";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutPage from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <div className="windowWrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home/:id" element={<SingleHome />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
