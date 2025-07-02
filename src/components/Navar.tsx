// src/components/Navbar.tsx
import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <Menu
      theme="dark"
      mode="horizontal"
      selectedKeys={[location.pathname]}
      items={[
        { key: "/", label: <Link to="/">Inicio</Link> },
        { key: "/informacion", label: <Link to="/informacion">Información</Link> },
        { key: "/estadisticas", label: <Link to="/estadisticas">Estadísticas</Link> },
        { key: "/listado", label: <Link to="/listado">Listado de Posts</Link> },
        { key: "/crear", label: <Link to="/crear">Crear Post</Link> },
      ]}
    />
  );
};

export default Navbar;
