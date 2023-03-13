// const person: {
//   name: string;
//   age: number;
//   hobby: string[];
//   role: [number, string]; // tuple type
// } = {
//   name: "Michael",
//   age: 28,
//   hobby: ["Psychology", "Cooking"],
//   role: [2, "singer"],
// };
var person = {
    name: "Michael",
    age: 28,
    hobby: ["Psychology", "Cooking"],
    role: "Read Only User"
};
// console.log(person.name);
var favoriteActivities = ["Sports"];
for (var _i = 0, _a = person.hobby; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toLocaleUpperCase());
    // console.log(hobby.map()) typescript knows what kind of methods are allowed.
}
if (person.role === "READ_ONLY_USER") {
    // never works, diffrences in typing method. Enum intro.
    console.log("anything");
}
console.log(person.role);
