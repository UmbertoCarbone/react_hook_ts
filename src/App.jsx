import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReducePage from "./pages/ReducePage";
import Homepage from "./pages/Homepage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/useReducer" element={<ReducePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
