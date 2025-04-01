import Header from './components/Header';
import MainScrollPage from './pages/MainScrollPage';
import QuestionCard from './components/QuestionCard';
import ResultPage from './components/ResultPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainScrollPage />} />
        <Route path="/question" element={<QuestionCard />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
