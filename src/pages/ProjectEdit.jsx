import React, { useEffect, useState } from "react";
import { Form, Input, DatePicker, message } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateProject } from "../redux/slices/projectSlice";
import dayjs from "dayjs";
import SharedButton from "../components/shared/Button";

const ProjectEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const [error, setError] = useState(null);

  const project = useSelector((state) => state.projects.find((project) => project.id === id));
  const dateFormat = "YYYY-MM-DD";
  console.log("here111");
  useEffect(() => {
    if (project) {
      form.setFieldsValue({
        id: project.id,
        name: project.name,
        description: project.description,
        startDate: dayjs(project.startDate, dateFormat),
        endDate: dayjs(project.endDate, dateFormat),
        manager: project.manager
      });
    }
  }, [project, form]);

  const onUpdate = async (values) => {
    try {
      const updatedProject = {
        ...values,
        startDate: values.startDate.format(dateFormat),
        endDate: values.endDate.format(dateFormat)
      };
      console.log("updatedProject333", updatedProject);
      await dispatch(updateProject(updatedProject)).unwrap();
      console.log("updatedProject222", updatedProject);

      navigate("/projects");

      message.success("Project updated successfully!");
    } catch (error) {
      console.error(error);
      setError("Failed to update project. Please try again.");
      message.error("Failed to update project.");
    }
  };

  if (!project) return <div>Loading...</div>;

  return (
    <Form form={form} layout="vertical" onFinish={onUpdate}>
      <Form.Item label="Project ID" name="id">
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

      {error && <div className="text-red-500">{error}</div>}

      <SharedButton type="primary" htmlType="submit">
        Update
      </SharedButton>
    </Form>
  );
};

export default ProjectEdit;
