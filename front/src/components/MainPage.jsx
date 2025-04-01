export default function MainPage() {
    return (
      <section className="bg-black text-white py-32 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          AI가 당신의 생각을 예측합니다
        </h1>
        <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
          20개의 질문을 통해 당신이 떠올린 인물 또는 사물을 <br/> 추론하는
          인공지능 기반 웹 서비스입니다.
        </p>
        <a
          href="/start"
          className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg transition"
        >
          시작하기
        </a>
      </section>
    );
  }
  