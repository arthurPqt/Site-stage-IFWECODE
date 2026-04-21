import { notFound } from "next/navigation";
import Button from "@/components/atom/Button";
import ContentCard from "@/components/section/content-card";
import Flyer from "@/components/atom/Flyer";
import {
  CarFront,
  Check,
  MapPin,
  Bath,
  Maximize,
  Bed,
  Calendar,
  Layers,
  Phone,
  Mail,
  ChevronRight,
} from "lucide-react";
import ExempleForm from "@/components/section/ExempleForm";
import EnCons from "@/components/section/EnCons";
import getImagesUrl from "@/data/asset";
import getBiensData from "@/data/biens";

export default async function PageId({ params }) { 
  const { id } = await params;
  const biensData = await getBiensData("biens");
  const item = biensData.find((el) => el.id === parseInt(id));
  if (!item) return notFound();

  // Images Directus
  const images = item.fk_gallery ?? [];
  const thumbImage = images.find((img) => img.thumb === true);
  const otherImages = images.filter((img) => img.thumb !== true);
  const mainImageUrl = thumbImage
    ? getImagesUrl(thumbImage.images)
    : "/images/default-placeholder.jpg";

  return (
    <main>
      <div className="flex" aria-label="Breadcrumb">
        <ol className="lg:inline-flex items-center px-26 py-12">
          <li className="inline-flex items-center">
            <a
              href="../"
              className="pr-1 inline-flex items-center text-sm font-medium text-gray-700 hover:text-immo-primary hover:underline"
            >
              Acceuil
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <ChevronRight />
              <a
                href="/biens"
                className="px-1 inline-flex items-center text-sm font-medium text-gray-700 hover:text-immo-primary hover:underline"
              >
                Nos biens
              </a>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <ChevronRight />
              <span className="px-1 inline-flex items-center text-sm font-medium text-immo-primary">
                {item.name} - {item.complement}
              </span>
            </div>
          </li>
        </ol>
      </div>
      <div className="flex flex-col md:flex-row bg-white px-26 py-10 gap-x-10">
        <div>
          <div className={"flex gap-x-2"}>
            {item.like && (
              <Flyer title={"Coup de coeur"} type={"coup-de-coeur"} />
            )}
            <Flyer
              title={item.Buy ? "Vente" : "Location"}
              type={item.Buy ? "achat" : "location"}
            />
          </div>
          <h1 className="font-semibold text-2xl">
            {item.name} - {item.complement}
          </h1>
          <MapPin size={18} className="flex inline" />
          <p className=" px-2 flex inline">{item.complement}</p>
        </div>
        <div className="flex-grow">
          <p className="font-bold text-immo-primary text-3xl lg:text-right">
            {item.price}€ {!item.Buy ? " / mois" : ""}
          </p>
          <p className="lg:text-right">
            {Math.round(item.price / item.Surface)}€ / m²{" "}
            {!item.Buy ? " / mois" : ""}
          </p>
        </div>
      </div>
      <div className="hidden lg:grid lg:grid-flow-col lg:grid-rows-2 gap-4 px-26 py-10">
        <img
          className="col-span-2 row-span-2 rounded-2xl w-full object-cover"
          src={mainImageUrl}
          alt={item.name}
        />
        {otherImages.map((img, i) => (
          <img
            key={i}
            className="rounded-2xl w-full object-cover"
            src={getImagesUrl(img.images)}
            alt={item.name}
          />
        ))}
      </div>
      <div className="lg:hidden px-26 py-10">
        <img
          className="rounded-2xl w-full object-cover mb-4"
          src={mainImageUrl}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {otherImages.map((img, i) => (
            <img
              key={i}
              className="rounded-2xl w-full object-cover"
              src={getImagesUrl(img.images)}
              alt={item.name}
            />
          ))}
        </div>
      </div>
      <div className={"grid md:grid-cols-3 gap-10 pb-10 px-5 lg:px-26"}>
        <div className={"md:col-span-2 flex flex-col gap-8"}>
          <div className="w-full shadow px-9 py-10 border-2 border-gray-200 rounded-2xl">
            <h2 className="font-bold text-2xl pb-4">Caractéristiques</h2>
            <div className="grid grid-cols-2 mb-4">
              <div className="flex items-center gap-x-1">
                <Maximize className="text-immo-primary" />
                <div>
                  <p className="text-sm text-gray-400 font-light">Surface</p>
                  <p className="font-semibold">{item.Surface}</p>
                </div>
              </div>
              <div className="flex items-center gap-x-1">
                <Bed className="text-immo-primary" />
                <div>
                  <p className="text-sm text-gray-400 font-light">Chambres</p>
                  <p className="font-semibold">{item.Bedroom}</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 mb-4">
              <div className="flex items-center gap-x-1">
                <Bath className="text-immo-primary" />
                <div>
                  <p className="text-sm text-gray-400 font-light">
                    Salle de bain
                  </p>
                  <p className="font-semibold">{item.Bathroom}</p>
                </div>
              </div>
              <div className="flex items-center gap-x-1">
                <Calendar className="text-immo-primary" />
                <div>
                  <p className="text-sm text-gray-400 font-light">Année</p>
                  <p className="font-semibold">{item.Year}</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 mb-4">
              {item.Floor && (
                <div className="flex items-center gap-x-1">
                  <Layers className="text-immo-primary" />
                  <div>
                    <p className="text-sm text-gray-400 font-light">Etages</p>
                    <p className="font-semibold">{item.Floor}</p>
                  </div>
                </div>
              )}
              {item.Parking && (
                <div className="flex items-center gap-x-1">
                  <CarFront className="text-immo-primary" />
                  <div>
                    <p className="text-sm text-gray-400 font-light">Parking</p>
                    <p className="font-semibold">Inclus</p>
                  </div>
                </div>
              )}
            </div>
            <p className="font-bold text-2xl pt-4">Description</p>
            <p className="text-justify font-semibold pt-4">
              {item.Description}
            </p>
            <p className="font-bold text-2xl pt-4">Équipements</p>
            <div className="grid grid-cols-2 gap-4 pt-6">
              {item.equipement.map((eq, i) => (
                <div className="flex items-center gap-x-2" key={i}>
                  <Check size={14} className="text-green-700" />
                  <p>{typeof eq === "string" ? eq : eq.item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full shadow px-9 py-10 border-2 border-gray-200 rounded-2xl">
            <h2 className="font-bold text-2xl pb-4">Performance énergétique</h2>
            <EnCons
              energetic={item.energetic}
              GesEmisison={item.GesEmission}
              energeticValue={item.energeticValue}
              GesEmissionValue={item.GesEmissionValue}
            />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="w-full shadow px-7 py-10 border-2 border-gray-200 rounded-2xl">
            <div className="flex flex-col lg:flex-row items-center gap-x-1">
              <img
                className="rounded-full w-24 mb-4 md:mb-0"
                src="/images/conseillere.jpg"
              />
              <div className="flex flex-col gap-1 text-center lg:text-left lg:pl-3">
                <h2 className="font-bold text-xl">Marie Dubois</h2>
                <p className="text-sm text-gray-600">conseillère immobilière</p>
              </div>
            </div>
            <div className="my-4 font-semibold text-right">
              <Button icon={<Phone />} title={"Appeler"} type="conseiller0" />
            </div>
            <div className="my-4 font-semibold text-right">
              <Button
                icon={<Mail />}
                title={"Envoyer un message"}
                type="conseiller1"
              />
            </div>
            <div className="my-4 font-semibold text-right">
              <Button
                icon={<Calendar />}
                title={"Planifier une visite"}
                type="conseiller2"
              />
            </div>
          </div>
          <div className="w-full shadow px-7 py-10 border-2 border-gray-200 rounded-2xl">
            <h2 className="font-bold text-2xl pb-4">Simulateur de prêt</h2>
            <ExempleForm price={item.price} />
          </div>
          <div className="w-full shadow px-7 py-10 border-2 border-gray-200 rounded-2xl">
            <h2 className="font-bold text-2xl pb-4">Informations pratique</h2>
            <div className="flex justify-between pb-2">
              <p className="text-gray-500 font-light">Référence :</p>
              <p className="font-semibold">{item.RefLeg}</p>
            </div>
            <div className="flex justify-between pb-2">
              <p className="text-gray-500 font-light">Charges copropriété :</p>
              <p className="font-semibold">{item.ChargeCopro} €/mois</p>
            </div>
            <div className="flex justify-between pb-2">
              <p className="text-gray-500 font-light">Taxe foncière :</p>
              <p className="font-semibold">{item.Taxe} €/an</p>
            </div>
            <div className="flex justify-between pb-2">
              <p className="text-gray-500 font-light">Disponibilité :</p>
              <p className="font-semibold">{item.Dispo}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-immo-secondary">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <h2 className="pb-12 pt-6 text-2xl font-semibold text-center">
            Biens similaires
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {biensData
              .filter((b) => b.id !== item.id)
              .slice(0, 3)
              .map((b) => {
                const thumb = b.fk_gallery?.find((img) => img.thumb);
                return (
                  <div key={b.id} className="w-full">
                    <ContentCard
                      name={b.name}
                      price={b.price}
                      complement={b.complement}
                      imgSrc={thumb ? getImagesUrl(thumb.images) : null}
                      id={b.id}
                      Buy={b.Buy}
                      like={b.like}
                      bedroom={b.Bedroom}
                      bathroom={b.Bathroom}
                      surface={b.Surface}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </main>
  );
}
