import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
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
import MapView from "../../component/Map/MapView";
import mapboxgl from "mapbox-gl";
import { MapConst } from "../../service/map/const";

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
  const mapContainerRef = useRef(null);
  useEffect(() => {
    const map = MapContainer.getInstance().init(mapContainerRef.current);
    return () => map.remove();
  }, []);

  return (
    <>
      <Container maxWidth={false}>
        {/* App Header */}
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
        {/* 地図 */}
        <MapView mapRef={mapContainerRef}></MapView>
      </Container>
    </>
  );
};

export default Basic;
