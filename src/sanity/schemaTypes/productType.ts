import { defineField, defineType } from "sanity";

export const productType = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "subtitle",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "SalesPrice",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "ShowPrice",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "isDiscounted",
      type: "boolean",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "DiscountPer",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      type: "array",
      title: "productImage",
      of: [{type: 'image'}]
    }),
  ],
});
