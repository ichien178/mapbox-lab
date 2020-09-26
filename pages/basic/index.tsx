import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import styles from "../../styles/Home.module.css";
import MapContainer from "../../service/map/map";

const Basic = () => {
  useEffect(() => {
    MapContainer.getInstance().init();
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
