import { MappableElement } from "./MappableElement";

export class CustomMap {
  private googeMap: google.maps.Map;

  constructor(divId) {
    this.googeMap = new google.maps.Map(divId, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(element: MappableElement): void {
    const marker = new google.maps.Marker({
      map: this.googeMap,
      position: {
        lat: element.location.lat,
        lng: element.location.lng,
      },
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: element.markerContent(),
      });
      infoWindow.open(this.googeMap, marker);
    });
  }
}
