import { useEffect } from "react";
import { Card } from "../../../components/Card";
import api from "../../../utils/api";
import styles from "./Home.module.css";
import { useState } from "react";

function Home() {
  const [totalSend, setTotalSend] = useState(0);

  useEffect(() => {
    // chamar api
  }, []);

  return (
    <div className={styles.container}>
      <section className={styles.banner}>
        <h1>Seja bem-vindo!</h1>
        <p>Loerem ipsum........</p>
      </section>

      <section className={styles.cards}>
        <Card title="Total de envios" content={totalSend} />
        <Card title="Última mensagem enviada" content="Loerem ipsum........" />
      </section>
    </div>
  );
}

export default Home;
