import React, { useState } from "react";
import { useForm } from "antd/lib/form/Form";
import { formatTool } from "../assets/utils/formatTool";
import { toolFormFields } from "../assets/fixtures";
import { message } from "antd";
import FormModal from "./FormModal";

const ToolModal = ({ type, reloadTools, id }) => {
  const [form] = useForm();
  const [visible, setVisible] = useState(false);
  const [tool, setTool] = useState({});

  const formattedTool = formatTool(tool);

  const showModal = () => {
    if (type === "add") {
      setVisible(true);
    } else if (type === "edit") {
      loadTool(id);
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
        reloadTools();
        method === "post" && form.resetFields();
      })
      .catch((err) => console.error("Error: " + err));
  };

  const createTool = (values) => {
    const url = "api/v1/tools/create";
    const method = "post";

    sendDataToApi(url, method, values);
  };

  const editTool = (values) => {
    const url = `api/v1/tools/${id}`;
    const method = "put";

    sendDataToApi(url, method, values);
  };

  const onFinish = (values) => {
    type === "add" && createTool(values);
    type === "edit" && editTool(values);
  };

  const loadTool = (id) => {
    const url = `api/v1/tools/${id}`;

    fetch(url)
      .then((data) => {
        if (data.ok) {
          return data.json();
        }
        throw new Error("Network error.");
      })
      .then(tool => setTool(tool))
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
      editFormMessage="Edit tools data &hellip;"
      addFormMessage="Add new tool &hellip;"
      showModal={showModal}
      visible={visible}
      handleCancel={handleCancel}
      onFinish={onFinish}
      initialValues={formattedTool}
      formFields={toolFormFields}
    />
  );
}

export default ToolModal;