import { CollectionView } from "./CollectionView";
import { User, UserProps } from "../modal/User";
import { UserShow } from "./UserShow";

export class UserList extends CollectionView<User, UserProps> {
  renderItem(modal: User, parentElement: Element): void {
    new UserShow(parentElement, modal).render();
  }
}
