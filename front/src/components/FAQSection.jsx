import { motion } from 'framer-motion';

export default function FAQSection() {
    return (
        <motion.div
            className="h-full flex flex-col items-center justify-center px-4 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <h2 className="text-3xl font-bold mb-6">자주 묻는 질문</h2>
            <div className="space-y-6 max-w-xl text-gray-300 text-left">
                <div>
                    <p className="font-semibold text-white">Q. 질문은 몇 개인가요?</p>
                    <p>A. 총 20개의 질문을 통해 추측합니다.</p>
                </div>
                <div>
                    <p className="font-semibold text-white">Q. 결과는 어떻게 도출되나요?</p>
                    <p>A. 질문 응답 데이터를 기반으로 가장 유사한 항목을 추론합니다.</p>
                </div>
                <div>
                    <p className="font-semibold text-white">Q. 모바일에서도 사용 가능한가요?</p>
                    <p>A. 네, 반응형 UI로 모바일에서도 원활하게 작동합니다.</p>
                </div>
            </div>
        </motion.div>
    );
}