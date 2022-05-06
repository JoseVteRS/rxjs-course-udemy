import { timer } from "rxjs";

const observer = {
    next: (val) => console.log("next: ", val),
    complete: () => console.log("complete"),
};

const hoyEn5 = new Date();
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);

// const interval$ = interval(2000);

// const timer$ = timer(2000);
const timer$ = timer(hoyEn5);

console.log("INICIO");
// interval$.subscribe(observer);
timer$.subscribe(observer);
console.log("FIN");
