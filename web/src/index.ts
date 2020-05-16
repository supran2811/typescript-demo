import { UserEdit } from "./views/UserEdit";
import { UserList } from "./views/UserList";
import { User } from "./modal/User";
import { Collection } from "./modal/Collection";

// const user = User.buildUser({ name: "Supran", age: 38 });

// const userForm = new UserForm(document.getElementById("root"), user);

const rootElem = document.getElementById("root");

if (rootElem) {
  // new UserEdit(rootElem, user).render();
  new UserList(rootElem, User.buildCollection()).render();
}

// userForm.render();
