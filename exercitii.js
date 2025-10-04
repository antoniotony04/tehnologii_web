console.log("----- 1.");
//Ex 1. Implemetează o funcție arrow care primește ca parametru un array de string și îmi returnează un singur string obținut prin concatenarea string-urilor din array-ul primit ca parametru.

let arrString = ["Ana", "are", "mere", "si", "pere", "."];
const ex1 = (arrString) => arrString.join(" ");

console.log("Propozitia completa: " + ex1(arrString));

console.log("----- 2.");
//Ex2. Implementează o funcție care returnează numărul de caractere diferite între două string-uri de
//aceeași lungime primite ca parametri. Dacă string-urile primite nu sunt de aceeași lungime, funcția va
//returna -1.

const ex2 = (str1, str2) => {
    if (str1.length !== str2.length) {
        return -1;
    } else {
        let c = 0;
        for (let i = 0; i < str1.length; i++) {
            if (str1[i] !== str2[i]) {
                c++;
            }
        }
        return "Numarul de caractere diferite: " + c;
    }
}

console.log(ex2("test", "best"));
console.log(ex2("test", "filmul"));

console.log("----- 3.");
//Ex3. Implementează o funcție care primește ca și parametri un string și o literă și returnează de câte
//ori se regăsește litera în respectivul text.

const ex3 = (str, char) => {
    let c = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            c++;
        }
    }
    return "Litera " + char + " se regaseste de " + c + " ori in textul " + str;
}
console.log(ex3("test", "t"));
console.log(ex3("test", "a"));

console.log("----- 4.");
//Ex4. Implementează o funcție care primește ca parametrii două array-uri de aceeași lungime și
//returnează un array cu elementele din cele două surse intercalate.

const ex4 = (arr1, arr2) => { // diferenta dintre o functie cu sageata si una fara este ca cea cu sageata nu are propriul context local iar cea fara are 
    if(arr1.length !== arr2.length) {
        return 0;
    } else {
        let newArr = [];
        for (let i = 0; i < arr1.length; i++) {
            newArr.push(arr1[i]);
            newArr.push(arr2[i]);
        }
        return "Elementele intercalate sunt: " + newArr;
    }   
}
console.log(ex4([1, 2, 3], ['a', 'b', 'c']));
console.log(ex4([1, 2], ['a', 'b', 'c']));

console.log("----- 5.");
//Ex5. Implementează o funcție care primește ca și parametru un array de numere și care calculează
//media aritmetică a numerelor.

const ex5 = (arr) => {
    let suma = 0;
    for(let i = 0; i < arr.length; i++) {
        suma += arr[i];
    }
    return "Media aritmetica a numerelor din array (" + arr + ") este: " +suma / arr.length;
}
console.log(ex5([1, 2, 3, 4, 5]));
console.log(ex5([10, 20, 30]));