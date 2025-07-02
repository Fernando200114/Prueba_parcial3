// src/components/Header.tsx
import { Menu } from 'antd';

const Header = () => (
  <div style={{ background: '#1890ff', padding: '0 16px' }}>
    <div style={{ color: 'white', fontWeight: 'bold', padding: '10px 0' }}>
      Gestión de Posts
    </div>
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ background: '#1890ff' }}>
      <Menu.Item key="1">Home</Menu.Item>
      <Menu.Item key="2">Listado</Menu.Item>
      <Menu.Item key="3">Crear</Menu.Item>
      <Menu.Item key="4">Estadísticas</Menu.Item>
      <Menu.Item key="5">Información</Menu.Item>
    </Menu>
  </div>
);

export default Header;
