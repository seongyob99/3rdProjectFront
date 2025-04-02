import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/MainPage.css';
import '../styles/utils.css';

export default function MainPage() {
  const navigate = useNavigate();
  const [isExiting, setIsExiting] = useState(false);

  const handleStart = () => {
    setIsExiting(true);
    setTimeout(() => {
      navigate('/question');
    }, 400);
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.section
          className="section-wrapper"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="main-title text-white">
            AI가 당신의 생각을 예측합니다
          </h1>
          <p className="main-description text-gray-300">
            20개의 질문을 통해 당신이 떠올린 인물 또는 사물을 <br /> 추론하는
            인공지능 기반 웹 서비스입니다.
          </p>

          <button
            onClick={handleStart}
            className="primary-button btn-indigo mt-6"
          >
            시작하기
          </button>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
