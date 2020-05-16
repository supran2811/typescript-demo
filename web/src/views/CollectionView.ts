import { Collection } from "../modal/Collection";

export abstract class CollectionView<T, K> {
  constructor(public parent: Element, public collection: Collection<T, K>) {
    this.collection.fetch();
    this.collection.on("change", () => {
      this.render();
    });
  }

  abstract renderItem(modal: T, parentElem: Element): void;

  render(): void {
    this.parent.innerHTML = "";
    const templeteElement = document.createElement("template");
    this.collection.modal.forEach((modal: T) => {
      const element = document.createElement("div");
      this.renderItem(modal, element);
      templeteElement.content.append(element);
    });
    this.parent.append(templeteElement.content);
  }
}
