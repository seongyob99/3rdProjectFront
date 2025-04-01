export default function Header() {
    return (
        <header className="bg-black shadow-md fixed top-0 left-0 w-full z-50 px-6 py-4 font-sans flex justify-between items-center">
        <div className="text-xl font-bold text-white tracking-tight">
          <a href="#home">Busanit501</a>
        </div>
      
        <nav className="space-x-6 text-sm font-medium hidden md:flex text-white">
          <a href="#home" className="hover:text-black transition">홈</a>
          <a href="#intro" className="hover:text-black transition">앱 소개</a>
          <a href="#examples" className="hover:text-black transition">예시 질문</a>
          <a href="#faq" className="hover:text-black transition">FAQ</a>
        </nav>
      </header>
    );
  }
  