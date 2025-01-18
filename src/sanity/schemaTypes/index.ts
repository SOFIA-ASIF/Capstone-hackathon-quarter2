import { type SchemaTypeDefinition } from 'sanity'
import { product } from './productType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product],
}
