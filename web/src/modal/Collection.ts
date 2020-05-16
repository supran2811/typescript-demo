import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";

export class Collection<T, K> {
  modal: T[] = [];
  events: Eventing = new Eventing();

  constructor(public rootUrl: string, public deserializer: (json: K) => T) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios
      .get(this.rootUrl)
      .then((response: AxiosResponse) => {
        this.modal = response.data.map((data: K) => this.deserializer(data));
        this.trigger("change");
      })
      .catch((error) => this.trigger("error"));
  }
}
