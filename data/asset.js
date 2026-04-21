export default function getImagesUrl(fileId) {
  if (!fileId) return null;
  return `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${fileId}`;
}