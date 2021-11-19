import { useEffect, useRef, useState } from "react";

export function Home() {
  const [slug, setSlug] = useState("");
  const [news, setNews] = useState([]);
  const [filter, setFilter] = useState([]);
  const [numPg, setNumPg] = useState(1);
  const [loading, setLoading] = useState(false);
  const selectRef = useRef();

  const showCategory = async () => {
    const response = await fetch(
      `https://newsiseci.digital-gov.com/api/cms/temas/`,
      {
        headers: {
          authorization: " Api-Key 1IRIc4Uu.gf1KcjI2OkzqC71aD9IODDAEQUIF2pbp",
        },
      }
    );

    const response2 = await fetch(
      `https://newsiseci.digital-gov.com/api/cms/temas/?page=2`,
      {
        headers: {
          authorization: " Api-Key 1IRIc4Uu.gf1KcjI2OkzqC71aD9IODDAEQUIF2pbp",
        },
      }
    );
    const { results } = await response.json();
    const { results: results2 } = await response2.json();
    const total = results.concat(results2);
    setFilter(total);
  };

  const showNews = async () => {
    try {
      setLoading(true);
      if (slug) {
        const response = await fetch(
          `https://newnoticias.digital-gov.com/api/cms/noticias/?categoria_slug=${slug}`,
          {
            headers: {
              authorization:
                "Api-Key z3QazK8p.KVEhWR0A9GvpCUF70KsCqrKC9ROmLjWL",
            },
          }
        );
        const { results } = await response.json();
        setNews(results);
      } else {
        const response = await fetch(
          `https://newnoticias.digital-gov.com/api/cms/noticias/?page=${numPg}`,
          {
            headers: {
              authorization:
                "Api-Key z3QazK8p.KVEhWR0A9GvpCUF70KsCqrKC9ROmLjWL",
            },
          }
        );
        const { results } = await response.json();
        setNews(results);
      }
    } catch (e) {
      // alert("Deu ruim, recarrega ai");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    showNews();
    showCategory();
  }, []);

  useEffect(() => {
    showNews();
  }, [numPg, slug]);
  return (
    <>
      <label
        htmlFor="select"
        ref={selectRef}
        style={{ fontSize: "2.5rem", marginRight: "2rem" }}
      >
        Categorias
      </label>
      <select id="select" onChange={(ev) => setSlug(ev.target.value)}>
        <option value="">Selecione a categoria</option>
        <option value="informacao">Informação</option>
        {filter?.length > 1 &&
          filter.map((option) => (
            <option value={option.slug}>{option.titulo}</option>
          ))}
      </select>
      {loading ? (
        <div style={{ height: "40vh", fontSize: "3rem" }}>
          Carregando man...
        </div>
      ) : (
        <>
          {news.length
            ? news.map((item) => (
                <h1
                  key={item.id}
                  style={{ padding: "2rem", border: "1px solid #fff" }}
                >
                  {item.titulo}
                </h1>
              ))
            : "Nenhuma noticia encontrada baby"}
        </>
      )}

      <div style={{ marginTop: "4rem" }}>
        <button onClick={() => setNumPg(numPg - 1)}>Voltar</button>
        {numPg === 1 ? (
          <span
            style={{
              background: "#3ee",
              padding: "2rem",
              margin: "4rem",
              color: "#222",
            }}
          >
            1
          </span>
        ) : (
          <span style={{ padding: "2rem", margin: "4rem" }}>1</span>
        )}
        {numPg === 2 ? (
          <span
            style={{
              background: "#3ee",
              padding: "2rem",
              margin: "4rem",
              color: "#222",
            }}
          >
            2
          </span>
        ) : (
          <span style={{ padding: "2rem", margin: "4rem" }}>2</span>
        )}
        <button onClick={() => setNumPg(numPg + 1)}>Avançar</button>
      </div>
    </>
  );
}
