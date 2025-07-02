// src/pages/CrearPost.tsx
import { Button, Form, Input, Select } from "antd";

const { TextArea } = Input;

const CrearPost = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Post creado:", values);
    form.resetFields();
  };

  return (
    <div>
      <h1>Crear Post</h1>
      <Form layout="vertical" form={form} onFinish={onFinish}>
        <Form.Item name="titulo" label="Título" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="categoria" label="Categoría" rules={[{ required: true }]}>
          <Select options={[{ value: "Noticias" }, { value: "Tutorial" }]} />
        </Form.Item>
        <Form.Item name="contenido" label="Contenido" rules={[{ required: true }]}>
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Crear</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CrearPost;
