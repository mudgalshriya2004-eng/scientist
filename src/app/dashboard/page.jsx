import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[url('https://www.poojn.in/wp-content/uploads/2025/05/Ancient-Indian-Science-to-Modern-Innovations-A-Legacy-of-Discovery.jpeg.jpg')] bg-cover bg-center flex items-center justify-center">
      <div className="bg-black/60 p-10 rounded-2xl text-center text-white w-[90%] max-w-3xl">
        <h1 className="text-4xl font-bold mb-10">
          📚 Indian Scientists Encyclopedia
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link
            href="/scientists?era=ancient"
            className="bg-orange-500 hover:bg-orange-600 p-8 rounded-xl text-2xl font-semibold transition"
          >
            🏛️ Ancient Indian Scientists
          </Link>

          <Link
            href="/scientists?era=modern"
            className="bg-blue-500 hover:bg-blue-600 p-8 rounded-xl text-2xl font-semibold transition"
          >
            🚀 Modern Indian Scientists
          </Link>
        </div>
      </div>
    </div>
  );
}
