import { Eventing } from "./Eventing";
import { Attribute } from "./Attribute";
import { ApiSync } from "./ApiSync";
import { ModalWrapper } from "./Modal";
import { Collection } from "./Collection";

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = "http://localhost:3000/users";

export class User extends ModalWrapper<UserProps> {
  static buildUser(data: UserProps): User {
    return new User(new Attribute(data), new Eventing(), new ApiSync(rootUrl));
  }

  static buildCollection() {
    return new Collection<User, UserProps>(rootUrl, (json: UserProps) =>
      User.buildUser(json)
    );
  }
}
