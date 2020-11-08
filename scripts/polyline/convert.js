import polyline from "@mapbox/polyline";

// returns a string-encoded polyline (from coordinate ordered lat,lng)
const prescision = 6;
const encoded = polyline.encode(
  [
    [35.681653, 139.767498],
    [35.673562, 139.761923],
    [35.667197, 139.757792],
  ],
  prescision
);
const decoded = polyline.decode(encoded, prescision);

console.log(encoded);
console.log(decoded);
