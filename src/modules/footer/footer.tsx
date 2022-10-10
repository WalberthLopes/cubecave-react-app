import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <p>
          Cubecave 2020 - 2022 | Java 1.19.2 | IP: mc.cubecave.net <br />
          Não possuímos filiação com Microsoft ou Mojang AB.
        </p>
      </div>
    </div>
  );
}
