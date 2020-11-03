import {
  AppBar,
  Container,
  Grid,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Layer, Source, WebMercatorViewport } from "react-map-gl";
import MapView, {
  DEFAULT_MAP_VIEWPORT,
  MapViewPort,
} from "../../component/Map/MapView";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const coordinates = [
  [136.790649, 35.301373],
  [136.790741, 35.301365],
];

const geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: coordinates[0] },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: coordinates[1] },
    },
  ],
} as GeoJSON.FeatureCollection;

const SymbolLayer: React.FC = () => {
  const classes = useStyles();
  const [viewport, setViewPort] = useState<MapViewPort>(DEFAULT_MAP_VIEWPORT);

  const onViewportChange = (viewport: MapViewPort): MapViewPort => {
    setViewPort(viewport);
    return viewport;
  };

  useEffect(() => {
    const { longitude, latitude, zoom } = new WebMercatorViewport({
      width: 400,
      height: 400,
    }).fitBounds(coordinates as any, {
      padding: 20,
      offset: [0, -100],
    });

    setViewPort({
      ...viewport,
      zoom: zoom,
      longitude: longitude,
      latitude: latitude,
    });
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
                  Symbol Layer
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
        <MapView viewport={viewport} onViewportChange={onViewportChange}>
          <Source id="my-data" type="geojson" data={geojson}>
            <Layer
              id="point"
              type="circle"
              paint={{
                "circle-radius": 5,
                "circle-color": "#007cbf",
              }}
            />
          </Source>
        </MapView>
      </Container>
    </>
  );
};

export default SymbolLayer;
