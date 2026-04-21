import Button from "@/components/atom/Button";
import Flyer from "@/components/atom/Flyer";
import Link from "next/link";
import { BedDouble } from "lucide-react";
import { Bath } from "lucide-react";
import { RulerDimensionLine } from "lucide-react";

export default function ContentCard({
  name,
  price,
  complement,
  imgSrc,
  id,
  Buy,
  like,
  bedroom,
  bathroom,
  surface,
}) {
  return (
    <div className="max-w-sm overflow-hidden shadow-lg rounded-2xl bg-white w-fit relative flex flex-col">
      <img
        className={"w-full"}
        alt="alt de la photo"
        height="140"
        src={imgSrc}
      />

      <div className={"absolute top-0 right-0 w-full h-[140px]"}>
        <div className={" flex flex-row-reverse justify-between px-4 pt-2"}>
          <Flyer
            title={Buy > 0 ? "Vente" : "Location"}
            type={Buy > 0 ? "achat" : "location"}
          />
          {like && <Flyer title={"Coups de coeur"} type={"coup-de-coeur"} />}
        </div>
      </div>
      <div className="p-6 flex-grow">
        <div className={"flex items-center gap-x-4 "}>
          <h5 className={"font-bold text-xl mb-2 flex-grow px-2"}>{name}</h5>
          <p
            className={
              "text-immo-primary font-semibold text-base mb-4 pr-2 pt-2 flex-grow text-right"
            }
          >
            {price}€ {!Buy ? " / mois" : ""}
          </p>
        </div>

        <p className={"text-gray-700 text-base mb-4 px-2 py-1"}>{complement}</p>
        <div className={"flex items-center gap-x-4 px-2 py-1 mb-4"}>
          <div className={"flex gap-x-2 items-center"}>
            <BedDouble size={12} /> <p>{bedroom} ch.</p>
          </div>
          <div className={"flex gap-x-2 items-center"}>
            <Bath size={12} />
            <p>{bathroom} sdb</p>
          </div>
          <div className={"flex gap-x-2 items-center"}>
            <RulerDimensionLine size={12} /> <p>{surface} m²</p>
          </div>
        </div>
      </div>
      <Link
        href={`/biens/${id}`}
        className={"flex items-center gap-x-4 px-2 py-1 mb-4"}
      >
        <Button title={"Voir le bien"} />
      </Link>
    </div>
  );
}
