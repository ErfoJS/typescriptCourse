var person = {
    name: "Michael",
    age: 28,
    hobby: ["Psychology", "Cooking"],
    role: [2, "singer"]
};
// console.log(person.name);
var favoriteActivities = ["Sports"];
for (var _i = 0, _a = person.hobby; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toLocaleUpperCase());
    // console.log(hobby.map()) typescript knows what kind of methods are allowed.
}
