
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/utils.css';

export default function ResultPage() {
  const navigate = useNavigate();

  const handleRetry = () => {
    navigate('/question');
  };

  const handleYes = () => {
    navigate('/answer');
  };

  const handleNo = () => {
    navigate('/fail');
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* ✅ 배경 이미지 */}
      <img
        src="/bg3.png"
        alt="Result Background"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
      />

      {/* ✅ 검은 블러 오버레이 추가 (메인 화면처럼) */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur z-10" />

      {/* ✅ 실제 콘텐츠 */}
      <motion.div
        className="relative z-20 flex flex-col items-center justify-center h-full text-white px-4 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-6 drop-shadow-lg">
          당신이 생각한 건...
        </h2>

        <div className="bg-gray-900 bg-opacity-90 rounded-2xl shadow-lg p-8 mb-6 w-full max-w-sm">
          <img
            src="/pikachu.png"
            alt="예측 결과"
            className="w-32 h-32 mx-auto mb-4 object-contain"
          />
          <h3 className="text-xl font-semibold">피카츄</h3>
        </div>

        <p className="text-lg mb-6 drop-shadow-md">정답인가요?</p>

        <div className="flex space-x-4">
        <button className="primary-button btn-blue" onClick={handleYes}>맞아요</button>
          <button className="primary-button btn-red" onClick={handleNo}>아니요</button>
        </div>

        <button
          className="primary-button btn-gray mt-8"
          onClick={handleRetry}
        >
          다시 시작하기
        </button>
      </motion.div>
    </div>
  );
}
