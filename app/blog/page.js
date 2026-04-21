import { getAllBlogPosts } from "@/lib/blog";
import Button from "@/components/atom/Button";
import { notFound } from "next/navigation";
import { PhoneIcon, MailIcon, Clock } from "lucide-react";
import BlogFilter from "@/components/section/BlogFilter";

export default async function PageBlog() {
  const allBlogs = await getAllBlogPosts();
  if (!allBlogs) return notFound();

  return (
    <main> 
      <div className="bg-immo-secondary">
        <div className="Header text-center pb-20">
          <h1 className="font-bold text-4xl pt-32 pb-6">Tous nos articles</h1>
          <p className="text-gray-400 pb-20">
            Découvrez notre catalogue complet d'articles écrit par des
            professionnels afin de vous accompagner dans vos recherches.
          </p>
          <BlogFilter blogs={allBlogs} />
        </div>
      </div>
      <div className="bg-immo-primary text-white">
        <h2
          className="flex justify-center px-4 min-[426px]:px-0 pt-16 font-bold text-3xl"
          id="Contact"
        >
          Besoin d'informations complémentaires ?
        </h2>
        <p className="flex justify-center px-4 min-[426px]:px-0 pt-3 pb-12">
          Contactez nos experts pour toutes demande d'informations spécifique.
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
        <p className="flex items-center justify-center pb-20">
          <Clock
            size={24}
            color="#FFFFFF"
            className="flex p-1 bg-immo-primary rounded-full "
          />
          Ouvert du lundi au vendredi de 9h à 19h et le samedi de 9h à 17h.{" "}
        </p>
      </div>
    </main>
  );
}
