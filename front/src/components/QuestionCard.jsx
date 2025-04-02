import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../styles/QuestionCard.css';
import '../styles/utils.css';

const dummyQuestions = [
  "당신이 생각한 것은 살아있나요?",
  "그것은 유명한 인물인가요?",
  "실제로 존재하나요?",
  // ...20개 임시 질문
];

export default function QuestionCard() {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const handleAnswer = (answer) => {
    console.log(`Q${step + 1}: ${dummyQuestions[step]} → ${answer}`);
    if (step < dummyQuestions.length - 1) {
      setStep((prev) => prev + 1);
    } else {
      navigate('/result'); // ✅ 마지막 질문 후 결과 페이지로 이동
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* ✅ 전체 배경 이미지 삽입 */}
      <img
        src="/bg2.jpg"
        alt="AI Question Background"
        className="absolute inset-0 w-full h-full object-cover brightness-50 pointer-events-none z-0"
      />

      {/* ✅ 질문 UI */}
      <div className="question-wrapper relative z-10">
        <div className="question-progress">
          질문 {step + 1} / {dummyQuestions.length}
        </div>

        <AnimatePresence mode="wait">
          <motion.h2
            key={step}
            className="question-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {dummyQuestions[step]}
          </motion.h2>
        </AnimatePresence>

        <div className="question-button-group">
          <button className="primary-button btn-blue" onClick={() => handleAnswer("예")}>
            예
          </button>
          <button className="primary-button btn-red" onClick={() => handleAnswer("아니오")}>
            아니오
          </button>
          <button className="primary-button btn-gray" onClick={() => handleAnswer("모름")}>
            모름
          </button>
        </div>
      </div>
    </div>
  );
}
