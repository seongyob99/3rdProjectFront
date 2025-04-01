import { motion } from 'framer-motion';


export default function FeatureCards() {
    const features = [
      {
        title: "간편한 사용",
        description: ["예 / 아니오 클릭만으로", "누구나 쉽게 참여 가능"],
        bg: "/black.png",
      },
      {
        title: "AI 기반 추론",
        description: ["딥러닝 모델이", "사용자의 응답을 실시간 분석"],
        bg: "/blue.png",
      },
      {
        title: "모바일 최적화",
        description: ["모든 디바이스에서", "부드럽고 깔끔한 UI 제공"],
        bg: "/green.png",
      },
      {
        title: "높은 정확도",
        description: ["20개 질문 내외로", "대부분의 예측 성공"],
        bg: "/yellow.png",
      },
    ];
  
    return (
        <motion.div
        className="flex flex-col items-center justify-center px-4 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        >
      <section className="bg-black py-24 px-8 text-white">
        <h2 className="text-4xl font-bold text-center mb-16">서비스 특징</h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {features.map((feature, idx) => (
            <div
            key={idx}
            className="rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition duration-300 min-h-[240px] bg-cover bg-center bg-no-repeat flex flex-col justify-center"
            style={{ backgroundImage: `url(${feature.bg})` }}
          >
            <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-base leading-relaxed">
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
  