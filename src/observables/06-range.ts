import { asyncScheduler, range } from "rxjs";

const source$ = range(1, 5, asyncScheduler);

console.log("== INICIO ==");
source$.subscribe(console.log);
console.log("== FIN ==");
