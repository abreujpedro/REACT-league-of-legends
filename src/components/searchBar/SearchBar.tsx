import React from "react";

import styles from "./SearchBar.module.css";

interface ISearchBar {
  listStyles: { name: string }[] | null;
}

const SearchBar: React.FC<ISearchBar> = ({ listStyles }) => {
  return (
    <nav className={styles.mainSearch}>
      <div>Search</div>
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
