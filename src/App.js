// import { Route, Routes } from "react-router-dom";
// import "./App.css";
// import FilterGenres from "./components/FilterGenres";
// import MovieDetails from "./pages/MovieDetails";

// function App() {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<FilterGenres />} />
//         <Route path="/movie/:movieId" element={<MovieDetails />} />
//       </Routes>
//     </>
//   );
// }

// export default App;

import React from "react";
import Router from "./routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
