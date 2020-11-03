import polyline from "@mapbox/polyline";
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

const SymbolLayer: React.FC = () => {
  const classes = useStyles();
  const [viewport, setViewPort] = useState<MapViewPort>(DEFAULT_MAP_VIEWPORT);
  const [encodedPolyline, setEncodedPolyline] = useState<string>(
    "cxl_cBqwvnS|Dy@ogFyxmAf`IsnA|CjFzCsHluD_k@hi@ljL"
  );
  const [points, setPoints] = useState<string>("");
  const [geojsonRouteLayer, setGeojsonRouteLayer] = useState<
    GeoJSON.Feature<GeoJSON.LineString | null>
  >(null);
  const [
    geojsonPoint,
    setGeojsonPoint,
  ] = useState<GeoJSON.FeatureCollection | null>(null);

  const onViewportChange = (viewport: MapViewPort): MapViewPort => {
    setViewPort(viewport);
    return viewport;
  };

  const onUpdate = () => {
    const polylineCoordinates =
      encodedPolyline !== ""
        ? polyline.decode(encodedPolyline, 6).map((p) => [p[1], p[0]])
        : null;
    const geojsonRouteLayer = polylineCoordinates
      ? ({
          type: "Feature",
          geometry: {
            type: "LineString",
            coordinates: polylineCoordinates,
          },
        } as GeoJSON.Feature<GeoJSON.LineString>)
      : null;
    setGeojsonRouteLayer(geojsonRouteLayer);

    const coordinates = points
      .split("\n")
      .filter((l) => l !== "")
      .map((p) => {
        const latLng = p.split(",");
        return [Number(latLng[1]), Number(latLng[0])];
      })
      .map((c) => {
        return {
          type: "Feature",
          geometry: { type: "Point", coordinates: c },
        };
      });

    const geojsonPoint =
      coordinates.length > 0
        ? ({
            type: "FeatureCollection",
            features: coordinates,
          } as GeoJSON.FeatureCollection)
        : null;

    setGeojsonPoint(geojsonPoint);
  };

  useEffect(() => {
    onUpdate();
  }, []);

  useEffect(() => {
    if (!geojsonRouteLayer) {
      return;
    }

    const { longitude, latitude, zoom } = new WebMercatorViewport({
      width: 400,
      height: 400,
    }).fitBounds([...geojsonRouteLayer.geometry.coordinates] as any, {
      padding: 20,
      offset: [0, -100],
    });

    setViewPort({
      ...viewport,
      zoom: zoom,
      longitude: longitude,
      latitude: latitude,
    });
  }, [geojsonRouteLayer, geojsonPoint]);

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
        <label className="text-gray-600 font-light">
          encodedPolyline(precision:6)
        </label>
        <input
          id="polyline"
          type="text"
          value={encodedPolyline}
          placeholder="Enter your encoded polyline"
          onChange={(e) => setEncodedPolyline(e.target.value)}
          className="w-full mt-2 mb-6 px-6 py-3 border rounded-lg text-lg text-gray-700 focus:outline-none"
        />
        <label className="text-gray-600 font-light">coordinates</label>
        <textarea
          id="points"
          value={points}
          placeholder={"lat1,lon1\nlat2,lon2"}
          onChange={(e) => setPoints(e.target.value)}
          className="w-full mt-2 mb-6 px-6 py-3 border rounded-lg text-lg text-gray-700 focus:outline-none"
        />
        <button
          id="update"
          onClick={onUpdate}
          type="button"
          className="mb-1 w-full bg-blue-600 text-gray-200 rounded hover:bg-blue-500 px-4 py-2 focus:outline-none"
        >
          update
        </button>
        {/* 地図 */}
        <MapView viewport={viewport} onViewportChange={onViewportChange}>
          {geojsonRouteLayer && (
            <Source id="route" type="geojson" data={geojsonRouteLayer}>
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
          )}
          {geojsonPoint && (
            <Source id="points" type="geojson" data={geojsonPoint}>
              <Layer
                id="point"
                type="circle"
                paint={{
                  "circle-radius": 10,
                  "circle-color": "#ff0000",
                }}
              />
            </Source>
          )}
        </MapView>
      </Container>
    </>
  );
};

export default SymbolLayer;
