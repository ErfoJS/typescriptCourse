const person: {
  name: string;
  age: number;
  hobby: string[];
  role: [number, string]; // tuple type
} = {
  name: "Michael",
  age: 28,
  hobby: ["Psychology", "Cooking"],
  role: [2, "singer"],
};
// console.log(person.name);

const favoriteActivities = ["Sports"];

for (const hobby of person.hobby) {
  console.log(hobby.toLocaleUpperCase());
  // console.log(hobby.map()) typescript knows what kind of methods are allowed.
}
