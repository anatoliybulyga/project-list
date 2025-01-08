import React, { useEffect } from "react";
import { Form, Input, DatePicker } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateProject } from "../redux/slices/projectSlice";
import dayjs from "dayjs";
import SharedButton from "../components/shared/Button";

const ProjectEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const project = useSelector((state) => state.projects.find((project) => project.id === id));

  const [form] = Form.useForm();
  const dateFormat = "YYYY-MM-DD";

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

  const onFinish = (values) => {
    const updatedProject = {
      ...values,
      startDate: values.startDate.format(dateFormat),
      endDate: values.endDate.format(dateFormat)
    };
    dispatch(updateProject(updatedProject));
    navigate("/");
  };

  if (!project) return <div>Loading...</div>;

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
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
      <SharedButton type="primary" htmlType="submit">
        Update
      </SharedButton>
    </Form>
  );
};

export default ProjectEdit;
