import Header from './components/Header';
import MainScrollPage from './pages/MainScrollPage';
import QuestionCard from './components/QuestionCard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainScrollPage />} />
        <Route path="/question" element={<QuestionCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
