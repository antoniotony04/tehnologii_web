const user = {
    name: "Tony",
    sayHello: function() {
        console.log("Hello", this.name);
    },
    sayHello2: () => { //creeaza propriul sau context local la functie si nu mai are acces la contextul exterior
        console.log("Hello2", this.name);
    }
}

user['name'] = "John";
user.age = 30;
console.log(user);

// function add(a, b) {
//     return a + b;
// }

// const add2=(a, b) => a + b;

// user.sayHello();
// user.sayHello2();