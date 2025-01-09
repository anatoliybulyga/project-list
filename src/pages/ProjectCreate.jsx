import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, DatePicker, message } from "antd";
import SharedButton from "../components/shared/Button";
import dayjs from "dayjs";
import { useProjects } from "../context/ProjectsContext";

const initialProjectValues = {
  name: "",
  startDate: undefined,
  endDate: undefined,
  manager: "",
  description: ""
};

const ProjectCreate = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { addProject } = useProjects();
  const dateFormat = "YYYY-MM-DD";

  useEffect(() => {
    form.setFieldsValue({
      ...initialProjectValues,
      startDate: initialProjectValues.startDate ? dayjs(initialProjectValues.startDate, dateFormat) : null,
      endDate: initialProjectValues.endDate ? dayjs(initialProjectValues.endDate, dateFormat) : null
    });
  }, [form]);

  const handleCreate = async (values) => {
    setLoading(true);
    try {
      const newProject = {
        ...values,
        startDate: values.startDate ? values.startDate.format(dateFormat) : null,
        endDate: values.endDate ? values.endDate.format(dateFormat) : null
      };

      await addProject(newProject);
      message.success("Project created successfully!");

      navigate("/projects");
    } catch (error) {
      console.error(error);
      message.error("Failed to create project. Please try again.");
    } finally {
      setLoading(false);
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

      <SharedButton type="primary" htmlType="submit" loading={loading}>
        Create
      </SharedButton>
    </Form>
  );
};

export default ProjectCreate;
