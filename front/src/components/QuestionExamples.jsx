import { motion } from 'framer-motion';

export default function QuestionExamples() {
    return (
        <motion.div
            className="h-full flex flex-col items-center justify-center px-4 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <h2 className="text-3xl font-bold mb-6">예시 질문</h2>
            <ul className="space-y-4 text-lg text-gray-300">
                <li>당신이 생각한 것은 살아있나요?</li>
                <li>그것은 유명한 인물인가요?</li>
                <li>실제로 존재하는 사물인가요?</li>
                <li>인터넷에서 자주 검색되나요?</li>
            </ul>
        </motion.div>
    );
}