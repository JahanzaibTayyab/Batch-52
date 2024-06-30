import { type SchemaTypeDefinition } from "sanity";
import { petType } from "./schema/pet";
import { blogType } from "./schema/blog";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [petType, blogType],
};
