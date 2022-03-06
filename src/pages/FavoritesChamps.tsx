import React, { useContext } from "react";

import SearchChampSection from "../components/searchChampSection/SearchChampSection";
import { AuthContext } from "../contexts/auth";
import { IChampListApi } from "../interfaces/IChampInterface";
import { api } from "../services/api";

const FavoritesChamps: React.FC = () => {
  const [champList, setChampList] = React.useState<IChampListApi[]>([]);
  const { authTokenKey } = useContext(AuthContext);
  const [champNameQuery, setChampNameQuery] = React.useState<string>("");
  React.useEffect(() => {
    const token = localStorage.getItem(authTokenKey);
    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      api
        .get<IChampListApi[]>(`champsfavorite?champName=${champNameQuery}`)
        .then((response) => setChampList(response.data));
    }
  }, [champNameQuery]);

  return (
    <>
      <SearchChampSection
        isFavoritesPage={true}
        listChamps={champList}
        setChampNameQuery={(query: string) => setChampNameQuery(query)}
      />
    </>
  );
};

export default FavoritesChamps;
