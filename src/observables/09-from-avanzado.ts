/**
 * of = toma argumentos y genera una secuencia de valores
 * from = [], {}, Promise, iterable, observable
 */

import { from } from "rxjs";

const observer = {
    next: (dev) => console.log("next: ", dev),
    complete: () => console.log("Complete"),
};

const miGenerador = function* () {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
};

const miIterable = miGenerador();

from(miIterable).subscribe(observer);

// const source$ = from("Jose Vte");
const source$ = from(fetch("https://api.github.com/users/Desarrollo-Util"));

// source$.subscribe(async (resp) => {
//     const dataRest = await resp.json();

//     console.log(dataRest);
// });
