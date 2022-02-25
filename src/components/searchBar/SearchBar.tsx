import React from "react";

import styles from "./SearchBar.module.css";

const SearchBar: React.FC = () => {
  return (
    <nav className={styles.mainSearch}>
      <div>Search</div>
      <ul className={styles.positionList}>
        <li>
          <button>Todos</button>
        </li>
        <li>
          <button>Assasinos</button>
        </li>
        <li>
          <button>Lutadores</button>
        </li>
        <li>
          <button>Magos</button>
        </li>
        <li>
          <button>Atiradores</button>
        </li>
        <li>
          <button>Suportes</button>
        </li>
        <li>
          <button>Tanques</button>
        </li>
      </ul>
    </nav>
  );
};

export default SearchBar;
