"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://www.morungexpress.com/uploads/2025/12/39464658_1765358377_202512103602690.JPG')",
      }}
    >
      <div className="bg-black/60 p-10 rounded-xl text-center cursor-pointer">
        <h1
          onClick={() => router.push("/auth/signin")}
          className="text-4xl md:text-6xl font-bold text-white hover:scale-105 transition"
        >
          🇮🇳 Indian Scientists Encyclopedia
        </h1>

        <p className="mt-4 text-gray-200">
          Explore legends of Indian science 🔬✨
        </p>
      </div>
    </div>
  );
}
