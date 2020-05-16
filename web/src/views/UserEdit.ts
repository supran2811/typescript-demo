import { View } from "./View";
import { User, UserProps } from "../modal/User";
import { UserForm } from "./UserForm";
import { UserShow } from "./UserShow";

export class UserEdit extends View<User, UserProps> {
  regionsMap(): { [key: string]: string } {
    return {
      userShow: ".user-show",
      userForm: ".user-form",
    };
  }

  onRender() {
    new UserShow(this.regionMaps["userShow"], this.modal).render();
    new UserForm(this.regionMaps["userForm"], this.modal).render();
  }

  template(): string {
    return `
      <div>
        <div class="user-show"></div>
        <div class="user-form"></div>
      </div>
    `;
  }
}
