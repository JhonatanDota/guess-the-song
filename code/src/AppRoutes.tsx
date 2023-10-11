import { BrowserRouter, Route, Routes } from "react-router-dom";
import GuessMusics from "./pages/GuessMusics";
import Home from "./pages/Home";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guess/:slug" element={<GuessMusics/>} />
      </Routes>
    </BrowserRouter>
  );
}
