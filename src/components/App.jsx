import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Shared/Navbar";
import Footer from "./Shared/Footer";
import Home from "../pages/Home";
import CreateTask from "../pages/CreateTask";
import CompletedTask from "../pages/CompletedTask";
import Calendar from "../pages/Calendar";
import NotFound from "../pages/NotFound";

const App = () => {
  return (
    <div className="h-screen w-full grid grid-rows-[auto,1fr,auto] gap-4">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateTask />} />
        <Route path="/completed" element={<CompletedTask />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
