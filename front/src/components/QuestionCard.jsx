import { useState } from 'react';

const dummyQuestions = [
  "당신이 생각한 것은 살아있나요?",
  "그것은 유명한 인물인가요?",
  "실제로 존재하나요?",
  // ...20개 임시 질문
];

export default function QuestionCard() {
  const [step, setStep] = useState(0);

  const handleAnswer = (answer) => {
    console.log(`Q${step + 1}: ${dummyQuestions[step]} → ${answer}`);
    if (step < dummyQuestions.length - 1) {
      setStep((prev) => prev + 1);
    } else {
      alert('모든 질문 완료!');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      <div className="text-lg text-gray-400 mb-2">
        질문 {step + 1} / {dummyQuestions.length}
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 max-w-xl">
        {dummyQuestions[step]}
      </h2>

      <div className="flex space-x-4">
        <button
          className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          onClick={() => handleAnswer("예")}
        >
          예
        </button>
        <button
          className="px-6 py-3 bg-red-600 rounded-lg hover:bg-red-700 transition"
          onClick={() => handleAnswer("아니오")}
        >
          아니오
        </button>
        <button
          className="px-6 py-3 bg-gray-600 rounded-lg hover:bg-gray-700 transition"
          onClick={() => handleAnswer("모름")}
        >
          모름
        </button>
      </div>
    </div>
  );
}
