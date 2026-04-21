"use client";

import { useState, useMemo } from "react";
import Button from "@/components/atom/Button";
import getBlogImagesUrl from "@/lib/assetBlog";

export default function BlogFilter({ blogs }) {
  // extrait toutes les catégories disponibles
  const categories = useMemo(() => {
    const set = new Set();
    blogs.forEach((b) =>
      b.post_type.forEach((t) => set.add(t.type.toLowerCase()))
    );
    return Array.from(set);
  }, [blogs]);

  // filtres actifs
  const [activeFilters, setActiveFilters] = useState([]);

  // toggle filtre
  const toggleFilter = (cat) => {
    setActiveFilters((prev) =>
      prev.includes(cat)
        ? prev.filter((c) => c !== cat) 
        : [...prev, cat]
    );
  };   

  // reset complet
  const resetFilters = () => setActiveFilters([]);

  // filtrage intelligent
  const filtered = useMemo(() => {
    if (activeFilters.length === 0) return blogs;

    return blogs.filter((b) =>
      b.post_type.some((t) =>
        activeFilters.includes(t.type.toLowerCase())
      )
    );
  }, [activeFilters, blogs]);

  return (
    <section className="max-w-7xl mx-auto px-6">
      <div className="flex flex-wrap gap-3 bg-white shadow-md rounded-3xl justify-center p-5 mb-8">
        {categories.map((cat) => {
          const isActive = activeFilters.includes(cat);
          return (
            <button
              key={cat}
              onClick={() => toggleFilter(cat)}
              className={`px-4 py-2 rounded-xl border  capitalize transition ${
                isActive
                  ? "bg-immo-primary text-white hover:bg-red-600 border-immo-primary"
                  : "bg-white hover:bg-gray-200 border-gray-300"
              }`} 
            >
              {cat}
            </button>
          );
        })}
        {activeFilters.length > 0 && (
          <button
            onClick={resetFilters}
            className="px-4 py-2 rounded-xl border bg-gray-100 hover:bg-immo-primary hover:text-white border-gray-300"
          >
            Réinitialiser
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {filtered.map((b) => {
          const intro = b.bl_gallery.find((img) => img.type === "intro");
          return (
            <div key={b.id} className="w-full h-full">
              <div className="max-w-sm h-full overflow-hidden shadow-lg rounded-2xl bg-white flex flex-col">

                {intro && (  
                  <img
                    className="w-full h-60 object-cover"
                    alt={b.title}
                    src={getBlogImagesUrl(intro.images)}
                  />
                )}
                <div className="flex gap-2 px-4 pt-2">
                  {b.post_type.map((t) => (
                    <span
                      key={t.type}
                      className="px-2 py-1 bg-gray-200 rounded-xl text-sm"
                    >
                      {t.type}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col flex-grow p-6">
                  <h5 className="font-bold text-xl mb-2">{b.title}</h5>
                  <p className="text-base mb-4">{b.catchphrase}</p>
                  <div className="mt-auto">
                    <a
                      href={`/blog/${b.id}`}
                      className="flex items-center gap-x-4 px-2 py-1 mb-4"
                    >
                      <Button title={"Lire l'article"} />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>
      {filtered.length === 0 && (
        <p className="text-center py-20 text-gray-500">
          Aucun article ne correspond aux filtres sélectionnés.
        </p>
      )}
    </section>
  );
}