import Link from "next/link";
import { createSupabaseServerClient } from "@/utils/supabase/server";

export default async function ScientistsPage({ searchParams }) {
  const era = searchParams?.era || "ancient";
  const query = searchParams?.q || "";

  const supabase = createSupabaseServerClient();

  const { data: scientists } = await supabase
    .from("scientists")
    .select("id, name, field")
    .eq("era", era)
    .ilike("name", `%${query}%`);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          era === "ancient"
            ? "url('https://t4.ftcdn.net/jpg/01/33/68/33/360_F_133683384_BU3IWoHd5QTXTPlcC6z3QGoH1zIHGyqH.jpg')"
            : "url('https://t4.ftcdn.net/jpg/01/33/68/33/360_F_133683384_BU3IWoHd5QTXTPlcC6z3QGoH1zIHGyqH.jpg')",
      }}
    >
      {/* DARK GLASS OVERLAY (not grey) */}
      <div className="min-h-screen bg-black/50 backdrop-blur-sm p-8">
        {/* Title */}
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          {era === "ancient" ? "Ancient Indian Scientists 🏛️" : "Modern Indian Scientists 🚀"}
        </h1>

        {/* Search */}
        <form className="max-w-xl mx-auto mb-10">
          <input
            name="q"
            defaultValue={query}
            placeholder="🔍 Search scientist..."
            className="w-full p-3 rounded-xl bg-white/90 text-black outline-none"
          />
        </form>

        {/* List */}
        <div className="max-w-3xl mx-auto space-y-6">
          {scientists?.map((s) => (
            <Link
              key={s.id}
              href={`/scientists/${s.id}`}
              className="block rounded-2xl bg-white/90 p-6 shadow-xl hover:scale-[1.02] transition"
            >
              <h2 className="text-2xl font-semibold">{s.name}</h2>
              <p className="text-gray-700">{s.field}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
