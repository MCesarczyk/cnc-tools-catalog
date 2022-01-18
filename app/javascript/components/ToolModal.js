import React, { useState } from "react";
import { useForm } from "antd/lib/form/Form";
import { formatTool } from "../assets/utils/formatTool";
import { machines, toolTypes } from "../assets/fixtures";
import { Button, Form, Input, message, Modal, Select } from "antd";

const { Option } = Select;

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
          <Form.Item name="tooltype" label="Type" rules={[{ required: true, message: "Please input your tool type!" }]}>
            <Select showSearch placeholder="Select your tool type" optionFilterProp="children" style={{ width: "100%" }}>
              {toolTypes.map(tool => (
                <Option key={tool.id} value={tool.name} >
                  {tool.name}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item name="diameter" label="Diameter" rules={[{ required: true, message: "Please input your tool diameter!" }]}>
            <Input placeholder="Input your tool diameter" />
          </Form.Item>

          <Form.Item name="length" label="Length" rules={[{ required: true, message: "Please input the length of the tool!", }]}>
            <Input placeholder="Input your tool lentgh" />
          </Form.Item>

          <Form.Item name="corner_radius" label="Corner radius" rules={[{ required: true, message: "Please input the radius of the corner!", }]}>
            <Input placeholder="Input your tool corner radius" />
          </Form.Item>

          <Form.Item name="flute_number" label="Flutes number" rules={[{ required: true, message: "Please input the number of the flutes!", }]}>
            <Input placeholder="Input your tool flutes number" />
          </Form.Item>

          <Form.Item name="flute_length" label="Flute length" rules={[{ required: true, message: "Please input the length of the flute!", }]}>
            <Input placeholder="Input your tool flute lentgh" />
          </Form.Item>

          <Form.Item name="machine" label="Machine" rules={[{ required: true, message: "Please choose a machine!" }]}>
            <Select showSearch placeholder="Select your machine" optionFilterProp="children" style={{ width: "100%" }}>
              {machines.map(machine => (
                <Option key={machine.id} value={machine.name} >
                  {machine.name}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item name="number" label="Number" rules={[{ required: true, message: "Please input the tool number!" }]}>
            <Input type="number" placeholder="Input your tool number" />
          </Form.Item>

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