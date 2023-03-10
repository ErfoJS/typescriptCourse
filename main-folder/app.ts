const person =
  // : {
  //   name: string;
  //   age: number;
  // }
  {
    name: "Michael",
    age: 28,
    hobby: ["Psychology", "Cooking"],
  };
// console.log(person.name);

const favoriteActivities = ["Sports"];

for (const hobby of person.hobby) {
  console.log(hobby.toLocaleUpperCase());
  // console.log(hobby.map()) typescript knows what kind of methods are allowed.
}
