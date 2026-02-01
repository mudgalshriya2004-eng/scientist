"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createSupabaseClient } from "@/utils/supabase/client";

export default function SignUpPage() {
  const router = useRouter();
  const supabase = createSupabaseClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      setSuccess("Account created! Please sign in ✅");
      setTimeout(() => router.push("/auth/signin"), 2000);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://t4.ftcdn.net/jpg/06/27/85/69/360_F_627856931_jXu5tya5vYOd3rlP6ObYNOvxyp6xtVLY.jpg')",
      }}
    >
      <form
        onSubmit={handleSignUp}
        className="bg-black/60 p-8 rounded-xl w-[90%] max-w-md text-white"
      >
        <h1 className="text-3xl font-bold text-center mb-6">
          📝 Sign Up
        </h1>

        {error && (
          <p className="text-red-400 text-sm mb-3 text-center">
            {error}
          </p>
        )}

        {success && (
          <p className="text-green-400 text-sm mb-3 text-center">
            {success}
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

        <button className="w-full bg-green-500 hover:bg-green-600 p-3 rounded font-bold">
          Create Account
        </button>

        <p
          onClick={() => router.push("/auth/signin")}
          className="mt-4 text-center text-sm cursor-pointer hover:underline"
        >
          Already have an account? Sign In
        </p>
      </form>
    </div>
  );
}
