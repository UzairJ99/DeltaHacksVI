import { locationsList } from "./constants";
import { createLocationObject } from "./auxFncs";

const directions = [
  {
    from: locationsList.Cambridge,
    to: locationsList.Hamilton,
    strokeColor: "#f68f54"
  },
  {
    from: locationsList.Milton,
    to: locationsList.Hamilton,
    strokeColor: "#f68f54"
  },
  {
    from: locationsList.Oakville,
    to: locationsList.Hamilton,
    strokeColor: "#f68f54"
  },
  {
    from: locationsList.Burlington,
    to: locationsList.Hamilton,
    strokeColor: "#f68f54"
  },
  {
    from: locationsList.Brampton,
    to: locationsList.Hamilton,
    strokeColor: "#f68f54"
  },
  {
    from: locationsList.Mississauge,
    to: locationsList.Hamilton,
    strokeColor: "#f68f54"
  },
  {
    from: locationsList.Toronto,
    to: locationsList.Hamilton,
    strokeColor: "#f68f54"
  },
  {
    from: locationsList.Brantford,
    to: locationsList.Hamilton,
    strokeColor: "#f68f54"
  },
  {
    from: locationsList.Niagara,
    to: locationsList.Hamilton,
    strokeColor: "#f68f54"
  },
];
const DummyLocations = directions.map(elem => {
  return createLocationObject(
    elem.from.latLng,
    elem.from.title,
    elem.to.latLng,
    elem.to.title,
    elem.strokeColor
  );
});

export default DummyLocations;
