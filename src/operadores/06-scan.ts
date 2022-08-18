import { from } from "rxjs";
import { reduce, scan, map } from "rxjs/operators";

const numeros = [1, 2, 3, 4, 5];

const totalAcumulador = (acc: number, cur: number) => acc + cur;

// Reduce
from(numeros).pipe(reduce(totalAcumulador, 0)).subscribe(console.log);

// Scan
from(numeros).pipe(scan(totalAcumulador, 0)).subscribe(console.log);

// Redux
interface User {
  id?: string;
  auth?: boolean;
  token?: string;
  edad?: number;
}
const user: User[] = [
  { id: "jos", auth: true, token: "ABC123", edad: 40 },
  { id: "jos", auth: true, token: "ABC", edad: 21 },
  { id: "jos", auth: false, token: undefined, edad: 80 },
];

const state$ = from(user).pipe(
  scan<User, User>(
    (acc, cur) => {
      return { ...acc, ...cur };
    },
    { edad: 33 }
  )
);

const id$ = state$.pipe(map((state) => state.id));
id$.subscribe(console.log);
