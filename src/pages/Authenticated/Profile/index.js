import styles from "./profile.module.css";

export function Profile() {
  return (
    <div className={styles.container}>
      <h1>Perfil</h1>

      <main>
        <div className={styles.item}>
          <h2>Nome:</h2>
          <p>Luan</p>
        </div>

        <div className={styles.item}>
          <h2>Endereço:</h2>
          <p>Rua Santiago</p>
        </div>
      </main>

      <footer>
        <button className={styles.btn}>Editar perfil</button>
        <button className={styles.btn}>Deletar conta</button>
      </footer>
    </div>
  );
}
