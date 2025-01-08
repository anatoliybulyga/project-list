import React, { useEffect } from "react";
import { Form, Input, DatePicker, Button } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateProject } from "../redux/slices/projectSlice";
import moment from "moment";

const ProjectEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const project = useSelector((state) => state.projects.find((project) => project.id === id));

  const [form] = Form.useForm();

  useEffect(() => {
    if (project) {
      form.setFieldsValue({
        id: project.id,
        name: project.name,
        description: project.description,
        startDate: moment(project.startDate),
        endDate: moment(project.endDate),
        manager: project.manager
      });
    }
  }, [project, form]);

  const onFinish = (values) => {
    dispatch(updateProject(values));
    navigate("/");
  };

  if (!project) return <div>Project not found</div>;

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item label="Project ID" name="id">
        <Input disabled />
      </Form.Item>
      <Form.Item label="Project Name" name="name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Project Description" name="description">
        <Input.TextArea />
      </Form.Item>
      <Form.Item label="Start Date" name="startDate">
        <DatePicker />
      </Form.Item>
      <Form.Item label="End Date" name="endDate">
        <DatePicker />
      </Form.Item>
      <Form.Item label="Project Manager" name="manager">
        <Input />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Save
      </Button>
    </Form>
  );
};

export default ProjectEdit;
