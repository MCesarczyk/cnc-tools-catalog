import React from "react";
import { Button, Form, Modal } from "antd";
import FormField from "./FormField";

const FormModal = ({
  form,
  type,
  editButtonMessage,
  addButtonMessage,
  editFormMessage,
  addFormMessage,
  showModal,
  visible,
  handleCancel,
  onFinish,
  initialValues,
  formFields
}) => (
  <>
    <Button
      type={type === "add" && "primary"}
      className={type === "edit" && "edit-button"}
      onClick={showModal}
    >
      {type === "edit" ? editButtonMessage : addButtonMessage}
    </Button>

    <Modal
      title={type === "edit" ? editFormMessage : addFormMessage}
      visible={visible}
      onCancel={handleCancel}
      footer={null}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={initialValues}
      >
        {formFields.map(field =>
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

export default FormModal;