import { View } from "./View";
import { User, UserProps } from "../modal/User";

export class UserForm extends View<User, UserProps> {
  eventMap(): { [key: string]: () => void } {
    return {
      "click:.set-name": this.onSetNameClick,
      "click:.set-age": this.onSetAgeClick,
      "click:.save": this.onSaveClick,
    };
  }
  onSetNameClick = (): void => {
    const inputElement = this.parent.querySelector("input");
    if (inputElement) {
      const name = inputElement.value;
      this.modal.set({ name });
    }
  };

  onSetAgeClick = (): void => {
    this.modal.set({ age: Math.floor(Math.random() * 100 + 1) });
  };

  onSaveClick = (): void => {
    this.modal.save();
  };
  template(): string {
    return `
      <div>
        <input /> 
        <button class="set-name">Set Name</button>
        <button class="set-age">Set Random Age</button>
        <button class="save">Save</button>
      </div>
    `;
  }
}
