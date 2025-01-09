import React, { useEffect, useState } from "react";
import { Form, Input, DatePicker, message } from "antd";
import dayjs from "dayjs";
import SharedButton from "./shared/Button";
import { createProject } from "../redux/slices/projectSlice";
import { useDispatch } from "react-redux";

const ProjectForm = ({ initialValues, submitButtonLabel, isCreate, onFinish }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const dateFormat = "YYYY-MM-DD";

  useEffect(() => {
    if (initialValues) {
      form.setFieldsValue({
        ...initialValues,
        startDate: initialValues.startDate ? dayjs(initialValues.startDate, dateFormat) : null,
        endDate: initialValues.endDate ? dayjs(initialValues.endDate, dateFormat) : null
      });
    }
  }, [initialValues, form]);

  const handleCreate = (values) => {
    try {
      const newProject = {
        ...values,
        startDate: values.startDate.format(dateFormat),
        endDate: values.endDate.format(dateFormat)
      };

      dispatch(createProject(newProject));
      message.success("Project created successfully!");

      // Assuming `navigate` function exists and is properly imported or passed to this component
      navigate("/"); // Redirect after project creation
    } catch (error) {
      console.error(error);
      setError("Failed to create project. Please try again.");
      message.error("Failed to create project.");
    }
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={(values) => {
        isCreate ? handleCreate(values) : onFinish(values);
      }}
    >
      <Form.Item label="Project ID" name="id">
        {isCreate ? (
          <Input />
        ) : (
          <Input value={initialValues?.id} readOnly className="bg-white border-0 p-2 outline-none" />
        )}
      </Form.Item>
      <Form.Item label="Project Name" name="name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Project Description" name="description">
        <Input.TextArea />
      </Form.Item>
      <Form.Item label="Start Date" name="startDate" rules={[{ required: true }]}>
        <DatePicker format={dateFormat} />
      </Form.Item>
      <Form.Item label="End Date" name="endDate" rules={[{ required: true }]}>
        <DatePicker format={dateFormat} />
      </Form.Item>
      <Form.Item label="Project Manager" name="manager" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      {error && <div className="text-red-500">{error}</div>}

      <SharedButton type="primary" htmlType="submit">
        {submitButtonLabel}
      </SharedButton>
    </Form>
  );
};

export default ProjectForm;
