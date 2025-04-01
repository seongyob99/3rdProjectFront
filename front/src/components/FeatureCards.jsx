// components/FeatureCards

import { motion } from 'framer-motion';
import '../styles/FeatureCards.css';
import '../styles/utils.css'; // ✅ 공통 유틸 추가

export default function FeatureCards() {
  const features = [
    {
      title: '간편한 사용',
      description: ['예 / 아니오 클릭만으로', '누구나 쉽게 참여 가능'],
      bg: '/black.png',
    },
    {
      title: 'AI 기반 추론',
      description: ['딥러닝 모델이', '사용자의 응답을 실시간 분석'],
      bg: '/blue.png',
    },
    {
      title: '모바일 최적화',
      description: ['모든 디바이스에서', '부드럽고 깔끔한 UI 제공'],
      bg: '/green.png',
    },
    {
      title: '높은 정확도',
      description: ['20개 질문 내외로', '대부분의 예측 성공'],
      bg: '/yellow.png',
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
      <section className="feature-section">
        <h2 className="section-title">서비스 특징</h2>
        <div className="feature-grid">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="feature-card"
              style={{ backgroundImage: `url(${feature.bg})` }}
            >
              <h3 className="feature-card-title">{feature.title}</h3>
              <p className="feature-card-desc">
                {Array.isArray(feature.description)
                  ? feature.description.map((line, i) => (
                      <span key={i}>
                        {line}
                        <br />
                      </span>
                    ))
                  : feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
