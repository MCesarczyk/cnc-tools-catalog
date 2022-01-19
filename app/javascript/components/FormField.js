import { Form, Input, Select } from "antd";
import React from "react";

const { Option } = Select;

const FormField = ({ type, name, label, message, placeholder, optionFilterProp, dataScope }) => (
  <>
    {type === "select" ?
      <Form.Item name={name} label={label} rules={[{ required: true, message: { message } }]}>
        <Select showSearch placeholder={placeholder} optionFilterProp={optionFilterProp} style={{ width: "100%" }}>
          {dataScope.map(item => (
            <Option key={item.id} value={item.name} >
              {item.name}
            </Option>
          ))}
        </Select>
      </Form.Item>
      :
      <Form.Item name={name} label={label} rules={[{ required: true, message: { message } }]}>
        <Input type={type === "input" ? "" : type} placeholder={placeholder} />
      </Form.Item>
    }
  </>
);

export default FormField;