import { from, of } from "rxjs";
import {
  distinct,
  distinctUntilChanged,
  distinctUntilKeyChanged,
} from "rxjs/operators";

const numeros$ = of(1, 1, 1, 3, 3, 2, 2, 4, 5, 6, 6, 4, 1);

numeros$.pipe(distinctUntilChanged()).subscribe(console.log);

interface Personaje {
  nombre: string;
}

const personajes: Personaje[] = [
  { nombre: "Megaman" },
  { nombre: "Megaman" },
  { nombre: "X" },
  { nombre: "Zero" },
  { nombre: "Dr. Willy" },
  { nombre: "X" },
  { nombre: "X" },
  { nombre: "Megaman" },
  { nombre: "Zero" },
  { nombre: "X" },
];

from(personajes).pipe(distinctUntilKeyChanged("nombre")).subscribe(console.log);
