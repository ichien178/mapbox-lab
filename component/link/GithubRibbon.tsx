import React from "react";
import styles from "./GithubRibbon.module.css";

const GithubRibbon: React.FC = () => {
  return (
    <React.Fragment>
      <a className={styles.main} href="https://github.com/1coin178/mapbox-lab">
        <img
          src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"
          alt="Fork me on GitHub"
        />
      </a>
    </React.Fragment>
  );
};

export default GithubRibbon;
