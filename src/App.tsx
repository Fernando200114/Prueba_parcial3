// src/App.tsx
import { Layout } from "antd";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Informacion from "./pages/Info";
import Estadisticas from "./pages/Stats";
import Listado from "./pages/List";
import CrearPost from "./pages/CrearPost";
import Navbar from "./components/Navar";

const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <Layout>
      <Header>
        <Navbar />
      </Header>
      <Content style={{ padding: "24px", minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/informacion" element={<Informacion />} />
          <Route path="/estadisticas" element={<Estadisticas />} />
          <Route path="/listado" element={<Listado />} />
          <Route path="/crear" element={<CrearPost />} />
        </Routes>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        © 2025 - Sistema de Posts - Taller Académico
      </Footer>
    </Layout>
  );
};

export default App;
