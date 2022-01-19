import React, { useEffect, useState } from "react";
import { buildArticleTable } from "../assets/utils/buildArticleTable";
import { articleFormFields } from "../assets/fixtures";
import ArticleModal from "./ArticleModal";
import { message, Popconfirm, Table } from "antd";

const Articles = () => {
  const articleListColumns = articleFormFields.map(field => ({
    title: field.label,
    dataIndex: field.name,
    key: field.name
  }));

  const columns = [
    ...articleListColumns,
    {
      title: "",
      key: "action",
      render: (_text, record) => (
        <>
          <Popconfirm
            title="Are you sure to delete this article?"
            onConfirm={() => deleteArticle(record.key)}
            okText="Yes"
            cancelText="No"
          >
            <a href="#" className="delete-button">
              Delete{" "}
            </a>
          </Popconfirm>
          <ArticleModal
            id={record.key}
            type="edit"
            reloadArticles={reloadArticles}
          />
        </>
      ),
    },

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

  const deleteArticle = (id) => {
    const url = `api/v1/articles/${id}`;

    fetch(url, {
      method: "delete",
    })
      .then((data) => {
        if (data.ok) {
          reloadArticles();

          return data.json();
        }
        throw new Error("Network error.");
      })
      .catch((err) => message.error("Error: " + err));
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
      <ArticleModal
        type="add"
        reloadArticles={reloadArticles}
      />
    </>
  );
};

export default Articles;