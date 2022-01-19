import React, { useEffect, useState } from "react";
import { buildArticleTable } from "../assets/utils/buildArticleTable";
import { articleFormFields } from "../assets/fixtures";
import { Table } from "antd";

const Articles = () => {
  const articleListColumns = articleFormFields.map(field => ({
    title: field.label,
    dataIndex: field.name,
    key: field.name
  }));

  const columns = [
    ...articleListColumns,
    
  ];

  const [articles, setArticles] = useState([]);

  const loadArticles = () => {
    const url = "api/v1/articles/index";
    fetch(url)
      .then((data) => {
        if (data.ok) {
          return data.json();
        }
        throw new Error("Network error.");
      })
      .then((data) => {
        const articleTable = buildArticleTable(data);
        setArticles(articleTable);
      })
      .catch((err) => console.log("Error: " + err));
  };

  const reloadArticles = () => {
    setArticles([]);
    loadArticles();
  };

  useEffect(() => {
    loadArticles();
  }, []);

  return (
    <>
      <Table
        className="table-stripped-rows"
        dataSource={articles}
        columns={columns}
        pagination={{ pageSize: 5 }}
      />
    </>
  );
};

export default Articles;