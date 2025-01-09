import React, { useEffect, useState } from "react";
import { Form, Input, DatePicker, message } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import SharedButton from "../components/shared/Button";
import dayjs from "dayjs";
import { useProjects } from "../context/ProjectsContext";

const ProjectEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dateFormat = "YYYY-MM-DD";
  const { projects, updateProject, fetchProjects } = useProjects();

  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (projects.length > 0) {
      const currentProject = projects.find((p) => p.id === id);
      if (currentProject) {
        setProject(currentProject);
        setTimeout(() => {
          form.setFieldsValue({
            name: currentProject.name,
            description: currentProject.description,
            startDate: dayjs(currentProject.startDate, dateFormat),
            endDate: dayjs(currentProject.endDate, dateFormat),
            manager: currentProject.manager
          });
        }, 0);
      } else {
        message.error("Project not found!");
      }
    }
  }, [id, projects, form]);

  const handleEdit = async (values) => {
    try {
      setLoading(true);
      const updatedProject = {
        ...project,
        ...values,
        startDate: values.startDate.format(dateFormat),
        endDate: values.endDate.format(dateFormat)
      };
      await updateProject(updatedProject);

      message.success("Project updated successfully!");
      fetchProjects();
      navigate("/projects");
    } catch (error) {
      console.error(error);
      message.error("Failed to update project. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (loading || !project) {
    return <div>Loading...</div>;
  }

  return (
    <Form form={form} layout="vertical" onFinish={handleEdit}>
      <Form.Item label="Project ID">
        <Input value={project.id} readOnly className="bg-white border-0 p-2 outline-none" />
      </Form.Item>
      <Form.Item label="Project Name" name="name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Project Description" name="description">
        <Input.TextArea />
      </Form.Item>
      <Form.Item label="Start Date" name="startDate">
        <DatePicker format={dateFormat} allowClear />
      </Form.Item>
      <Form.Item label="End Date" name="endDate">
        <DatePicker format={dateFormat} allowClear />
      </Form.Item>
      <Form.Item label="Project Manager" name="manager">
        <Input />
      </Form.Item>

      {/* {error && <div className="text-red-500">{error}</div>} */}

      <SharedButton type="primary" htmlType="submit" loading={loading}>
        Update
      </SharedButton>
    </Form>
  );
};

export default ProjectEdit;
