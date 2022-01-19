import { formatArticle } from "./formatArticle";

export const buildArticleTable = (data) => {
  let articleTable = [];

  data.forEach(article => {
    const formattedArticle = formatArticle(article);

    articleTable = [
      ...articleTable,
      formattedArticle
    ];

  })
  return articleTable;
};