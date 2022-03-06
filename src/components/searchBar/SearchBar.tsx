import React, { ChangeEvent, useEffect } from "react";

import styles from "./SearchBar.module.css";

interface ISearchBar {
  listStyles: { name: string; id: string }[] | null;
  setChampNameQuery: (arg: string) => unknown;
  setCategoryNameQuery: (arg: string) => void;
}

const SearchBar: React.FC<ISearchBar> = ({
  listStyles,
  setChampNameQuery,
  setCategoryNameQuery,
}) => {
  const [valueDisplay, setValueDisplay] = React.useState<string>("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValueDisplay(event.target.value);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setChampNameQuery(valueDisplay);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [valueDisplay]);

  return (
    <nav className={styles.mainSearch}>
      <input
        value={valueDisplay}
        type="text"
        placeholder="pesquisar"
        onChange={handleChange}
      />
      <ul className={styles.positionList}>
        <button onClick={() => setCategoryNameQuery("")}>Todos</button>
        {listStyles?.map((i, id) => {
          return (
            <li key={id}>
              <button onClick={() => setCategoryNameQuery(i.id)}>
                {i.name}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SearchBar;
