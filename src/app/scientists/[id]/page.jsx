import Image from "next/image";
import { notFound } from "next/navigation";
import { createSupabaseServerClient } from "@/utils/supabase/server";

function Paragraphs({ text }) {
  if (!text) return null;

  return text.split("\n\n").map((para, i) => (
    <p key={i} className="mb-5 text-gray-800 leading-relaxed text-lg">
      {para}
    </p>
  ));
}

export default async function ScientistDetail({ params }) {
  const supabase = createSupabaseServerClient();

  const { data: scientist } = await supabase
    .from("scientists")
    .select("*")
    .eq("id", params.id)
    .single();

  if (!scientist) notFound();

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://img.pikbest.com/backgrounds/20250409/lab-test-chemical-chemistry-tube-research-medical-science-background-liquid_11654145.jpg!bwr800)",
      }}
    >
      {/* Blur overlay */}
      <div className="min-h-screen backdrop-blur-md bg-black/40 py-16 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-10 shadow-xl">
          <h1 className="text-4xl font-bold text-center mb-8">
            {scientist.name}
          </h1>

          {scientist.image_url && (
            <div className="flex justify-center mb-10">
              <Image
                src={scientist.image_url}
                alt={scientist.name}
                width={350}
                height={350}
                className="rounded-xl shadow-lg"
                unoptimized
              />
            </div>
          )}

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">Overview</h2>
            <Paragraphs text={scientist.description} />
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">Early Life</h2>
            <Paragraphs text={scientist.early_life} />
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">Education</h2>
            <Paragraphs text={scientist.education} />
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">
              Scientific Contributions
            </h2>
            <Paragraphs text={scientist.contributions} />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Legacy</h2>
            <Paragraphs text={scientist.legacy} />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Biography</h2>
            <Paragraphs text={scientist.biography} />
          </section>
        </div>
      </div>
    </div>
  );
}
