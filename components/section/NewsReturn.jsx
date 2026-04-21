"use client";
import Button from "../atom/Button";
import { useState } from "react";
import toast from "react-hot-toast";
import { TriangleAlert } from "lucide-react";

export default function FilterForm() {
  const [mail, setMail] = useState("");

  async function submitForm(e) {
    e.preventDefault();
    const data = { email: mail };

    try {
      const response = await fetch("/api/newsletter/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success((t) => (
          <div
            className={`${
              t.visible ? "animate-enter" : "animate-leave"
            } max-w-md bg-success flex items-center gap-x-1.5 py-2 pl-3 pr-4 rounded-lg`}
          >
            <p>Votre abonnement a bien été pris en compte.</p>
          </div>
        ));

        setMail("");
      }
    } catch (err) {
      console.error(err);
      toast.error((t) => (
        <div
          className={`${t.visible ? "animate-enter" : "animate-leave"}
         max-w-md flex items-center gap-x-1.5 py-2 pl-3 pr-4 rounded-lg`}
        >
          <TriangleAlert />
          <p>Une erreur est survenue. Veuillez réessayer.</p>
        </div>
      ));
    }
  }

  return (
    <form onSubmit={submitForm}>
      <input
        type="text"
        placeholder="Votre Email"
        className="border my-4 p-2 w-full text-white border-gray-200 rounded-xl"
        value={mail}
        onChange={(e) => setMail(e.target.value)}
      />
      <Button title={"S'abonner"} type={"blogOutline"} />
    </form>
  );
}
