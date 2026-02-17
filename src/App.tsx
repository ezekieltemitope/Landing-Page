import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import TermsAndConditions from "./TermsAndConditions";
import FaqContact from "./FaqContact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/faq" element={<FaqContact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
