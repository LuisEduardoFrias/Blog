//
export const categories = ['Tecnología', 'Innovación', 'Educación', 'Ciencia', 'Arte', 'Cultura'] as const;

export const colorByCategories =
  {
    'Tecnología': '#ff7b04',
    'Innovación': '#e300f8',
    'Educación': '#ff6098',
    'Ciencia': '#e5ef00',
    'Arte': '#ef0000',
    'Cultura': '#ef00aa'
  } as const;

export type Category = (typeof categories)[number];