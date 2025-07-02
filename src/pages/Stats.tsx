// src/pages/Stats.tsx
import { Input, Typography } from 'antd';

const Stats = () => (
  <div>
    <h1>Estadísticas de Publicaciones</h1>
    <ol>
      <li>
        <Typography.Text strong>Contar Posts con Títulos Largos</Typography.Text><br />
        Longitud mínima de título:
        <Input type="number" style={{ width: 200, marginTop: 8 }} />
      </li>
      <li style={{ marginTop: 16 }}>
        <Typography.Text strong>Porcentaje de Posts por Categoría</Typography.Text>
        <p>Noticias</p>
      </li>
      <li style={{ marginTop: 16 }}>
        <Typography.Text strong>Total de Caracteres en Títulos</Typography.Text>
      </li>
    </ol>
  </div>
);

export default Stats;
