import { asyncScheduler, fromEvent } from "rxjs";
import { throttleTime, distinctUntilChanged, pluck } from "rxjs/operators";

const click$ = fromEvent(document, "click");

click$.pipe(throttleTime(3000)).subscribe(console.log);

// Ejemplo 2

const input = document.createElement("input");
document.querySelector("body")?.append(input);

const input$ = fromEvent(input, "keyup");

input$
  .pipe(
    pluck("target", "value"),
    throttleTime(1000, asyncScheduler, {
      leading: false,
      trailing: true,
    }),
    distinctUntilChanged()
  )
  .subscribe(console.log);
