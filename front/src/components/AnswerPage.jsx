// src/components/AnswerPage.jsx
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/utils.css';

export default function AnswerPage() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/'); // 메인으로 돌아가기
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* 배경 이미지 + 블러 */}
      <img
        src="/bg3.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
      />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-10" />

      {/* 축하 메시지 */}
      <motion.div
        className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">🎉 정답입니다! 🎉</h1>
        <p className="text-lg mb-10 text-gray-200">AI가 정확히 예측했어요. 대단하죠?</p>

        <button
          className="primary-button btn-blue"
          onClick={handleBack}
        >
          메인으로 돌아가기
        </button>
      </motion.div>
    </div>
  );
}
