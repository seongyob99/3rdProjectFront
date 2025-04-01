import { useNavigate, useLocation } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoHome = () => {
    if (location.pathname === '/') {
      // 메인 페이지에 있을 때 → 스크롤로 이동
      const target = document.getElementById('home');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // 질문 페이지나 다른 페이지에 있을 때 → 메인 페이지로 이동
      navigate('/');
    }
  };

  return (
    <header className="bg-black shadow-md fixed top-0 left-0 w-full z-50 px-6 py-4 font-sans flex justify-between items-center">
      <div className="text-xl font-bold text-white tracking-tight">
        <button onClick={handleGoHome}>WordGenie</button>
      </div>

      <nav className="space-x-6 text-sm font-medium hidden md:flex text-white">
        <button onClick={() => handleGoHome()} className="hover:text-black transition">
          홈
        </button>
        <button onClick={() => {
          const el = document.getElementById('intro');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }} className="hover:text-black transition">
          앱 소개
        </button>
        <button onClick={() => {
          const el = document.getElementById('examples');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }} className="hover:text-black transition">
          예시 질문
        </button>
        <button onClick={() => {
          const el = document.getElementById('faq');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }} className="hover:text-black transition">
          FAQ
        </button>
      </nav>
    </header>
  );
}
