
export enum Language {
  EN = 'en',
  TE = 'te',
}

export interface TranslatableContent {
  name: string;
  description: string;
}

export interface Property {
  id: number;
  location: string;
  type: string;
  price: string;
  area: string;
  images: string[];
  en: TranslatableContent;
  te: TranslatableContent;
}

export type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
  t: (translations: Record<Language, string>) => string;
};
