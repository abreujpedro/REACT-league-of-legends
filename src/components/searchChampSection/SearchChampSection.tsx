import React from "react";

import { IChampList } from "../../interfaces/IChampInterface";
import CardChamps from "../cards/cardChamps/CardChamps";
import Container from "../container/Container";
import SearchBar from "../searchBar/SearchBar";

interface ISearchChampSection {
  isFavoritesPage?: boolean;
  listChamps: IChampList[];
}

const SearchChampSection: React.FC<ISearchChampSection> = ({
  isFavoritesPage,
  listChamps,
}) => {
  return !isFavoritesPage ? (
    <main>
      <div>
        <Container>
          <h1>Meus Campeões</h1>
          <section>
            <SearchBar />
          </section>
          <ul>
            {listChamps.map((i) => {
              return (
                <li key={i.id}>
                  <CardChamps champName={i.name} champPicture="foto" />
                </li>
              );
            })}
          </ul>
        </Container>
      </div>
      <div></div>
    </main>
  ) : (
    <p>favorites</p>
  );
};

export default SearchChampSection;
