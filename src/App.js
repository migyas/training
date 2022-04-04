import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes";
import { GlobalStyle } from "./styles/global";

export function App() {
  const [optionsSelected, setOptionsSelected] = useState([]);
  const [options, setOptions] = useState([
    {
      label: "Option 1",
      value: "1",
    },
    {
      label: "Option 2",
      value: "2",
    },
    {
      label: "Option 3",
      value: "3",
    },
    {
      label: "Option 4",
      value: "4",
    },
    {
      label: "Option 5",
      value: "5",
    },
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenOptionsSelected, setIsOpenOptionsSelected] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const sortArr = options.sort((a, b) => {
    if (a.value > b.value) {
      return 1;
    }
    return -1;
  });

  const filterArr = sortArr.filter((item) => {
    if (searchTerm === "") {
      return item;
    }
    if (
      item.label.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    ) {
      return item;
    }
    return item.label.toLocaleLowerCase() === searchTerm.toLocaleLowerCase();
  });

  console.log(filterArr);

  function handleChecked(e) {
    setOptionsSelected((prevState) => [...prevState, e]);
    const filterChecked = options.filter((option) => option.value !== e.value);
    setOptions(filterChecked);
  }

  return (
    <>
      <h1>Dropdown</h1>
      <div>
        <input type="text" onChange={(e) => setSearchTerm(e.target.value)} />
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            if (!!isOpen) {
              setIsOpenOptionsSelected(false);
            }
          }}
        >
          {isOpen ? "x" : "v"}
        </button>
        <span onClick={() => setIsOpenOptionsSelected(!isOpenOptionsSelected)}>
          {optionsSelected.length}
        </span>
        <br />
        {isOpenOptionsSelected && optionsSelected.length > 0
          ? optionsSelected
              .sort((a, b) => {
                if (a.value > b.value) {
                  return 1;
                }
                return -1;
              })
              .map((option) => (
                <span
                  key={option.label}
                  onClick={() => {
                    setOptions((prevState) => [...prevState, option]);
                    setOptionsSelected(
                      optionsSelected.filter(
                        (item) => item.label !== option.label
                      )
                    );
                  }}
                >
                  X {option.label}
                </span>
              ))
          : null}
        <div>
          {isOpen && options.length > 0
            ? options
                .sort((a, b) => {
                  if (a.value > b.value) {
                    return 1;
                  }
                  return -1;
                })
                .filter((item) => {
                  if (searchTerm === "") {
                    return item;
                  }
                  if (
                    item.label
                      .toLocaleLowerCase()
                      .includes(searchTerm.toLocaleLowerCase())
                  ) {
                    return item;
                  }
                  return (
                    item.label.toLocaleLowerCase() ===
                    searchTerm.toLocaleLowerCase()
                  );
                })
                .map((option) => {
                  return (
                    <label
                      key={option.label}
                      onClick={() => handleChecked(option)}
                    >
                      <input type="checkbox" />
                      {option.label}
                    </label>
                  );
                })
            : null}
          {!sortArr.length ? "Listagem vazia" : null}
          {!filterArr.length && sortArr.length
            ? "Nenhum item encontrado"
            : null}
        </div>
      </div>
    </>
    // <BrowserRouter>
    //   <Routes />
    //   <GlobalStyle />
    // </BrowserRouter>
  );
}
