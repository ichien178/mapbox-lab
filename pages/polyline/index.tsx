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
import mapboxgl, { GeoJSONSourceRaw, Source } from "mapbox-gl";

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
    // 位置設定
    map.setCenter(new mapboxgl.LngLat(-122.486052, 37.830348));
    map.setZoom(15);
    //経路表示
    map.once("load", function () {
      map.addLayer({
        id: "route",
        type: "line",
        source: {
          type: "geojson",
          data: {
            type: "Feature",
            properties: {},
            geometry: {
              type: "LineString",
              coordinates: [
                [-122.48369693756104, 37.83381888486939],
                [-122.48348236083984, 37.83317489144141],
                [-122.48339653015138, 37.83270036637107],
                [-122.48356819152832, 37.832056363179625],
                [-122.48404026031496, 37.83114119107971],
                [-122.48404026031496, 37.83049717427869],
                [-122.48348236083984, 37.829920943955045],
                [-122.48356819152832, 37.82954808664175],
                [-122.48507022857666, 37.82944639795659],
                [-122.48610019683838, 37.82880236636284],
                [-122.48695850372314, 37.82931081282506],
                [-122.48700141906738, 37.83080223556934],
                [-122.48751640319824, 37.83168351665737],
                [-122.48803138732912, 37.832158048267786],
                [-122.48888969421387, 37.83297152392784],
                [-122.48987674713133, 37.83263257682617],
                [-122.49043464660643, 37.832937629287755],
                [-122.49125003814696, 37.832429207817725],
                [-122.49163627624512, 37.832564787218985],
                [-122.49223709106445, 37.83337825839438],
                [-122.49378204345702, 37.83368330777276],
              ],
            } as GeoJSON.LineString,
          },
        } as GeoJSONSourceRaw,
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#0000ff",
          "line-width": 8,
        },
      });
    });

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
                  経路表示
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
