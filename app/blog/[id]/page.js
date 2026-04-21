import { getAllBlogPosts } from "@/lib/blog";
import getBlogImagesUrl from "@/lib/assetBlog";
import SidebarSticky from "@/components/section/SideBarSticky";
import Button from "@/components/atom/Button";
import { notFound } from "next/navigation";
import {
  Dot,
  ChevronRight,
  Lightbulb,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react";

export default async function PageId({ params }) {
  const { id } = await params;
  const allBlogs = await getAllBlogPosts();
  const onlyLike = allBlogs.filter((blogs) => blogs.like === true);
  const item = allBlogs.find((blog) => blog.id === parseInt(id));
  if (!item) return notFound();

  // Images globales
  const introImage = item.bl_gallery.find((img) => img.type === "intro");
  const authorImage = item.bl_gallery.find((img) => img.type === "author");

  return (
    <main>
      <div className="flex" aria-label="Breadcrumb">
        <ol className="lg:inline-flex items-center px-26 py-12">
          <li className="inline-flex items-center">
            <a
              href="../"
              className="pr-1 inline-flex items-center text-sm font-medium text-gray-700 hover:text-immo-primary hover:underline"
            >
              Accueil
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <ChevronRight />
              <a
                href="../blog/"
                className="px-1 inline-flex items-center text-sm font-medium text-gray-700 hover:text-immo-primary hover:underline"
              >
                Nos blogs
              </a>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <ChevronRight />
              <span className="px-1 inline-flex items-center text-sm font-medium text-immo-primary">
                {item.title}
              </span>
            </div>
          </li>
        </ol>
      </div>
      <div className="grid md:grid-cols-3 gap-10 pb-10 px-5 lg:px-26">
        <div className="md:col-span-2 flex flex-col gap-8">
          <div className="inline-flex items-center gap-2">
            {item.post_type.slice(0, 1).map((type) => (
              <p
                key={type.type}
                className="p-1 bg-immo-primary rounded-xl font-semibold text-white inline-flex"
              >
                {type.type}
              </p>
            ))}
            <p>{item.date}</p>
            <Dot size={24} className="inline-flex" />
            <p>{item.readTime} min de lecture</p>
          </div>
          <h2 className="font-bold text-3xl">{item.title}</h2>
          <div className="flex items-center gap-x-2">
            {authorImage && (
              <img
                src={getBlogImagesUrl(authorImage.images)}
                className="w-12 h-12 rounded-full"
                alt={item.author}
              />
            )}
            <div>
              <p className="font-semibold">{item.author}</p>
              <p className="text-sm text-gray-400 font-light">
                {item.author_func}
              </p>
            </div>
          </div>
          {introImage && (
            <div className="h-112 overflow-hidden rounded-t-2xl">
              <img
                src={getBlogImagesUrl(introImage.images)}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <p className="mt-4">{item.intro}</p>
          {item.blog_parts.map((part) => (
            <div key={part.id} className="mt-10">
              <h3 className="text-3xl font-bold mt-4">{part.title}</h3>
              <p className="mt-4 whitespace-pre-line">{part.text}</p>
              {part.bl_gallery?.length > 0 && (
                <div
                  className={`grid gap-4 ${
                    part.bl_gallery.length === 1 ? "grid-cols-1" : "grid-cols-2"
                  }`}
                >
                  {part.bl_gallery.map((img) => (
                    <img
                      key={img.id}
                      src={getBlogImagesUrl(img.images)}
                      alt={part.title}
                      className="w-full h-64 object-cover rounded-xl"
                    />
                  ))}
                </div>
              )}
              {part.supplementary_title && (
                <div className="bg-gray-100 p-4 rounded-lg mt-6">
                  <div className="inline-flex pb-4">
                    <Lightbulb color="#B20D30" />
                    <h4 className="pl-2 font-semibold">
                      {part.supplementary_title}
                    </h4>
                  </div>
                  <p>{part.suuplementary_text}</p>
                </div>
              )}
            </div>
          ))}
          <div className="mt-10 p-2 bg-immo-primary text-white rounded-xl">
            <p className="font-semibold mb-3">En conclusion</p>
            <p>{item.conclusion}</p>
          </div>
          <div className="inline-flex pt-9 border-t border-gray-400 items-center gap-2">
            <p>Tags: </p>
            {item.post_type.map((type) => (
              <p
                key={type.type}
                className="px-2 py-1 bg-gray-200 rounded-xl inline-flex"
              >
                {type.type}
              </p>
            ))}
          </div>
          <div className="inline-flex pb-9 border-b border-gray-400 items-center gap-2">
            <p>Partager : </p>
            <a href="#" className="p-2 rounded-full hover:bg-gray-400 bg-gray-200">
              <Facebook size={20} />
            </a>
            <a href="#" className="p-2 rounded-full hover:bg-gray-400 bg-gray-200">
              <Instagram size={20} />
            </a>
            <a href="#" className="p-2 rounded-full hover:bg-gray-400 bg-gray-200">
              <Linkedin size={20} />
            </a>
            <a href="#" className="p-2 rounded-full hover:bg-gray-400 bg-gray-200">
              <Mail size={20} />
            </a>
          </div>
          <div className="inline-flex p-6 rounded-xl border border-gray-400 items-center gap-2">
            {authorImage && (
              <img
                src={getBlogImagesUrl(authorImage.images)}
                className="w-12 h-12 rounded-full"
                alt={item.author}
              />
            )}
            <div>
              <p className="font-semibold">{item.author}</p>
              <p className="text-sm font-light">{item.author_description}</p>
            </div>
          </div>
        </div>
        <div>
          <SidebarSticky onlyLike={onlyLike} item={item} />
        </div>
      </div>
      <div className="bg-immo-secondary">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <h2 className="pb-12 pt-6 text-2xl font-semibold text-center">
            Articles similaires
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {allBlogs
              .filter((b) => b.id !== item.id)
              .slice(0, 3)
              .map((b) => {
                const bIntroImage = b.bl_gallery.find(
                  (img) => img.type === "intro"
                );
                return (
                  <div key={b.id} className="w-full h-full">
                    <div className="max-w-sm h-full overflow-hidden shadow-lg rounded-2xl bg-white flex flex-col">
                      {bIntroImage && (
                        <img
                          className="w-full h-60 object-cover"
                          alt={b.title}
                          src={getBlogImagesUrl(bIntroImage.images)}
                        />
                      )}
                      <div className="flex gap-4 px-4 pt-2">
                        {b.post_type.map((type) => (
                          <p
                            key={type.type}
                            className="px-2 py-1 bg-gray-200 rounded-xl inline-flex"
                          >
                            {type.type}
                          </p>
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
        </div>
      </div>
    </main>
  );
}
