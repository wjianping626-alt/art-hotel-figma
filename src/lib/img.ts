export function img(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const base = import.meta.env.BASE_URL || "/art-hotel-figma/";
  return `${base}${path.replace(/^\//, "")}`;
}
