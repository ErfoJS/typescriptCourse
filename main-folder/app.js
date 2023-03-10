var person = 
// : {
//   name: string;
//   age: number;
// }
{
    name: "Michael",
    age: 28,
    hobby: ["Psychology", "Cooking"]
};
// console.log(person.name);
var favoriteActivities = ["Sports"];
for (var _i = 0, _a = person.hobby; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(typeof hobby.toLocaleUpperCase());
    // console.log(hobby.map()) typescript knows what kind of methods are allowed.
}
