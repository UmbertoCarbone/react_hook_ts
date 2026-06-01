import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReducePage from "./pages/ReducePage";
import MemoPage from "./pages/MemoPage";
import CallbackPage from "./pages/CallbackPage";
import RefPage from "./pages/RefPage";
import CustomHookPage from "./pages/CustomHookPage";
import StoragePage from "./pages/StoragePage";
import Homepage from "./pages/Homepage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/useReducer" element={<ReducePage />} />
        <Route path="/useMemo" element={<MemoPage />} />
        <Route path="/useCallback" element={<CallbackPage />} />
        <Route path="/useRef" element={<RefPage />} />
        <Route path="/customHook" element={<CustomHookPage />} />
        <Route path="/storage" element={<StoragePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
