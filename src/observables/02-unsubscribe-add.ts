import { Observable, Observer } from "rxjs";

const ONE_MINUTE = 1000;

const observer: Observer<number> = {
    next: (value) => console.log(`Siguiente [next] ${value}`),
    error: (value) => console.warn(`Error [error] ${value}`),
    complete: () => console.log(`Completado [complete]`),
};

const intervalo$ = new Observable<number>((subscriber) => {
    // Crear un contador
    let count = 0;

    const interval = setInterval(() => {
        // Cada segundo
        count++;
        subscriber.next(count);
    }, ONE_MINUTE);

    setTimeout(() => {
        subscriber.complete();
    }, 2500);

    return () => {
        clearInterval(interval), console.log("Intervalo destruido");
    };
});

const subscription = intervalo$.subscribe(observer);
const subscription1 = intervalo$.subscribe(observer);
const subscription2 = intervalo$.subscribe(observer);

// subscription.add(subscription1).add(subscription2);
subscription.add(subscription1);
subscription1.add(subscription2);

setTimeout(() => {
    subscription.unsubscribe();
    console.log("Completado Timeout");
}, 6000);
