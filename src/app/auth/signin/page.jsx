"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createSupabaseClient } from "@/utils/supabase/client";

export default function SignInPage() {
  const router = useRouter();
  const supabase = createSupabaseClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://thumbs.dreamstime.com/b/scientists-experimenting-research-molecule-model-dna-science-background-molecules-atoms-laboratory-medical-197013223.jpg')",
      }}
    >
      <form
        onSubmit={handleSignIn}
        className="bg-black/60 p-8 rounded-xl w-[90%] max-w-md text-white"
      >
        <h1 className="text-3xl font-bold text-center mb-6">
          🔐 Sign In
        </h1>

        {error && (
          <p className="text-red-400 text-sm mb-3 text-center">
            {error}
          </p>
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded mb-4 text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded mb-6 text-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="w-full bg-orange-500 hover:bg-orange-600 p-3 rounded font-bold">
          Sign In
        </button>

        <p
          onClick={() => router.push("/auth/signup")}
          className="mt-4 text-center text-sm cursor-pointer hover:underline"
        >
          Don’t have an account? Sign Up
        </p>
      </form>
    </div>
  );
}
