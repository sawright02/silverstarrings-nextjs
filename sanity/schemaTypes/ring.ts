import { defineField, defineType } from "sanity";
import { TagIcon } from "@sanity/icons";

export const ringType = defineType({
  name: "ring",
  title: "Ring",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "name",
      title: "Ring Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 2,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "price",
      title: "Price (USD)",
      type: "number",
      validation: (rule) => rule.required().min(0),
    }),
    defineField({
      name: "material",
      title: "Material",
      type: "string",
      initialValue: "Sterling .925",
    }),
    defineField({
      name: "era",
      title: "Era",
      type: "string",
      options: {
        list: [
          { title: "Georgian", value: "Georgian" },
          { title: "Victorian", value: "Victorian" },
          { title: "Art Nouveau", value: "Art Nouveau" },
          { title: "Edwardian", value: "Edwardian" },
          { title: "Art Deco", value: "Art Deco" },
          { title: "Mid-Century", value: "Mid-Century" },
        ],
      },
    }),
    defineField({
      name: "sizes",
      title: "Available Sizes",
      type: "array",
      of: [{ type: "string" }],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "tag",
      title: "Tag Label",
      type: "string",
      options: {
        list: [
          { title: "Bestseller", value: "Bestseller" },
          { title: "New", value: "New" },
          { title: "Rare", value: "Rare" },
          { title: "Custom", value: "Custom" },
          { title: "Available", value: "Available" },
          { title: "Statement", value: "Statement" },
          { title: "Sold Out", value: "Sold Out" },
        ],
      },
    }),
    defineField({
      name: "tagColor",
      title: "Tag Color (hex)",
      type: "string",
      initialValue: "#8C7B6A",
    }),
    defineField({
      name: "image",
      title: "Ring Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "svgColor",
      title: "SVG Fallback Color (hex)",
      type: "string",
      initialValue: "#8A8C2A",
    }),
    defineField({
      name: "patternId",
      title: "SVG Pattern (fallback)",
      type: "string",
      options: {
        list: [
          { title: "Rose", value: "rose" },
          { title: "Art Nouveau", value: "nouveau" },
          { title: "Monogram", value: "mono" },
          { title: "Hammered", value: "hammered" },
          { title: "Fiddle", value: "fiddle" },
          { title: "Wide Band", value: "wide" },
        ],
      },
      initialValue: "rose",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 99,
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "price",
      media: "image",
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: subtitle ? `$${subtitle}` : "No price set",
        media,
      };
    },
  },
});
