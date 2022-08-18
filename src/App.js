import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Event from "./pages/Events/Event";
import Events from "./pages/Events/Events";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";

function App() {
  return (
    <Suspense fallback={<>...Loading</>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="events" element={<Events />} />

        <Route path="events/:id" element={<Event />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
