import React, { useEffect } from "react";
import { Form, Input, DatePicker, message } from "antd";
import dayjs from "dayjs";
import SharedButton from "./shared/Button";

const ProjectForm = ({ initialValues, onSubmit, isEditing, loading }) => {
  const [form] = Form.useForm();
  const dateFormat = "YYYY-MM-DD";

  useEffect(() => {
    form.setFieldsValue({
      ...initialValues,
      startDate: initialValues.startDate ? dayjs(initialValues.startDate, dateFormat) : null,
      endDate: initialValues.endDate ? dayjs(initialValues.endDate, dateFormat) : null
    });
  }, [form, initialValues]);

  const handleSubmit = async (values) => {
    try {
      const formattedValues = {
        ...values,
        startDate: values.startDate ? values.startDate.format(dateFormat) : null,
        endDate: values.endDate ? values.endDate.format(dateFormat) : null
      };
      await onSubmit(formattedValues);
    } catch (error) {
      console.error(error);
      message.error("An error occurred. Please try again.");
    }
  };

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit}>
      {isEditing ? (
        <Form.Item label="Project ID">
          <Input value={initialValues.id} readOnly className="bg-white border-0 p-2 outline-none" />
        </Form.Item>
      ) : (
        <Form.Item label="Project ID" name="id" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
      )}
      <Form.Item label="Project Name" name="name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Project Description" name="description">
        <Input.TextArea />
      </Form.Item>
      <Form.Item label="Start Date" name="startDate" rules={[{ required: true }]}>
        <DatePicker format={dateFormat} allowClear />
      </Form.Item>
      <Form.Item label="End Date" name="endDate" rules={[{ required: true }]}>
        <DatePicker format={dateFormat} allowClear />
      </Form.Item>
      <Form.Item label="Project Manager" name="manager" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <SharedButton type="primary" htmlType="submit" loading={loading}>
        {isEditing ? "Update" : "Create"}
      </SharedButton>
    </Form>
  );
};

export default ProjectForm;
