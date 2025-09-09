import React from "react";
import { Route, Routes } from "react-router";
import LandingPage from "./pages/LandingPage";
import registerGSAPPlugins from "./config/registerGSAPPlugins";

const App = (): React.ReactNode => {
  registerGSAPPlugins();

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" />
    </Routes>
  );
};

export default App;
