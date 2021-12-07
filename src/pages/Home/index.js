import { Fragment, useEffect, useRef, useState } from "react";
import { api } from "../../service/api";

export function Home() {
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
  });
  const [isEdit, setIsEdit] = useState(false);
  const formRef = useRef();

  async function getPosts() {
    const { data } = await api.get("posts");
    setPosts(data);
  }

  async function onSubmit(event) {
    event.preventDefault();
    if (formData) {
      await api.post("posts", formData);
      formRef.current.reset();
      setFormData({});
      getPosts();
    }
  }

  function handleChangeInput(event) {
    setFormData((oldState) => ({
      ...oldState,
      [event.target.name]: event.target.value,
    }));
  }

  async function handleDelelePost(id) {
    await api.delete(`posts/${id}`);
    getPosts();
  }

  async function handleEditPost(id) {
    await api.put(`posts/${id}`, formData);
    setIsEdit(false);
    getPosts();
  }

  useEffect(() => {
    (async () => {
      await getPosts();
    })();
  }, []);

  return (
    <>
      <h1>{formData.title}</h1>
      <p>{formData.author}</p>
      <form onSubmit={onSubmit} ref={formRef}>
        <label>Titulo</label>
        <br></br>
        <input name="title" onChange={(event) => handleChangeInput(event)} />
        <br></br>
        <label>Autor</label>
        <br></br>
        <input name="author" onChange={(event) => handleChangeInput(event)} />
        <button type="submit">Criar</button>
      </form>
      <ul>
        {posts.map((post) => (
          <Fragment key={post.id}>
            <label>Titulo</label>
            {isEdit ? (
              <input
                name="title"
                onChange={(event) => handleChangeInput(event)}
                defaultValue={post.title}
              />
            ) : (
              <h2>{post.title}</h2>
            )}
            <br></br>
            <br></br>
            <label>Autor</label>
            {isEdit ? (
              <input
                name="author"
                onChange={(event) => handleChangeInput(event)}
                defaultValue={post.author}
              />
            ) : (
              <h2>{post.author}</h2>
            )}
            <br></br>
            <br></br>
            {isEdit ? (
              <button onClick={() => setIsEdit(!isEdit)}>Cancelar</button>
            ) : (
              <button onClick={() => handleDelelePost(post.id)}>Deletar</button>
            )}

            {isEdit ? (
              <button onClick={() => handleEditPost(post.id)}>
                Realizar edição
              </button>
            ) : (
              <button onClick={() => setIsEdit(!isEdit)}>Editar</button>
            )}
          </Fragment>
        ))}
      </ul>
    </>
  );
}
