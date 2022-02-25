import React from "react";

import SearchChampSection from "../components/searchChampSection/SearchChampSection";

const FavoritesChamps: React.FC = () => {
  return (
    <>
      <SearchChampSection isFavoritesPage={true} />
    </>
  );
};

export default FavoritesChamps;
