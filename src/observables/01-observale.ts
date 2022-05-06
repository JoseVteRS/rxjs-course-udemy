import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
    next: (value) => console.log(`Siguiente [next] ${value}`),
    error: (value) => console.warn(`Error [error] ${value}`),
    complete: () => console.log(`Completado [complete]`),
};

const obs$ = new Observable<string>((subs) => {
    subs.next("Hola");
    subs.next("Mundo");

    subs.next("Hola");
    subs.next("Mundo");

    // Forzar un error
    // const a = undefined;
    // a.nombre = "Jose";

    subs.complete();

    subs.next("Hola");
    subs.next("Mundo");
});

obs$.subscribe(observer);

// obs$.subscribe({
//     next: (v) => console.log(v),
//     error: (e) => console.warn(e),
//     complete: () => console.info("complete"),
// });
