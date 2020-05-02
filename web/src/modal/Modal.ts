import { AxiosPromise, AxiosResponse } from "axios";

interface Attribute<T> {
  get<K extends keyof T>(key: K): T[K];
  set(data: T): void;
  getAll(): T;
}
interface Eventing {
  on(eventName: string, callBack: () => void): void;
  trigger(eventName: string): void;
}
interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

interface HasId {
  id?: number;
}

export class ModalWrapper<T extends HasId> {
  constructor(
    private attr: Attribute<T>,
    private events: Eventing,
    private sync: Sync<T>
  ) {}

  get get() {
    return this.attr.get;
  }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  set(data: T): void {
    this.attr.set(data);
    this.trigger("change");
  }

  fetch(): void {
    const id = this.get("id");
    if (!id) {
      throw new Error("Cannot fetch without id");
    }

    this.sync.fetch(id).then((response: AxiosResponse) => {
      this.set(response.data);
    });
  }

  save(): void {
    this.sync
      .save(this.attr.getAll())
      .then((response: AxiosResponse) => {
        this.trigger("save");
      })
      .catch((error) => {
        this.trigger("error");
      });
  }
}
