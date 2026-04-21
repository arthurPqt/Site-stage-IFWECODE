"use client";

import { useState } from "react";
import Button from "../atom/Button";

export default function ExempleForm({ price }) {
    const [Price, setPrice] = useState(price || "");
    const [apport, setApport] = useState("");
    const [year, setYear] = useState(10);
    const [result, setResult] = useState(null);
    const [displayValue, setDisplayValue] = useState("");

    function submitForm(e) {
        e.preventDefault();

        const p = parseFloat(Price) || 0;
        const a = parseFloat(apport) || 0;
        const y = parseInt(year, 10) || 1;

        //calcul : montant restant / nombre de mois 
        //const montant = p - a;
        const monthly = (p-a) / (y * 12);

        //setResult(monthly); // stocke le résultat brut
        setDisplayValue(monthly.toFixed(2)); // affichage formaté
    }

    return (
        <div>
        <div>
        <form onSubmit={submitForm}>
            <p className="text-lg pt-1">Prix du bien</p>
            <input
                type="number"
                placeholder="Prix du bien"
                className="border w-full mb-2 border p-2 border-gray-200 rounded-2xl shadow"
                value={Price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <p className="text-lg pt-1">Apport personnel</p>
            <input
                type="number"
                placeholder="Apport personnel"
                className="border w-full mb-2 border p-2 border-gray-200 rounded-2xl shadow"
                value={apport}
                onChange={(e) => setApport(e.target.value)}
            />
            <label>
                <p className="text-lg pt-1">Durée (Années)</p>
                <select value={year} onChange={(e) => setYear(e.target.value)} className="w-full mb-2 border p-2 border-gray-200 rounded-2xl shadow">
                    <option value="10">10 ans</option>
                    <option value="15">15 ans</option>
                    <option value="20">20 ans</option>
                    <option value="25">25 ans</option>
                    <option value="30">30 ans</option>
                </select>
            </label>

            {/* Bouton de soumission */}
            <Button title="Calculer" type="submit" />

            <div className="flex  flex-col items-center gap-1 pt-5 bg-gray-100 p-4 rounded-2xl mt-4">
                <p className="text-sm">Mensualité estimé : </p>
                <p className="font-semibold text-immo-primary">{displayValue} €/Mois</p>
            </div>
        </form>
        </div>
      
       </div>
    );
}
//}
