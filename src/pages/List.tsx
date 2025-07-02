



// import { useEffect, useState } from "react";
// import { Table } from "antd";

// type Post = {
//   id: number;
//   titulo: string;
//   categoria: string;
//   contenido: string;
// };

// const Listado = () => {
//   const [posts, setPosts] = useState<Post[]>([]);

//   useEffect(() => {
//     fetch("http://localhost:3000/posts")
//       .then((res) => res.json())
//       .then((data) => setPosts(data))
//       .catch((err) => console.error("Error al obtener posts:", err));
//   }, []);

//   const columns = [
//     { title: "ID", dataIndex: "id", key: "id" },
//     { title: "Título", dataIndex: "titulo", key: "titulo" },
//     { title: "Categoría", dataIndex: "categoria", key: "categoria" },
//     { title: "Contenido", dataIndex: "contenido", key: "contenido" },
//   ];


// const data = [
//   { id: 1, titulo: 'Primer Post', categoria: 'Noticias', contenido: 'Contenido inicial.' },
//   { id: 2, titulo: 'Tutorial Básico', categoria: 'Tutorial', contenido: 'Tutorial de ejemplo.' },
// ];

// const List = () => (
//   <div>
//     <h1>Listado de Posts</h1>
//     <Table columns={columns} dataSource={data} rowKey="id" pagination={false} />
//     <footer style={{ marginTop: 20 }}>
//       <hr />
//       <p>© 2025 - Sistema de Posts - Taller Académico</p>
//     </footer>
//   </div>
// );

//   return (
//     <div style={{ padding: "24px" }}>
//       <h2>Listado de Posts</h2>
//       <Table dataSource={posts} columns={columns} rowKey="id" />
//     </div>
//   );
// };

// export default Listado;


// src/pages/Listado.tsx




import { useEffect, useState } from "react";
import { Table } from "antd";

type Post = {
  id: number;
  titulo: string;
  categoria: string;
  contenido: string;
};

const Listado = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Error al obtener posts:", err));
  }, []);

  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Título", dataIndex: "titulo", key: "titulo" },
    { title: "Categoría", dataIndex: "categoria", key: "categoria" },
    { title: "Contenido", dataIndex: "contenido", key: "contenido" },
  ];

  return (
    <div style={{ padding: "24px" }}>
      <h1>Listado de Posts</h1>
      <Table dataSource={posts} columns={columns} rowKey="id" pagination={false} />
      <footer style={{ marginTop: 20 }}>
        <hr />
        <p>© 2025 - Sistema de Posts - Taller Académico</p>
      </footer>
    </div>
  );
};

export default Listado;


