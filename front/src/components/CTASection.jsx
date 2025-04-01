// components/CTASection
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../styles/CTASection.css';
import '../styles/utils.css'; // ✅ 공통 유틸 스타일 추가

export default function CTASection() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="section-wrapper"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        AI랑 다시 놀아보세요
      </h2>
      <p className="text-lg text-gray-300 mb-8">
        20개의 질문으로 당신의 생각을 또 맞춰볼까요?
      </p>
      <button
        onClick={() => navigate('/question')}
        className="primary-button btn-indigo"
      >
        시작하기
      </button>
    </motion.div>
  );
}
