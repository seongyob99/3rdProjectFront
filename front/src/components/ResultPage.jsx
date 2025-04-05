import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/utils.css';

export default function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const resultText = location.state?.resultText || '';

  const handleRetry = () => {
    navigate('/upload');
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(resultText);
      alert('텍스트가 복사되었습니다!');
    } catch (err) {
      alert('복사에 실패했습니다.');
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* ✅ 배경 이미지 */}
      <img
        src="/bg3.png"
        alt="Result Background"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
      />

      {/* ✅ 어두운 오버레이 */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur z-10" />

      {/* ✅ 실제 콘텐츠 */}
      <motion.div
        className="relative z-20 flex flex-col items-center justify-center h-full text-white px-4 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-6 drop-shadow-lg">
          텍스트 추출 완료! 🎉
        </h2>

        <div className="bg-gray-900 bg-opacity-90 rounded-2xl shadow-lg p-6 mb-6 w-full max-w-xl max-h-[60vh] overflow-auto">
          {resultText ? (
            <pre className="whitespace-pre-wrap text-left text-sm text-gray-100">
              {resultText}
            </pre>
          ) : (
            <p className="text-gray-300">추출된 텍스트가 없습니다.</p>
          )}
        </div>

        {resultText && (
          <button
            className="primary-button btn-indigo mb-4"
            onClick={handleCopy}
          >
            텍스트 복사하기
          </button>
        )}

        <button
          className="primary-button btn-gray mt-2"
          onClick={handleRetry}
        >
          다른 이미지 업로드하기
        </button>
      </motion.div>
    </div>
  );
}
