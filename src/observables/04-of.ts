import { of } from "rxjs";

// const obs$ = of<number>(1, 2, 3, 4, 5, 6, 7, 8, 9);
const obs$ = of<any>([1, 2], { a: 1, b: 2 }, function () {}, true, Promise.resolve(true));

console.log("Inicio obs$");

const observer: Observer = {
    next: (value) => console.log(`next ${value}`),
    error: null,
    complete: () => console.log(`Terminamos la secuencia`),
};
console.log("Fin obs$");

obs$.subscribe(observer);
