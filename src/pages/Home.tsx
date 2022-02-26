import React from "react";

import CardTopChamp from "../components/cards/cardTopChamp/CardTopChamp";
import Container from "../components/container/Container";
import styles from "./Home.module.css";

const Home: React.FC = () => {
  const pictureMainRef = React.useRef<HTMLElement | null>(null);
  const pictureDivRef = React.useRef<HTMLDivElement | null>(null);

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
      <section>
        <Container>
          <div className={styles.topChampsSectionTitle}>
            <h2>TOP 3 Champs</h2>
          </div>
          <div className={styles.topChampsDiv}>
            <CardTopChamp
              champName="nome"
              champPicture="foto"
              champLane="lane"
              champRate={3}
            />
            <CardTopChamp
              champName="nome"
              champPicture="foto"
              champLane="lane"
              champRate={3}
            />
            <CardTopChamp
              champName="nome"
              champPicture="foto"
              champLane="lane"
              champRate={3}
            />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
