import styles from "./send.module.css";

export function Send() {
  function handleSubmit() {
    console.log("enviar mensagem");
  }

  return (
    <div className={styles.container}>
      <h1>Envio de mensagem simples</h1>

      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>Telefone</label>
          <input type="text" placeholder="(99) 9999999" />
        </div>

        <div className={styles.formGroup}>
          <label>Mensagem</label>
          <textarea placeholder="Digite sua mensagem aqui..."></textarea>
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
