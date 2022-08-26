export interface ITranslation {
  [key: string]: string;
}

export interface IAllTranslations {
  en: ITranslation;
  ru: ITranslation;
}

export interface IArticle {
  title: string;
  url: string;
  imgUrl: string;
}

export interface ITool {
  slug?: string;
  name: string;
}

export interface IJob {
  title: string;
  year: string | number;
  position: string;
  color: string;
}
