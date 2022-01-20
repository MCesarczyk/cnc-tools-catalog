import React, { useEffect, useRef, useState } from "react";
import { buildArticleTable } from "../assets/utils/buildArticleTable";
import { articleFormFields } from "../assets/fixtures";
import ArticleModal from "./ArticleModal";
import { Input, Button, Space, message, Popconfirm, Table } from "antd";
import { SearchOutlined } from '@ant-design/icons';

const getColumnSearchProps = (enabled, inputRef) => ({
  filterIcon: (filtered) => enabled && <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
  filterDropdown: () => (
    enabled &&
    <div style={{ padding: 8 }}>
      <Input
        ref={inputRef}
        placeholder={`Search`}
        style={{ marginBottom: 8, display: 'block' }}
      />
      <Space>
        <Button
          type="primary"
          icon={<SearchOutlined />}
          size="small"
          style={{ width: 90 }}
        >
          Search
        </Button>
        <Button
          size="small"
          style={{ width: 90 }}
        >
          Reset
        </Button>
        <Button
          type="link"
          size="small"
        >
          Filter
        </Button>
      </Space>
    </div>
  ),
  onFilterDropdownVisibleChange: visible => {
    if (visible) {
      setTimeout(() => inputRef.current.focus(), 300);
    }
  },
});

const Articles = () => {
  const inputRef = useRef();

  const articleListColumns = articleFormFields.map(field => ({
    key: field.name,
    title: field.label,
    dataIndex: field.name,
    filters: field.filters || "",
    onFilter: field.onFilter || "",
    sorter: field.sorter || "",
    ...getColumnSearchProps(field.search, inputRef)
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