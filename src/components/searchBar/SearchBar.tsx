import React, { ChangeEvent, useEffect } from "react";

import styles from "./SearchBar.module.css";

interface ISearchBar {
  listStyles: { name: string }[] | null;
  setChampNameQuery: (arg: string) => unknown;
}

const SearchBar: React.FC<ISearchBar> = ({ listStyles, setChampNameQuery }) => {
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
        {listStyles?.map((i, id) => {
          return (
            <li key={id}>
              <button>{i.name}</button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SearchBar;
