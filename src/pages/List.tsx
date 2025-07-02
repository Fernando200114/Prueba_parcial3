// src/pages/List.tsx
import { Table } from 'antd';

const columns = [
  { title: 'ID', dataIndex: 'id' },
  { title: 'Título', dataIndex: 'titulo' },
  { title: 'Categoría', dataIndex: 'categoria' },
  { title: 'Contenido', dataIndex: 'contenido' },
];

const data = [
  { id: 1, titulo: 'Primer Post', categoria: 'Noticias', contenido: 'Contenido inicial.' },
  { id: 2, titulo: 'Tutorial Básico', categoria: 'Tutorial', contenido: 'Tutorial de ejemplo.' },
];

const List = () => (
  <div>
    <h1>Listado de Posts</h1>
    <Table columns={columns} dataSource={data} rowKey="id" pagination={false} />
    <footer style={{ marginTop: 20 }}>
      <hr />
      <p>© 2025 - Sistema de Posts - Taller Académico</p>
    </footer>
  </div>
);

export default List;
