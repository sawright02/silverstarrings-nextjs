import { defineQuery } from "next-sanity";

export const RINGS_QUERY = defineQuery(
  `*[_type == "ring"] | order(order asc) {
    _id,
    name,
    description,
    "price": "$" + string(price),
    material,
    era,
    sizes,
    tag,
    tagColor,
    svgColor,
    patternId,
    "image": image.asset->url
  }`
);
