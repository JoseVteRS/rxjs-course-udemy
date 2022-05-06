import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
    next: (value) => console.log(`Siguiente [next] ${value}`),
    error: (value) => console.warn(`Error [error] ${value}`),
    complete: () => console.log(`Completado [complete]`),
};

const intervalo$ = new Observable<number>((subs) => {
    const intervalRandomNumber = setInterval(() => subs.next(Math.random()), 1000);

    return () => {
        clearInterval(intervalRandomNumber);
        console.log("Intervalo destruido");
    };
});

// const subs1 = intervalo$.subscribe((randomNumber) => console.log("Subs 1: ", randomNumber));
// const subs2 = intervalo$.subscribe((randomNumber) => console.log("Subs 2: ", randomNumber));

//* SUBJECT
/**
 *1- Casteo múltiple
 * 2- También es un observer
 * 3- Next, erro y complete
 */
const subject$ = new Subject();
const subscription = intervalo$.subscribe(subject$);
const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
    subject$.next(10);
    subject$.complete();
    subscription.unsubscribe();
}, 3500);
