"use client";

import { useEffect, useState } from "react";
import Button from "../atom/Button";
import ContentCard from "../section/content-card";
import { Search } from "lucide-react";
import { useSearchParams } from "next/navigation";
import getImagesUrl from "@/data/asset";

export default function FilterForm({ biensServ }) {
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("");
  const [typeBien, setTypeBien] = useState("");
  const [typeVente, setTypeVente] = useState("");
  const [chambre, setChambre] = useState("");
  const [tri, setTri] = useState("");

  const [results, setResults] = useState([]);
  const [allBiens, setAllBiens] = useState([]);

  const params = useSearchParams();

 

  useEffect(() => {
    if (!biensServ) return;

    console.log("Données Directus :", biensServ);

    setAllBiens(biensServ);

    const city = params.get("city") ?? "";
    const budgetParam = params.get("budget") ?? "";
    const typeParam = params.get("typeBien") ?? "";

    setLocation(city);
    setBudget(budgetParam);
    setTypeBien(typeParam);

    let temp = [...biensServ];

    if (city) temp = temp.filter((el) => el.City === city);
    if (budgetParam) temp = temp.filter((el) => el.price < Number(budgetParam));
    if (typeParam) temp = temp.filter((el) => el.Type === typeParam);

    setResults(temp);
  }, [params, biensServ]);

  function submitForm(e) {
    e.preventDefault();

    let temp = [...allBiens];

    if (chambre) temp = temp.filter((el) => el.Bedroom === Number(chambre));
    if (typeVente)
      temp = temp.filter((el) => el.Buy === (typeVente === "vente"));
    if (typeBien) temp = temp.filter((el) => el.Type === typeBien);
    if (location) temp = temp.filter((el) => el.City === location);
    if (budget) temp = temp.filter((el) => el.price < Number(budget));

    // Tri
    if (tri === "1") temp.sort((a, b) => a.price - b.price);
    if (tri === "2") temp.sort((a, b) => b.price - a.price);

    setResults(temp);
  }

  return (
    <div>
      <div className="mb-8 mt-8 mx-26 py-6 px-6 border border-gray-200 rounded-2xl shadow font-bold">
        <form onSubmit={submitForm}>
          <div className="flex flex-col lg:flex-row lg:flex-wrap lg:items-center lg:justify-between w-full justify-start gap-6">
            <label className="w-full lg:w-auto min-w-0">
              <select
                value={typeBien}
                onChange={(e) => setTypeBien(e.target.value)}
                className="mb-2 w-full border p-2 border-gray-200 rounded-2xl shadow"
              >
                <option value="">Type de bien</option>
                <option value="appartement">Appartement</option>
                <option value="studio">Studio</option>
                <option value="penthouse">Penthouse</option>
                <option value="maison">Maison</option>
              </select>
            </label>
            <label className="w-full lg:w-auto min-w-0">
              <select
                value={typeVente}
                onChange={(e) => setTypeVente(e.target.value)}
                className="mb-2 w-full border p-2 border-gray-200 rounded-2xl shadow"
              >
                <option value="">À vendre / À louer</option>
                <option value="vente">À vendre</option>
                <option value="locatif">À louer</option>
              </select>
            </label>
            <input
              type="text"
              placeholder="Ville"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="border mb-2 p-2 w-full lg:w-auto border-gray-200 rounded-2xl shadow"
            />
            <input
              type="number"
              placeholder="Budget max"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="border mb-2 p-2 w-full lg:w-auto border-gray-200 rounded-2xl shadow"
            />
            <label className="w-full lg:w-auto min-w-0">
              <select
                value={chambre}
                onChange={(e) => setChambre(e.target.value)}
                className="mb-2 w-full border p-2 border-gray-200 rounded-2xl shadow"
              >
                <option value="">Chambres</option>
                <option value="1">1 Chambre</option>
                <option value="2">2 Chambres</option>
                <option value="3">3 Chambres</option>
                <option value="4">4 Chambres</option>
                <option value="5">5 Chambres</option>
              </select>
            </label>
            <div className="w-full lg:w-auto">
              <Button title="Filtrer" type="form" icon={<Search />} />
            </div>
          </div>
          <hr className="mt-6 border-gray-300" />
          <div className="mt-4 flex flex-col lg:flex-row items-center justify-between gap-4">
            <p className="results-count">{results.length} biens trouvés</p>
            <select
              value={tri}
              onChange={(e) => setTri(e.target.value)}
              className="w-full lg:w-64 border p-2 border-gray-200 rounded-2xl shadow"
            >
              <option value="">Trier par</option>
              <option value="1">Prix croissant</option>
              <option value="2">Prix décroissant</option>
            </select>
          </div>
        </form>
      </div>
      <div className="bg-immo-secondary max-w-auto mx-auto px-6 py-10 justify-items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:px-22 lg:py-10 lg flex space-between">
          {results.map((item) => {
            const thumbImage = item.fk_gallery?.find(
              (img) => img.thumb === true
            );
            const selectedImage = thumbImage || item.fk_gallery?.[0];
            const imgUrl = selectedImage
              ? getImagesUrl(selectedImage.images)
              : "/images/default-placeholder.jpg";
            console.log(thumbImage);
            console.log(selectedImage);
            console.log(item);
            return (
              <ContentCard
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                complement={item.complement}
                imgSrc={imgUrl}
                Buy={item.Buy}
                like={item.like}
                bedroom={item.Bedroom}
                bathroom={item.Bathroom}
                surface={item.Surface}
              />
            );
          })}
        </div>
      </div>
      {results.length === 0 && (
        <p className="bg-immo-secondary font-semibold text-gray-500 pb-8 text-center">
          Aucun bien trouvé
        </p>
      )}
    </div>
  );
}
