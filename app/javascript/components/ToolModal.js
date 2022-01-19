import React, { useState } from "react";
import { useForm } from "antd/lib/form/Form";
import { formatTool } from "../assets/utils/formatTool";
import { toolFormFields } from "../assets/fixtures";
import { Button, Form, message, Modal } from "antd";
import FormField from "./FormField";

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
    <>
      <Button
        type={type === "add" && "primary"}
        className={type === "edit" && "edit-button"}
        onClick={showModal}
      >
        {type === "edit" ? "Edit" : "Create New +"}
      </Button>

      <Modal
        title={type === "edit" ? "Edit Tool Data ..." : "Add New Tool ..."}
        visible={visible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={formattedTool}
        >
          {toolFormFields.map(field =>
            <FormField
              key={field.name}
              type={field.type}
              name={field.name}
              label={field.label}
              message={field.message}
              placeholder={field.placeholder}
              optionFilterProp={field.optionFilterProp}
              dataScope={field.dataScope}
            />
          )}
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default ToolModal;