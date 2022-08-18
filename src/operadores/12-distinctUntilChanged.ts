import { from, of } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";

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

from(personajes)
  .pipe(distinctUntilChanged((ant, act) => ant.nombre === act.nombre))
  .subscribe(console.log);
