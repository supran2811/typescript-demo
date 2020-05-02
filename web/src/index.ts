import { User } from "./modal/User";

const collection = User.buildCollection();
collection.fetch();

collection.on("change", () => {
  console.log("Collection fetched ", collection);
});
