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








// import { Menu } from "antd";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <Menu
//       theme="dark"
//       mode="horizontal"
//       defaultSelectedKeys={["/"]}
//       style={{ justifyContent: "center" }}
//     >
//       <Menu.Item key="/">
//         <NavLink to="/">Inicio</NavLink>
//       </Menu.Item>
//       <Menu.Item key="/informacion">
//         <NavLink to="/informacion">Información</NavLink>
//       </Menu.Item>
//       <Menu.Item key="/estadisticas">
//         <NavLink to="/estadisticas">Estadísticas</NavLink>
//       </Menu.Item>
//       <Menu.Item key="/listado">
//         <NavLink to="/listado">Listado de Posts</NavLink>
//       </Menu.Item>
//       <Menu.Item key="/crear">
//         <NavLink to="/crear">Crear Post</NavLink>
//       </Menu.Item>
//     </Menu>
//   );
// };

// export default Navbar;

