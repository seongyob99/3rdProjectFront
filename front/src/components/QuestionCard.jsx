// src/components/QuestionCard.jsx
export default function QuestionCard({ question, options }) {
    return (
        <div className="bg-white text-black rounded-xl shadow-lg w-full max-w-md p-8 text-center space-y-6">
            <h2 className="text-xl font-bold">{question}</h2>
            <div className="flex flex-col gap-4">
                {options.map((option, idx) => (
                    <button
                        key={idx}
                        className="py-2 px-4 rounded-full bg-black text-white hover:bg-indigo-600 transition"
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
}
