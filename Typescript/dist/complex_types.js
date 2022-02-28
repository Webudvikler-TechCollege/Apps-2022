"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["READ_ONLY"] = 2] = "READ_ONLY";
    Role[Role["AUTHOR"] = 3] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: "Tim",
    age: 65,
    hobbies: ['HTML', 'CSS'],
    address: ['Testvej', 3],
    role: Role.ADMIN,
    dashboard: [100, 'NemID', false, { id: 33 }]
};
console.log(person);
for (let hobby of person.hobbies) {
    console.log(hobby.toLocaleUpperCase());
}
