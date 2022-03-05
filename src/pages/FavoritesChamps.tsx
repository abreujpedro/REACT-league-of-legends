import React, { useContext } from "react";

import SearchChampSection from "../components/searchChampSection/SearchChampSection";
import { AuthContext } from "../contexts/auth";
import { IChampListApi } from "../interfaces/IChampInterface";
import { api } from "../services/api";

const FavoritesChamps: React.FC = () => {
  const [champList, setChampList] = React.useState<IChampListApi[]>([]);
  const { authTokenKey } = useContext(AuthContext);
  React.useEffect(() => {
    const token = localStorage.getItem(authTokenKey);
    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      api
        .get<IChampListApi[]>("champsfavorite")
        .then((response) => setChampList(response.data));
    }
  }, []);

  return (
    <>
      <SearchChampSection isFavoritesPage={true} listChamps={champList} />
    </>
  );
};

export default FavoritesChamps;
