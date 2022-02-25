import React from "react";

import CardTopChamp from "../components/cards/cardTopChamp/CardTopChamp";
import Container from "../components/container/Container";
import styles from "./Home.module.css";

const Home: React.FC = () => {
  return (
    <>
      <section>
        <main className={styles.main}>
          <Container>Favorites Champs</Container>
        </main>
      </section>
      <section>
        <Container>
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
