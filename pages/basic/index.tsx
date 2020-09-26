import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import main from "./app";
import styles from "../../styles/Home.module.css";

const Basic = () => {
  useEffect(() => {
    main();
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div id="map"></div>
      </main>
    </div>
  );
};

export default Basic;
