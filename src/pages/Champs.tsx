import React, { useContext } from "react";

import SearchChampSection from "../components/searchChampSection/SearchChampSection";
import { AuthContext } from "../contexts/auth";
import { IChampListApi } from "../interfaces/IChampInterface";
import { api } from "../services/api";

const Champs: React.FC = () => {
  const [champList, setChampList] = React.useState<IChampListApi[]>([]);
  const { authTokenKey } = useContext(AuthContext);
  const [champNameQuery, setChampNameQuery] = React.useState<string>("");
  const [champCategoryQuery, setCategoryNameQuery] = React.useState<string>("");

  React.useEffect(() => {
    const token = localStorage.getItem(authTokenKey);
    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      api
        .get<IChampListApi[]>(
          `champs?champName=${champNameQuery}&category=${champCategoryQuery}`
        )
        .then((response) => setChampList(response.data));
    }
  }, [champNameQuery, champCategoryQuery]);
  return (
    <>
      {!!authTokenKey ? (
        <SearchChampSection
          setCategoryNameQuery={setCategoryNameQuery}
          listChamps={champList}
          setChampNameQuery={(query: string) => setChampNameQuery(query)}
        />
      ) : (
        "não logado"
      )}
    </>
  );
};

export default Champs;
