import React, { useState } from "react";
import { useForm } from "antd/lib/form/Form";
import { formatArticle } from "../assets/utils/formatArticle";
import { articleFormFields } from "../assets/fixtures";
import { message } from "antd";
import FormModal from "./FormModal";

const ArticleModal = ({ type, reloadArticles, id }) => {
  const [form] = useForm();
  const [visible, setVisible] = useState(false);
  const [article, setArticle] = useState({});

  const formattedArticle = formatArticle(article);

  const showModal = () => {
    if (type === "add") {
      setVisible(true);
    } else if (type === "edit") {
      loadArticle(id);
    } else return;
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const sendDataToApi = (url, method, values) => {
    fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((data) => {
        if (data.ok) {
          handleCancel();

          return data.json();
        }
        throw new Error("Network error.");
      })
      .then(() => {
        reloadArticles();
        method === "post" && form.resetFields();
      })
      .catch((err) => console.error("Error: " + err));
  };

  const createArticle = (values) => {
    const url = "api/v1/articles/create";
    const method = "post";

    sendDataToApi(url, method, values);
  };

  const editArticle = (values) => {
    const url = `api/v1/articles/${id}`;
    const method = "put";

    sendDataToApi(url, method, values);
  };

  const onFinish = (values) => {
    type === "add" && createArticle(values);
    type === "edit" && editArticle(values);
  };

  const loadArticle = (id) => {
    const url = `api/v1/articles/${id}`;

    fetch(url)
      .then((data) => {
        if (data.ok) {
          return data.json();
        }
        throw new Error("Network error.");
      })
      .then(tool => setArticle(tool))
      .then(() => setVisible(true))
      .catch((err) => message.error("Error: " + err));

    return;
  };

  return (
    <FormModal
      form={form}
      type={type}
      editButtonMessage="Edit"
      addButtonMessage="Create new +"
      editFormMessage="Edit articles data &hellip;"
      addFormMessage="Add new article &hellip;"
      showModal={showModal}
      visible={visible}
      handleCancel={handleCancel}
      onFinish={onFinish}
      initialValues={formattedArticle}
      formFields={articleFormFields}
    />
  );
}

export default ArticleModal;