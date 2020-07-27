import React from "react";
import { useFetch } from "./hooks/useFetch";

function App() {
  const { data, mutate } = useFetch(
    "https://www.diogocezar.com/wp-json/wp/v2/posts/"
  );
  if (!data) {
    return <p>Carregando...</p>;
  }
  return (
    <>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title.rendered}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
