import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  map: {
    "min-height": "80vh",
  },
}));

const MapView = () => {
  const classes = useStyles();
  return <div id="map" className={classes.map}></div>;
};
export default MapView;
