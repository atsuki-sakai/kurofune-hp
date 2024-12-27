export type Blog = {
  id: string;
  title: Title;
  content: Content;
  createdAt: string;
  updatedAt: string;
  eyecatch: {
    url: string;
    height: number;
    width: number;
  };
  category: Category;
  author: string;
  author_role: string[];
};

export type News = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: Title;
  content: Content;
  category: Category;
  author: string;
  author_role: string[];
};

export type Category = {
  id: string;
  createdAt: string;
  updatedAt: string;
  revisedAt: string;
  category: {
    fieldId: string;
    category_en: string;
    category_ja: string;
  };
};
export type Title = {
  fieldId: string;
  title_en: string;
  title_ja: string;
};

export type Content = {
  fieldId: string;
  content_en: string;
  content_ja: string;
};
