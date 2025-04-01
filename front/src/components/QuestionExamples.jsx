// components/QuestionExamples
import { motion } from 'framer-motion';
import '../styles/QuestionExamples.css';
import '../styles/utils.css'; // ✅ 공통 유틸 스타일 추가

export default function QuestionExamples() {
  return (
    <motion.div
      className="section-wrapper"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">예시 질문</h2>
      <ul className="examples-list">
        <li>당신이 생각한 것은 살아있나요?</li>
        <li>그것은 유명한 인물인가요?</li>
        <li>실제로 존재하는 사물인가요?</li>
        <li>인터넷에서 자주 검색되나요?</li>
      </ul>
    </motion.div>
  );
}
