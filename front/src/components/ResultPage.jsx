// components/ResultPage

import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/utils.css';

export default function ResultPage() {
  const navigate = useNavigate();

  const handleRetry = () => {
    navigate('/'); // 메인으로 다시 이동
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-6">당신이 생각한 건...</h2>

      <div className="bg-gray-800 rounded-2xl shadow-lg p-8 mb-6 w-full max-w-sm">
        <img
          src="/pikachu.png" // 임시 이미지
          alt="예측 결과"
          className="w-32 h-32 mx-auto mb-4 object-contain"
        />
        <h3 className="text-xl font-semibold">피카츄</h3>
      </div>

      <p className="text-lg mb-6">정답인가요?</p>

      <div className="flex space-x-4">
        <button className="primary-button btn-blue">맞아요</button>
        <button className="primary-button btn-red">아니요</button>
      </div>

      <button
        className="primary-button btn-gray mt-8"
        onClick={handleRetry}
      >
        다시 시작하기
      </button>
    </motion.div>
  );
}
