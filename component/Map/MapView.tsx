import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  map: {
    "min-height": "80vh",
  },
}));

const MapView = (props: { mapRef: any }) => {
  const classes = useStyles();
  return <div id="map" ref={props.mapRef} className={classes.map}></div>;
};
export default MapView;
