import type { MetadataRoute } from "next";
import { site } from "../config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

const routes = ["/", "/servicios", "/resultados", "/especialista", "/contacto"];

  return routes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
