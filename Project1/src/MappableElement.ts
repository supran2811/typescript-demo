export interface MappableElement {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}
