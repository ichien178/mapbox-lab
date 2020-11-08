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
