import React from "react";

import CardChamps from "../cards/cardChamps/CardChamps";
import Container from "../container/Container";
import SearchBar from "../searchBar/SearchBar";

const SearchChampSection: React.FC<{ isFavoritesPage?: boolean }> = ({
  isFavoritesPage,
}) => {
  return (
    <main>
      <div>
        <Container>
          <h1>
            {isFavoritesPage ? "Meus Campeões Favoritos" : "Meus Campeões"}
          </h1>
          <section>
            <SearchBar />
          </section>
          <CardChamps champName="Name" champPicture="Foto" />
        </Container>
      </div>
      <div></div>
    </main>
  );
};

export default SearchChampSection;
