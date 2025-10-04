// function myFunction(prop) {
//     console.log(x); 
//     if (prop === true) {
//         const x = 10;
//     }
//     console.log(x);
// }

// myFunction(true);

let obj = { //const obj este variabila care nu poate fi reasignata si constanta la nivel de referinta
    name: "Test",
}
// obj.name = "Changed";
obj = {
    name: "Changed",
}
console.log(obj);
