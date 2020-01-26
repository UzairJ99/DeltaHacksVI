const key = "AIzaSyBbbg3a1NEM22ItuqDEXeBk3U_7xWRXF8o";

export const G_API_URL = `https://maps.googleapis.com/maps/api/js?key=${key}&&v=3.exp&libraries=geometry,drawing,places`;

const convertTolatLng = (latLng, title) => {
  return {
    latLng,
    title
  };
};

export const locationsList = {
  Hamilton: convertTolatLng("19.022002, 72.867721", "Hamilton"),
  Cambridge: convertTolatLng("43.397789, -80.307220", "Cambridge"),
  Milton: convertTolatLng("43.518299, -79.877403", "Milton"),
  Oakville: convertTolatLng("43.466789, -79.690300", "Oakville"),
  Burlington: convertTolatLng("43.325520, -79.799034", "Burlington"),
  Brampton: convertTolatLng("43.684021, -79.759048", "Brampton"),
  Mississauge: convertTolatLng("43.591290, -79.650253", "Mississauge"),
  Toronto: convertTolatLng("43.653225, -79.383186", "Toronto"),
  Brantford: convertTolatLng("43.1554354, -80.2665916", "Brantford"),
  Niagara: convertTolatLng("43.100983, -79.115295", "Niagara Falls"),
};