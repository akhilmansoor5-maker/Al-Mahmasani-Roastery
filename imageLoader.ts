export default function imageLoader({ src }: { src: string }) {
  const encoded = src.split("/").map((seg) => encodeURIComponent(seg)).join("/");
  return `/Al-Mahmasani-Roastery${encoded}`;
}
