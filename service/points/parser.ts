import mapboxgl from "mapbox-gl";

export const parseCoordinatesByMultiLine = (
  multiLine: string
): mapboxgl.LngLat[] => {
  return multiLine
    .split("\n")
    .filter((l) => l !== "")
    .map((p) => {
      const latLng = p.split(",");
      return new mapboxgl.LngLat(Number(latLng[1]), Number(latLng[0]));
    });
};

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
      return new mapboxgl.LngLat(Number(latLng[0]), Number(latLng[1]));
    });
};
