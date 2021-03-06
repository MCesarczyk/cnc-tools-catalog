import React, { useEffect, useRef, useState } from "react";
import { buildArticleTable } from "../assets/utils/buildArticleTable";
import { articleFormFields } from "../assets/fixtures";
import ArticleModal from "./ArticleModal";
import { message, Popconfirm, Space, Table } from "antd";
import { getColumnSearchProps } from "../assets/utils/getColumnSearchProps";

const Articles = () => {
  const inputRef = useRef();

  const articleListColumns = articleFormFields.map(field => ({
    key: field.name,
    title: field.label,
    dataIndex: field.name,
    filters: field.filters || "",
    onFilter: field.onFilter || "",
    sorter: field.sorter || "",
    ...getColumnSearchProps(field.search, inputRef, field.name)
  }));

  const columns = [
    ...articleListColumns,
    {
      title: "",
      key: "action",
      render: (_text, record) => (
        <Space>
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
        </Space>
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
        pagination={{ pageSize: 10 }}
        size="small"
      />
      <ArticleModal
        type="add"
        reloadArticles={reloadArticles}
      />
    </>
  );
};

export default Articles;