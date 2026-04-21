"use client";

import { useState } from "react";
import Button from "../atom/Button";
import {Search} from "lucide-react";
import {useSearchParams,useRouter} from "next/navigation";

export default function PreFilterForm() {
 const [location, setLocation] = useState(false);
  const [budget, setBudget] = useState(false);
  const [typeBien, setTypeBien] = useState(false);
  const params = useSearchParams();
  const router = useRouter();

  function sendParams(e){
      e.preventDefault();
      const paramsTest = new URLSearchParams();

      if(location){
          paramsTest.set('city', location.toString());
      }
      if(typeBien){
        paramsTest.set('typeBien', typeBien);
      }
      if(budget){
        paramsTest.set('budget', budget.toString());
      }

      router.push('/biens?' + paramsTest.toString());
  }

    return (
        
      <div className="bg-white px-8 py-8 border border-gray-200 rounded-2xl shadow-lg items-center text-center font-bold ">
        <form onSubmit={sendParams}>
          <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row w-full justify-between gap-6 items-center">
            <div className="flex flex-col flex-1 min-w-0">
            <p className="text-lg w-auto pt-1 pb-2">Localisation</p>
            <input
              type="text"
              placeholder="Ville"
              className="border h-auto mb-2 w-full border p-2 border-gray-200 rounded-2xl shadow"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            </div>
            <label className="flex flex-col flex-1 min-w-0">
                <p className="text-lg pt-1">Type</p>
              <select
                value={typeBien}
                onChange={(e) => setTypeBien(e.target.value)}
                className="mb-2 border p-2 w-full h-auto border-gray-200 rounded-2xl shadow"
              >
                <option value="">Type de bien</option>
                <option value="appartement">Appartement</option>
                <option value="studio">Studio</option>
                <option value="penthouse">Penthouse</option>
                <option value="maison">Maison</option>
              </select>
            </label>
            <div className="flex flex-col flex-1 min-w-0">
            <p className="text-lg w-auto pt-1 pb-2">Budget</p>
            <input
              type="number"
              placeholder="500000"
              className="border h-auto mb-2 w-full border p-2 border-gray-200 rounded-2xl shadow"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            />
            </div>
            <div className="w-full md:w-auto md:justify-items-center lg:w-full xl:w-auto">
            <Button 
            title="Filtrer" 
            type="form" 
            icon={<Search/>}
            />
            </div>
          </div>
        </form>
      </div>
    );
  }

