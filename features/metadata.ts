import "reflect-metadata";

// const plane = {
//   color: "red",
// };

// Reflect.defineMetadata("note", "hi threre!", plane, "color");

// const note = Reflect.getMetadata("note", plane, "color");

// console.log(note);

@printMetadata
class Plane {
  @markFunction("Hi there!!!!")
  fly() {
    console.log("vrrrrrrrrrr");
  }
}

function markFunction(secretInfo: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata("secret", secretInfo, target, key);
  };
}

function printMetadata(target: typeof Plane) {
  for (let key in target.prototype) {
    const secret = Reflect.getMetadata("secret", target.prototype, key);
    console.log(secret);
  }
}
