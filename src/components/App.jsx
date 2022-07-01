import { Route, Routes } from "react-router-dom";
import Calendar from "../pages/Calendar";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Footer from "./Shared/Footer";
import Navbar from "./Shared/Navbar";

const App = () => {
  return (
    <div className="h-screen w-full grid grid-rows-[auto,1fr,auto] gap-4">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
