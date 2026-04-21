"use client";
import { useEffect, useRef, useState } from "react";
import getBlogImagesUrl from "@/lib/assetBlog";
import NewsReturn from "@/components/section/NewsReturn";
import { Mail } from "lucide-react";

export default function SidebarSticky({ onlyLike, item }) {
  const firstRef = useRef(null);
  const [secondTop, setSecondTop] = useState(0);

  useEffect(() => {
    function updateTop() {
      if (firstRef.current) {
        const firstHeight = firstRef.current.offsetHeight;
        setSecondTop(firstHeight + 24);
      }
    }

    // Calcul initial
    updateTop();

    // Recalcul si fenêtre change taille
    window.addEventListener("resize", updateTop);
    return () => window.removeEventListener("resize", updateTop);
  }, []);

  return (
    <div className="lg:sticky lg:top-6 flex flex-col gap-6">
      <div className="w-full shadow px-7 py-10 border-2 border-gray-200 rounded-2xl">
        <p className="font-semibold pb-5">Articles populaires</p>
        <div className="flex flex-col gap-4">
          {onlyLike
            .filter((b) => b.id !== item.id)
            .slice(0, 3)
            .map((b) => {
              const bIntroImage = b.bl_gallery.find(
                (img) => img.type === "intro"
              );
              return (
                <a href={b.id} key={b.id} >
                <div className="flex items-center gap-4 hover:bg-gray-200 hover:rounded-xl">
                  {bIntroImage && (
                    <img
                      className="w-14 h-14 rounded-lg object-cover"
                      alt={b.title}
                      src={getBlogImagesUrl(bIntroImage.images)}
                    />
                  )}
                  <div className="flex flex-col">
                    <h5 className="font-semibold text-sm leading-tight">
                      {b.title}
                    </h5>
                    <p className="text-xs text-gray-400">{b.date}</p>
                  </div>
                </div>
                </a>
              );
            })}
        </div>
      </div>
      <div className="w-full bg-immo-primary text-white shadow px-7 py-10 border-2 border-gray-200 rounded-2xl">
        <div className="flex items-center gap-2 pb-4">
          <Mail size={40} />
          <p className="font-bold text-xl">Newsletter</p>
        </div>
        <p className="text-sm pb-4">
          Recevez nos derniers articles et conseils immobiliers
        </p>
        <NewsReturn />
      </div>
    </div>
  );
}
