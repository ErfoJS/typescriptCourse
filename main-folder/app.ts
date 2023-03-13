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

const ADMIN = 0; // <--,
const READ_ONLY = 1; // <--| manual Enum (bad but works)
const AUTHOR = 2; // <--'

const person = {
  name: "Michael",
  age: 28,
  hobby: ["Psychology", "Cooking"],
  role: ADMIN,
};
// console.log(person.name);

const favoriteActivities = ["Sports"];

for (const hobby of person.hobby) {
  console.log(hobby.toLocaleUpperCase());
  // console.log(hobby.map()) typescript knows what kind of methods are allowed.
}
if (person.role === ADMIN) {
  // never works, diffrences in typing method. Enum intro.
  console.log("It is admin");
}
//console.log(person.role);
