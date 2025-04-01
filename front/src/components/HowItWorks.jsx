// components/HowItWorks

import { motion } from 'framer-motion';
import '../styles/HowItWorks.css';
import '../styles/utils.css'; // ✅ 공통 유틸 추가

export default function HowItWorks() {
  const steps = [
    {
      title: '1. 생각하기',
      description: '사용자가 마음속에 사람/사물을 떠올립니다.',
    },
    {
      title: '2. 질문 시작',
      description: '시스템이 20개의 질문을 순차적으로 제시합니다.',
    },
    {
      title: '3. 응답하기 ',
      description: "사용자는 질문에 대해 '예 / 아니오 / 모름'으로 응답합니다.",
    },
    {
      title: '4. 추론하기',
      description: '모든 응답은 내부 추론 알고리즘에 입력됩니다.',
    },
    {
      title: '5. 예측 결과',
      description: '가장 가능성 높은 후보를 예측하여 결과를 보여줍니다.',
    },
    {
      title: '6. 피드백',
      description: '결과가 맞았는지 확인 후 다시 시작할 수 있습니다.',
    },
  ];

  return (
    <motion.div
      className="section-wrapper"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">어떻게 작동하나요?</h2>
      <div className="howitworks-grid">
        {steps.map((step, idx) => (
          <div key={idx} className="howitworks-card">
            <h3 className="howitworks-card-title">{step.title}</h3>
            <p className="howitworks-card-desc">{step.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
