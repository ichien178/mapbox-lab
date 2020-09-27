import Head from "next/head";
import Link from "next/link";
import React, { useEffect } from "react";
import styles from "../../styles/Basic.module.css";
import MapContainer from "../../service/map/map";
import {
  AppBar,
  Container,
  Grid,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const Basic = () => {
  const classes = useStyles();
  useEffect(() => {
    MapContainer.getInstance().init();
  }, []);

  return (
    <>
      <Container maxWidth={false}>
        <AppBar position="static" color="inherit">
          <Toolbar>
            <Grid
              container
              className={classes.root}
              spacing={2}
              justify="flex-start"
              alignItems="center"
            >
              <Grid item>
                <Typography variant="h6" className={classes.title}>
                  Basic
                </Typography>
              </Grid>
              <Grid item>
                <Breadcrumbs aria-label="breadcrumb">
                  <Link href="/">Home</Link>
                </Breadcrumbs>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <div id="map" className={styles.map}></div>
      </Container>
    </>
  );
};

export default Basic;
