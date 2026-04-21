export default function getBlogImagesUrl(fileId) {
  if (!fileId) return "/images/default-placeholder.jpg";
  return `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${fileId}`;
}