import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DatasetExplorer from './pages/DatasetExplorer';
import AILab from './pages/AILab';
import Solutions from './pages/Solutions';

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
