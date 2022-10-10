import styles from "./header.module.css";

export default function Header() {
  let pathName = location.pathname;

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerContent}>
        {pathName === "/" ? (
          <button className={styles.headerSelectedButton}>HOME</button>
        ) : (
          <button className={styles.headerButton}>HOME</button>
        )}

        {pathName === "/loja" ? (
          <button className={styles.headerSelectedButton}>LOJA</button>
        ) : (
          <button className={styles.headerButton}>LOJA</button>
        )}

        <button className={styles.headerButton}>SUPORTE</button>

        {pathName === "/wiki" ? (
          <button className={styles.headerSelectedButton}>WIKI</button>
        ) : (
          <button className={styles.headerButton}>WIKI</button>
        )}

        <button className={styles.headerButton}>MINHA CONTA</button>
      </div>
    </div>
  );
}
