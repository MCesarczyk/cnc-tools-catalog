import { Button, Form, Input, Modal, Select } from "antd";
import React, { useRef, useState } from "react";

const { Option } = Select;

const EditToolModal = ({ reloadTools, id }) => {
  const formRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [tool, setTool] = useState({});

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

    return
  };

  const showModal = () => {
    loadTool(id);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const onFinish = (values) => {
    const url = `api/v1/tools/${id}`;

    fetch(url, {
      method: "put",
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
      })
      .catch((err) => console.error("Error: " + err));
  };

  return (
    <>
      <Button className="edit-button" onClick={showModal}>
        Edit
      </Button>

      <Modal title="Edit Tool Data ..." visible={visible} onCancel={handleCancel} footer={null}>
        <Form
          ref={formRef}
          layout="vertical"
          onFinish={onFinish}
          initialValues={{
            tooltype: tool.tooltype,
            diameter: tool.diameter,
            length: tool.length,
            quantity: tool.quantity
          }}
        >
          <Form.Item name="tooltype" label="Type" rules={[{ required: true, message: "Please input your tool type!" }]}>
            <Select showSearch placeholder="Select your tool type" optionFilterProp="children" style={{ width: "100%" }}>
              <Option value="Shell mill">Shell mill</Option>
              <Option value="End mill">End mill</Option>
              <Option value="Ball mill">Ball mill</Option>
              <Option value="Spotdrill">Spotdrill</Option>
              <Option value="Insert drill">Insert drill</Option>
              <Option value="Tap">Tap</Option>
            </Select>
          </Form.Item>

          <Form.Item name="diameter" label="Diameter" rules={[{ required: true, message: "Please input your tool diameter!" }]}>
            <Input placeholder="Input your tool diameter" />
          </Form.Item>

          <Form.Item name="length" label="Length" rules={[{ required: true, message: "Please input the length of the tool!", }]}>
            <Input placeholder="Input your tool lentgh" />
          </Form.Item>

          <Form.Item name="quantity" label="Quantity" rules={[{ required: true, message: "Please input the quantity!" }]}>
            <Input type="number" placeholder="How many tools you desire?" />
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

export default EditToolModal;