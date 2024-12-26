export type Blog = {
  id: string;
  title: string;
  content: string;
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
  title: string;
  content: string;
  category: Category;
  author: string;
  author_role: string[];
};

export type Category = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};
