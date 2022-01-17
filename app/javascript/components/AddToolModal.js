import { Button, Form, Input, Modal, Select } from "antd";
import React, { useRef, useState } from "react";

const { Option } = Select;

const AddToolModal = ({ reloadTools }) => {
  const formRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const onFinish = (values) => {
    const url = "api/v1/tools/create";

    fetch(url, {
      method: "post",
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
      <Button type="primary" onClick={showModal}>
        Create New +
      </Button>

      <Modal title="Add New Tool ..." visible={visible} onCancel={handleCancel} footer={null}>
        <Form ref={formRef} layout="vertical" onFinish={onFinish}>
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
              <Option value="Juaristi">Juaristi</Option>
              <Option value="Kekeisen">Kekeisen</Option>
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

export default AddToolModal;