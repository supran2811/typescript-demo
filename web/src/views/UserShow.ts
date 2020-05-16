import { View } from "./View";
import { User, UserProps } from "../modal/User";

export class UserShow extends View<User, UserProps> {
  template(): string {
    return `
      <div>
        <h1>User form</h1>
        <div>User name : ${this.modal.get("name")}</div>
        <div>User age: ${this.modal.get("age")}</div>
      </div>
    `;
  }
}
