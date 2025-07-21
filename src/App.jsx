import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Candidates from "./pages/Candidates";
import InfosHub from "./pages/InfosHub";
import PollingStation from "./pages/PollingStation";
import Contact from "./pages/Contact";
import Thanks from "./pages/Thanks";
import NotFoundPage from "./pages/NotFoundPage";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="accueil" element={<Home />} />
          <Route path="candidats" element={<Candidates />} />
          <Route path="infos" element={<InfosHub />} />
          <Route path="trouver-bureau" element={<PollingStation />} />
          <Route path="contact" element={<Contact />} />
          <Route path="merci" element={<Thanks />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
