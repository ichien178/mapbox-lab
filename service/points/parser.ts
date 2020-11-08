import { flatten, isNumber } from "lodash";
import mapboxgl from "mapbox-gl";

/**
 *
 * @param singleLine 139.761022,35.676966;139.747353,35.669031
 */
export const parseCoordinatesBySingleLine = (
  singleLine: string
): mapboxgl.LngLat[] => {
  return singleLine
    .split(";")
    .filter((l) => l !== "")
    .map((p) => {
      const latLng = p.split(",");
      if (latLng.length !== 2 && !isNumber(latLng[0]) && !isNumber(latLng[0])) {
        return null;
      }
      return new mapboxgl.LngLat(Number(latLng[0]), Number(latLng[1]));
    })
    .filter((ll) => ll !== null);
};

export const parseCoordinatesByMultiLine = (
  multiLine: string
): mapboxgl.LngLat[] => {
  const v = multiLine
    .split("\n")
    .filter((l) => l !== "")
    .map((l) => parseCoordinatesBySingleLine(l));

  return flatten(v);
};
