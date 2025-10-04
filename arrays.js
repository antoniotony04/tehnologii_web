const arr = [1, 2, 3, 4, 5];

// console.log(arr.length);

const newArr = arr.slice(1, 3); //nu modifica array-ul original

// console.log(newArr);

const sum = arr.reduce((acc, val) => acc + val, 0); // acc = acumulator, val = valoarea curenta 
// acumulatorul este initializat cu 0

const oddNumbers = arr.filter(val => val % 2 !== 0); //filtreaza numerele impare

// console.log(sum);
// console.log(oddNumbers);

for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
}

// arr.forEach(el => console.log(el)); //itereaza prin fiecare element din array

for(const el of arr) {
    // console.log(el);
} //itereaza prin fiecare element din array

for(const el in arr) {
    // console.log(el);
} //itereaza prin fiecare INDEX din array  incepe cu 0

arr.map(el => console.log(el)); //returneaza un nou array cu valorile modificate

const newArr2 = arr.map(el => {
    return el * 2;
})
console.log(newArr2); //returneaza un nou array cu valorile modificate

