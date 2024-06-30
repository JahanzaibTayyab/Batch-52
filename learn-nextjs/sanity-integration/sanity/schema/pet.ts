import { defineField, defineType } from "sanity";

export const petType = defineType({
  name: "pet",
  title: "Pet",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
    }),
  ],
});
