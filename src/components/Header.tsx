// // src/components/Header.tsx
// import { Menu } from 'antd';

// const Header = () => (
//   <div style={{ background: '#1890ff', padding: '0 16px' }}>
//     <div style={{ color: 'white', fontWeight: 'bold', padding: '10px 0' }}>
//       Gestión de Posts
//     </div>
//     <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ background: '#1890ff' }}>
//       <Menu.Item key="1">Home</Menu.Item>
//       <Menu.Item key="2">Listado</Menu.Item>
//       <Menu.Item key="3">Crear</Menu.Item>
//       <Menu.Item key="4">Estadísticas</Menu.Item>
//       <Menu.Item key="5">Información</Menu.Item>
//     </Menu>
//   </div>
// );

// export default Header;







// src/components/Header.tsx
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div style={{ background: '#1677ff', padding: '0 16px' }}>
    <div style={{ color: 'white', fontWeight: 'bold', padding: '10px 0', fontSize: '18px' }}>
      Gestión de Posts
    </div>
    <Menu
      mode="horizontal"
      defaultSelectedKeys={['1']}
      style={{
        background: '#1677ff',
        color: 'white',
        fontWeight: 'bold',
      }}
    >
      <Menu.Item key="1">
        <NavLink to="/" style={{ color: 'white' }}>Home</NavLink>
      </Menu.Item>
      <Menu.Item key="2">
        <NavLink to="/listado" style={{ color: 'white' }}>Listado</NavLink>
      </Menu.Item>
      <Menu.Item key="3">
        <NavLink to="/crear" style={{ color: 'white' }}>Crear</NavLink>
      </Menu.Item>
      <Menu.Item key="4">
        <NavLink to="/estadisticas" style={{ color: 'white' }}>Estadísticas</NavLink>
      </Menu.Item>
      <Menu.Item key="5">
        <NavLink to="/info" style={{ color: 'white' }}>Información</NavLink>
      </Menu.Item>
    </Menu>
  </div>
);

export default Header;
