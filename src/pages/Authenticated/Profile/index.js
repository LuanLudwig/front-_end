import { useState } from "react";
import { Modal } from "../../../components/Modal";
import styles from "./profile.module.css";

export function Profile() {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [name, setName] = useState("");

  function handleEdit() {
    // chamar api para editar os dados
    const data = {
      name: name,
    };
  }

  function handleDelete() {
    // chamar api para deletar conta
  }

  return (
    <div className={styles.container}>
      <h1>Perfil</h1>

      <main>
        <div className={styles.item}>
          <h2>Nome</h2>
          <p>Luan</p>
        </div>

        <div className={styles.item}>
          <h2>Endereço</h2>
          <p>Rua Santiago</p>
        </div>
      </main>

      <footer>
        <button className={styles.btn} onClick={() => setIsVisibleModal(true)}>
          Editar perfil
        </button>
        <button className={styles.btnLogout} onClick={handleDelete}>
          Deletar conta
        </button>
      </footer>

      <Modal
        title="Editar perfil"
        cancelLabel="Cancelar"
        confirmLabel="Editar"
        onCancel={() => setIsVisibleModal(false)}
        onConfirm={handleEdit}
        visible={isVisibleModal}
      >
        <h1>conteudo</h1>
        <div>
          <label>Nome</label>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
      </Modal>
    </div>
  );
}
