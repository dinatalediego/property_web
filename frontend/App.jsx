import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import DatasetExplorer from './pages/DatasetExplorer/DatasetExplorer';
import AILab from './pages/AILab/AILab';
import Solutions from './pages/Solutions/Solutions'; // ✅ ¡Así!

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dataset" element={<DatasetExplorer />} />
        <Route path="/lab" element={<AILab />} />
        <Route path="/solutions" element={<Solutions />} />
      </Routes>
    </BrowserRouter>
  );
}
