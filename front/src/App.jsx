import Header from './components/Header';
import MainScrollPage from './pages/MainScrollPage';
import ResultPage from './components/ResultPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UploadPage from './components/UploadPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainScrollPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/upload" element={<UploadPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
