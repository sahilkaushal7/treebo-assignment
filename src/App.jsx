import React from "react";
import Home from "./views/Home";
import ErrorBoundary from "./components/ErrorBoundary";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
