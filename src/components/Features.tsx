// src/components/Features.tsx
import { Card, Col, Row, Alert } from 'antd';

const Features = () => (
  <div style={{ padding: '30px' }}>
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Ver Publicaciones">Consulta todas las publicaciones.</Card>
      </Col>
      <Col span={8}>
        <Card title="Crear Nuevo Post">Agrega una nueva publicación.</Card>
      </Col>
      <Col span={8}>
        <Card title="Estadísticas">Analiza la información de tus publicaciones.</Card>
      </Col>
    </Row>
    <div style={{ marginTop: 20 }}>
      <Alert message="Recuerda: Cada post debe tener título y contenido." type="warning" showIcon />
    </div>
  </div>
);

export default Features;
