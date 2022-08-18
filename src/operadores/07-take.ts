import { of } from "rxjs";
import { take, tap } from "rxjs/operators";

const numeros$ = of(1, 2, 3, 4, 5).pipe(tap(console.log));

numeros$
  .pipe(
    tap((t) => console.log("tap", t)),
    take(3)
  )
  .subscribe({
    next: (value) => console.log("next", value),
    complete: () => console.log("complete"),
  });
