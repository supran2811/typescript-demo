import faker from "faker";
import { MappableElement } from "./MappableElement";

export class User implements MappableElement {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `User Name is ${this.name}`;
  }
}
