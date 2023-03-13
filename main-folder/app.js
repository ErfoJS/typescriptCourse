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
// const ADMIN = 0;      <--,
// const READ_ONLY = 1;  <--| manual Enum (bad but works)
// const AUTHOR = 2;     <--'
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {})); // <-- Enum add vlue that increasses for next params.
var person = {
    name: "Michael",
    age: 28,
    hobby: ["Psychology", "Cooking"],
    role: Role.ADMIN
};
// console.log(person.name);
var favoriteActivities = ["Sports"];
for (var _i = 0, _a = person.hobby; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toLocaleUpperCase());
    // console.log(hobby.map()) typescript knows what kind of methods are allowed.
}
if (person.role === Role.ADMIN) {
    // never works, diffrences in typing method. Enum intro.
    console.log("It is admin");
}
//console.log(person.role);
