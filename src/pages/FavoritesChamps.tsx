import React, { useContext } from "react";

import Container from "../components/container/Container";
import SearchChampSection from "../components/searchChampSection/SearchChampSection";
import { AuthContext } from "../contexts/auth";
import { IChampListApi } from "../interfaces/IChampInterface";
import { api } from "../services/api";
import styles from "./withOutLogged.module.css";

const FavoritesChamps: React.FC = () => {
  const [champList, setChampList] = React.useState<IChampListApi[]>([]);
  const { authTokenKey, isLogged } = useContext(AuthContext);
  const [champNameQuery, setChampNameQuery] = React.useState<string>("");
  const [champCategoryQuery, setCategoryNameQuery] = React.useState<string>("");
  React.useEffect(() => {
    const token = localStorage.getItem(authTokenKey);
    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      api
        .get<IChampListApi[]>(
          `champsfavorite?champName=${champNameQuery}&category=${champCategoryQuery}`
        )
        .then((response) => setChampList(response.data));
    }
  }, [champNameQuery, champCategoryQuery]);

  return (
    <>
      {isLogged ? (
        <SearchChampSection
          setCategoryNameQuery={setCategoryNameQuery}
          isFavoritesPage={true}
          listChamps={champList}
          setChampNameQuery={(query: string) => setChampNameQuery(query)}
        />
      ) : (
        <div className={styles.divWithOutLogged}>
          <Container>
            <h1>Logue para acessar seus campeões favoritos</h1>
          </Container>
        </div>
      )}
    </>
  );
};

export default FavoritesChamps;
