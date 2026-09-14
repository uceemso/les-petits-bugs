export const tagDefinitions = [
  { value: 'émotion', slug: 'emotion', label: 'Émotion' },
  { value: 'colère', slug: 'colere', label: 'Colère' },
  { value: 'limite', slug: 'limite', label: 'Limite' },
  { value: 'jeu', slug: 'jeu', label: 'Jeu' },
  { value: 'imagination', slug: 'imagination', label: 'Imagination' }
] as const;

export type ArticleTag = (typeof tagDefinitions)[number]['value'];

export const getTagDefinition = (tag: string) => tagDefinitions.find((item) => item.value === tag);
