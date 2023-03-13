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

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
} // <-- Enum add vlue that increasses for next params.

const person = {
  name: "Michael",
  age: 28,
  hobby: ["Psychology", "Cooking"],
  role: Role.ADMIN,
};
// console.log(person.name);

const favoriteActivities = ["Sports"];

for (const hobby of person.hobby) {
  console.log(hobby.toLocaleUpperCase());
  // console.log(hobby.map()) typescript knows what kind of methods are allowed.
}
if (person.role === Role.ADMIN) {
  console.log("It is admin");
}
//console.log(person.role);
