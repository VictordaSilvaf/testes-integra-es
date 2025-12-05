import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ApiTesterPage } from "./pages/ApiTesterPage";
import { About } from "./pages/About";
import { NotFound } from "./pages/NotFound";
import "./index.css";
import FormAbandonedCard from "./pages/Forms/FormAbandonedCard";
import Satisfaction from "./pages/Forms/Satifaction";
import Intention from "./pages/Forms/Intention";
import InitialTypebot from "./pages/Typebot/InitialTypebot";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api-tester" element={<ApiTesterPage />} />
        <Route path="/about" element={<About />} />

        {/* Form */}
        <Route path="/form/abandoned" element={<FormAbandonedCard />} />
        <Route path="/form/satisfaction" element={<Satisfaction />} />
        <Route path="/form/intention" element={<Intention />} />

        {/* Typebot */}
        <Route path="/typebot/initial" element={<InitialTypebot />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
