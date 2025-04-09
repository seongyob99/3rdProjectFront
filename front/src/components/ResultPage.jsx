import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/utils.css';
import '../styles/ResultPage.css'; // 추가 스타일 분리

export default function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const resultText = location.state?.resultText || '';
  const previewURL = location.state?.previewURL || ''; // ✅ 업로드한 이미지 경로 받기

  const handleRetry = () => navigate('/upload');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(resultText);
      alert('텍스트가 복사되었습니다!');
    } catch {
      alert('복사에 실패했습니다.');
    }
  };

  const handleDownload = () => {
    const blob = new Blob([resultText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'ocr_result.txt';
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* 배경 */}
      <img src="/bg3.png" alt="bg" className="absolute inset-0 w-full h-full object-cover z-0" />
      <div className="absolute inset-0 bg-black/40 backdrop-blur z-10" />

      {/* 콘텐츠 */}
      <motion.div
        className="relative z-20 flex flex-col items-center justify-center h-full text-white px-4 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-6 drop-shadow-lg">
          텍스트 추출 결과 🎉
        </h2>

        {/* 이미지 + 텍스트 나란히 */}
        <div className="result-wrapper mb-6">
          <div className="result-image-box">
            {previewURL ? (
              <img src={previewURL} alt="업로드한 이미지" className="rounded-xl shadow-md" />
            ) : (
              <p className="text-gray-300">이미지가 없습니다.</p>
            )}
          </div>

          <div className="result-text-box">
            {resultText ? (
              <pre className="text-sm text-left whitespace-pre-wrap text-gray-100">
                {resultText}
              </pre>
            ) : (
              <p className="text-gray-300">추출된 텍스트가 없습니다.</p>
            )}
          </div>
        </div>

        {/* 버튼 */}
        <div className="flex flex-col md:flex-row gap-4">
          <button className="primary-button btn-indigo" onClick={handleCopy}>
            텍스트 복사하기
          </button>
          <button className="primary-button btn-green" onClick={handleDownload}>
            TXT로 다운로드
          </button>
          <button className="primary-button btn-gray" onClick={handleRetry}>
            다른 이미지 업로드하기
          </button>
        </div>
      </motion.div>
    </div>
  );
}
