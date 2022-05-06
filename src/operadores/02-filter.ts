import { from, fromEvent, range } from "rxjs";
import { filter, map } from "rxjs/operators";

// range(1, 10)
//     .pipe(filter((val) => val % 2 === 1))
//     .subscribe(console.log);

range(20, 30)
    .pipe(
        filter((val, index) => {
            console.log("index", index);
            return val % 2 === 1;
        })
    )
    .subscribe(console.log);

interface Personaje {
    tipo: string;
    nombre: string;
}

const personajes = [
    {
        tipo: "heroe",
        nombre: "Robin",
    },
    {
        tipo: "villano",
        nombre: "Joker",
    },
    {
        tipo: "heroe",
        nombre: "Batman",
    },
];

from<Personaje[]>(personajes)
    .pipe(filter((p) => p.tipo !== "heroe"))
    .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup").pipe(
    map((event) => event.code),
    filter((key) => key === "Enter")
);

keyup$.subscribe(console.log);
