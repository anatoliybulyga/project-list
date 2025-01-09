import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, DatePicker, message } from "antd";
import SharedButton from "../components/shared/Button";

import { useDispatch } from "react-redux";
import { createProject } from "../redux/slices/projectSlice";
import dayjs from "dayjs";

const initalProjectValues = {
  id: "",
  name: "",
  startDate: undefined,
  endDate: undefined,
  manager: "",
  description: ""
};

const ProjectCreate = () => {
  const [form] = Form.useForm();
  const [error, setError] = useState(null);
  const dateFormat = "YYYY-MM-DD";

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (initalProjectValues) {
      form.setFieldsValue({
        ...initalProjectValues,
        startDate: initalProjectValues.startDate ? dayjs(initalProjectValues.startDate, dateFormat) : null,
        endDate: initalProjectValues.endDate ? dayjs(initalProjectValues.endDate, dateFormat) : null
      });
    }
  }, [initalProjectValues, form]);

  const handleCreate = (values) => {
    try {
      const newProject = {
        ...values,
        startDate: values.startDate.format(dateFormat),
        endDate: values.endDate.format(dateFormat)
      };
      dispatch(createProject(newProject));
      message.success("Project created successfully!");

      navigate("/");
    } catch (error) {
      console.error(error);
      setError("Failed to create project. Please try again.");
      message.error("Failed to create project.");
    }
  };

  return (
    <Form form={form} layout="vertical" onFinish={handleCreate}>
      <Form.Item label="Project ID" name="id" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
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

      {error && <div className="text-red-500">{error}</div>}

      <SharedButton type="primary" htmlType="submit">
        Create
      </SharedButton>
    </Form>
  );
};

export default ProjectCreate;

// return <ProjectForm initialValues={initialValues} isCreate={true} onFinish={handleCreate} />;
