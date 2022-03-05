import React, { useContext } from "react";

import CardTopChamp from "../components/cards/cardTopChamp/CardTopChamp";
import Container from "../components/container/Container";
import LoginButton from "../components/login/LoginButton";
import { AuthContext } from "../contexts/auth";
import { IChampListApi } from "../interfaces/IChampInterface";
import { api } from "../services/api";
import styles from "./Home.module.css";

const Home: React.FC = () => {
  const { isLogged } = useContext(AuthContext);
  const pictureMainRef = React.useRef<HTMLElement | null>(null);
  const pictureDivRef = React.useRef<HTMLDivElement | null>(null);

  const [champList, setChampList] = React.useState<IChampListApi[]>([]);
  const { authTokenKey } = useContext(AuthContext);

  React.useEffect(() => {
    const token = localStorage.getItem(authTokenKey);
    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      api
        .get<IChampListApi[]>("lasttopchamps")
        .then((response) => setChampList(response.data));
    }
  }, []);

  React.useEffect(() => {
    const sizeToIncrease = 200;
    const setPictureSize = () => {
      pictureMainRef.current
        ? (pictureMainRef.current.style.width = `${
            window.innerWidth + sizeToIncrease
          }px`)
        : null;
    };

    setPictureSize();
    window.addEventListener("resize", setPictureSize);
    return () => {
      window.removeEventListener("resize", setPictureSize);
    };
  }, []);

  React.useEffect(() => {
    const softenerFactor = 16;
    const setScroll = (e: MouseEvent) => {
      pictureDivRef.current
        ? (pictureDivRef.current.scrollLeft = e.pageX / softenerFactor)
        : null;
    };

    window.addEventListener("mousemove", setScroll);
    return () => {
      window.removeEventListener("mousemove", setScroll);
    };
  }, []);

  return (
    <>
      <section>
        <div ref={pictureDivRef} className={styles.pictureContainer}>
          <main className={styles.main} ref={pictureMainRef}></main>
        </div>
      </section>
      <section className={styles.favoritesTitleSection}>
        <h1>Favorites League of Legends</h1>
      </section>
      <section className={isLogged ? styles.secondSection : ""}>
        <Container>
          {isLogged ? (
            <>
              <div className={styles.topChampsSectionTitle}>
                <div>
                  <h2>Seus melhores campeões</h2>
                </div>
              </div>
              <div className={styles.topChampsDiv}>
                <ul className={styles.topChampsList}>
                  {champList.map((i) => {
                    return (
                      <li key={i.id}>
                        <CardTopChamp
                          champName={i.name}
                          champPicture={i.picture_url}
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </>
          ) : (
            <div className={styles.accessFavsDeslog}>
              <p>Tenha acesso aos seus campeões favoritos</p>
              <div className={styles.loginAccess}>
                <LoginButton />
              </div>
            </div>
          )}
        </Container>
      </section>
    </>
  );
};

export default Home;
