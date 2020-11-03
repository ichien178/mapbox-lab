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

const encodedPolyline = "";

const coordinates = [
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
];

const geojson = {
  type: "Feature",
  geometry: {
    type: "LineString",
    coordinates: coordinates,
  },
} as GeoJSON.Feature<GeoJSON.LineString>;

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
    }).fitBounds(geojson.geometry.coordinates as any, {
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
                  Route Layer
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
              id="line"
              type="line"
              layout={{
                "line-join": "round",
                "line-cap": "round",
              }}
              paint={{
                "line-color": "#0000ff",
                "line-width": 8,
              }}
            />
          </Source>
        </MapView>
      </Container>
    </>
  );
};

export default SymbolLayer;
