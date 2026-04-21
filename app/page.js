import Button from "@/components/atom/Button";
import ContentCard from "@/components/section/content-card";
import PreFilterForm from "@/components/section/PreFilterForm";
import {
  PhoneIcon,
  Clock,
  UsersRound,
  Handshake,
  MailIcon,
} from "lucide-react";
import getImagesUrl from "@/data/asset";
import getBiensData from "@/data/biens";

const biensData = await getBiensData("biens");

export default  function Page() {
  const onlyLike = biensData.filter((biensData) => biensData.like === true);
  return (
    <main>
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-immo-secondary py-20 px-26 gap-6 items-stretch">
        <div className="flex flex-col justify-between h-full">
          <div>
            <p className="text-3xl font-bold pb-8">
              Trouver votre bien immobilier idéal en France
            </p>
            <p>
              Découvrez notre sélection exclusice de propriétés avec
              l'accompagnement d'experts locaux.
            </p>
          </div>
          <div className="mt-4">
            <PreFilterForm />
          </div>
        </div>
        <div className="h-full">
          <img
            src="/images/image-test.jpg"
            className="rounded-xl w-full object-cover lg:h-full h-64"
          />
        </div>
      </div>
      {onlyLike.length > 0 ? (
        <h2 className="flex justify-center pt-16 pb-12 font-bold text-3xl ">
          Nos biens coup de coeur
        </h2>
      ) : (
        <h2>Aucun coup de coeur</h2>
      )}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div
          className={
            "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:px-22 lg:py-10 flex space-between"
          }
        >
          {onlyLike.map(item => {
  const thumbImage = item.fk_gallery?.find(img => img.thumb === true);
  const selectedImage = thumbImage || item.fk_gallery?.[0];
  const imgUrl = selectedImage
    ? getImagesUrl(selectedImage.images)
    : "/images/default-placeholder.jpg";

  return (
    <ContentCard
      key={item.id}
      name={item.name}
      price={item.price}
      complement={item.complement}
      imgSrc={imgUrl}
      id={item.id}
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
      <div className="bg-immo-secondary">
        <h2
          className="flex justify-center pt-16 font-bold text-3xl"
          id="APropos"
        >
          Pourquoi choisir ImmoFrance ?
        </h2>
        <p className="flex justify-center pt-3 pb-12">
          Notre expertise à votre service depuis plus de 15 ans.
        </p>
        <div
          className={
            "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-35 py-10 text-center justify-items-center"
          }
        >
          <div className="mb-4 justify-items-center">
            <UsersRound
              size={50}
              color="#FFFFFF"
              className="p-1 bg-immo-primary rounded-full "
            />
            <h2 className="pt-16 pb-12 font-bold text-3xl ">
              Expertise locale
            </h2>
            <p>
              Nos agents connaissent parfaitement le marché local et vous
              accompagnent dans tous vos projets immobiliers.
            </p>
          </div>
          <div className="mb-4 justify-items-center">
            <Clock
              size={50}
              color="#FFFFFF"
              className="p-1 bg-immo-primary rounded-full "
            />
            <h2 className="pt-16 pb-12 font-bold text-3xl ">Réactivité</h2>
            <p>
              Réponse garantie sous 24h et organisation de visites dans les
              meilleurs délais pour ne pas manquer l'opportunité.
            </p>
          </div>
          <div className="mb-4 justify-items-center">
            <Handshake
              size={50}
              color="#FFFFFF"
              className="p-1 bg-immo-primary rounded-full "
            />
            <h2 className="pt-16 pb-12 font-bold text-3xl ">accompagnement</h2>
            <p>
              De la recherche à la signature, nous vous accompagnons à chauqe
              étape de votre projet immobilier.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-immo-primary text-white">
        <h2
          className="flex justify-center px-4 min-[426px]:px-0 pt-16 font-bold text-3xl"
          id="Contact"
        >
          Prêt à trouver votre bien idéal ?
        </h2>
        <p className="flex justify-center px-4 min-[426px]:px-0 pt-3 pb-12">
          Contactez nos experts pour un accompagnement personnalisé.
        </p>
        <div className="flex flex-col min-[420px]:flex-row items-center justify-center gap-2 pb-7">
          <a href="#" className="w-full max-w-xs min-[420px]:w-auto">
            <Button
              title={"Nous appeler"}
              type={"outline"}
              icon={<PhoneIcon />}
            />
          </a>
          <a href="#" className="w-full max-w-xs min-[420px]:w-auto">
            <Button
              title={"Nous écrire"}
              type={"secondary"}
              icon={<MailIcon />}
            />
          </a>
        </div>
      </div>
    </main>
  );
}
