import React from "react";
import { Route, Routes } from "react-router";
import LandingPage from "./pages/LandingPage";
import registerGSAPPlugins from "./config/registerGSAPPlugins";
import Hello from "./components/Hello.tsx";

const App = (): React.ReactNode => {
  registerGSAPPlugins();

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" />
        <Route path="/hello" element={<Hello />}/>
    </Routes>
  );
};

export default App;
