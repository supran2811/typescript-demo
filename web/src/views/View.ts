import { ModalWrapper } from "../modal/Modal";

export abstract class View<T extends ModalWrapper<K>, K> {
  regionMaps: { [key: string]: Element } = {};

  constructor(public parent: Element, public modal: T) {
    this.bindModal();
  }

  bindModal(): void {
    this.modal.on("change", () => {
      this.render();
    });
  }

  eventMap(): { [key: string]: () => void } {
    return {};
  }

  regionsMap(): { [key: string]: string } {
    return {};
  }

  onRender(): void {}

  abstract template(): string;

  bindEvents(fragment: DocumentFragment): void {
    const events = this.eventMap();
    for (let key in events) {
      const [eventName, selector] = key.split(":");
      fragment.querySelectorAll(selector).forEach((element: Element): void => {
        element.addEventListener(eventName, events[key]);
      });
    }
  }

  mapRegions(fragment: DocumentFragment): void {
    const regions = this.regionsMap();
    for (let key in regions) {
      const element = fragment.querySelector(regions[key]);
      if (element) {
        this.regionMaps[key] = element;
      }
    }
  }

  render(): void {
    this.parent.innerHTML = "";
    const container = document.createElement("template");
    container.innerHTML = this.template();

    this.bindEvents(container.content);
    this.mapRegions(container.content);
    this.onRender();
    this.parent.append(container.content);
  }
}
