export const formatArticle = (article) => {
  const formattedArticle = {
    key: article.id,
    id: article.id,
    group: article.group,
    subgroup: article.subgroup,
    article: article.article,
    manufacturer: article.manufacturer,
    description: article.description,
    catalog: article.catalog,
    quantity: article.quantity,
    annotations: article.annotations,
  }

  return formattedArticle;
};