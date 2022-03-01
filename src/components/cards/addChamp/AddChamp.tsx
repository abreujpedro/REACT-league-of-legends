import React from "react";

import styles from "./AddChamp.module.css";
interface IAddChamp {
  listStyles: { name: string }[] | null;
  setCreate: (arg: boolean) => void;
}
const AddChamp: React.FC<IAddChamp> = ({ listStyles, setCreate }) => {
  const [name, setName] = React.useState<string>("");
  const [styleName, setStyleName] = React.useState<string>("");
  const [pictureUrl, setPictureUrl] = React.useState<string>("");
  const [isFavorite, setIsFavorite] = React.useState<boolean>(false);
  return (
    <section className={styles.sectionMain}>
      <div>
        <h2>Adicione um novo boneco para sua coleção</h2>
      </div>
      <div className={styles.divMain}>
        <div className={styles.closeBtnDiv}>
          <button
            className={styles.closeBtn}
            onClick={() => {
              setCreate(false);
            }}
          >
            X
          </button>
        </div>
        <form>
          <label>
            <p className={styles.labelsText}>Nome do Campeão :</p>
            <input
              className={styles.nameChampInput}
              placeholder="Nome do Campeão"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </label>
          <p className={styles.labelsText}>Estilo do Campeão :</p>
          <ul className={styles.champsStyleList}>
            {listStyles?.map((i, index) => {
              return (
                <li key={index} value={i.name}>
                  <button
                    className={styleName == i.name ? styles.activeBtn : ""}
                    onClick={(e) => {
                      e.preventDefault();

                      setStyleName(i.name);
                    }}
                  >
                    {i.name}
                  </button>
                </li>
              );
            })}
          </ul>
          <label>
            <p className={styles.labelsText}>Url da foto do campeão :</p>
            <input
              className={styles.urlPicture}
              placeholder="Url da foto"
              type="text"
              value={pictureUrl}
              onChange={(e) => setPictureUrl(e.target.value)}
            />
          </label>
          <div className={styles.divLabel}>
            <label className={styles.favLabel}>
              <input
                type="checkbox"
                value="isFavorite"
                checked={isFavorite}
                onChange={(e) => {
                  setIsFavorite(e.target.checked);
                }}
              />
              Adicionar aos favoritos
            </label>
          </div>

          <div>
            <button className={styles.createBtn}>Criar boneco</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddChamp;
