import React from "react";

import { IChampList } from "../../interfaces/IChampInterface";
import { api } from "../../services/api";
import AddChamp from "../cards/addChamp/AddChamp";
import CardChamps from "../cards/cardChamps/CardChamps";
import Container from "../container/Container";
import SearchBar from "../searchBar/SearchBar";
import styles from "./SearchChampSection.module.css";

interface ISearchChampSection {
  isFavoritesPage?: boolean;
  listChamps: IChampList[];
}

const SearchChampSection: React.FC<ISearchChampSection> = ({
  isFavoritesPage,
  listChamps,
}) => {
  const [styleChampList, setStyleChampList] = React.useState<Array<{
    name: string;
  }> | null>(null);

  React.useEffect(() => {
    api.get("categories").then((response) => setStyleChampList(response.data));
  }, []);

  const [isAddChampOpen, setIsAddChampOpen] = React.useState<boolean>(false);
  return !isFavoritesPage ? (
    <main className={styles.main}>
      <Container>
        {!isAddChampOpen ? (
          <>
            <h1>Meus Campeões</h1>
            <section>
              <SearchBar listStyles={styleChampList} />
            </section>
            <div className={styles.addChampDiv}>
              <button onClick={() => setIsAddChampOpen(true)}>
                Adicionar Campeão +
              </button>
            </div>
            <ul className={styles.cardsChampList}>
              {listChamps.map((i) => {
                return (
                  <li key={i.id}>
                    <CardChamps
                      champName={i.name}
                      champPicture={i.picture_url}
                    />
                  </li>
                );
              })}
            </ul>
          </>
        ) : (
          <AddChamp listStyles={styleChampList} />
        )}
      </Container>
    </main>
  ) : (
    <main className={styles.main}>
      <Container>
        {!isAddChampOpen ? (
          <>
            <h1>Meus Campeões Favoritos</h1>
            <section>
              <SearchBar listStyles={styleChampList} />
            </section>
            <div className={styles.addChampDiv}>
              <button onClick={() => setIsAddChampOpen(true)}>
                Adicionar Campeão +
              </button>
            </div>
            <ul className={styles.cardsChampList}>
              {listChamps.map((i) => {
                return (
                  <li key={i.id}>
                    <CardChamps
                      champName={i.name}
                      champPicture={i.picture_url}
                    />
                  </li>
                );
              })}
            </ul>
          </>
        ) : (
          <AddChamp listStyles={styleChampList} />
        )}
      </Container>
    </main>
  );
};

export default SearchChampSection;
