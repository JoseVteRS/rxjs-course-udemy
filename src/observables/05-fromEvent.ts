import { fromEvent } from "rxjs";

/**
 * Eventos del DOM
 */

const src1$ = fromEvent<PointerEvent>(document, "click");
const src2$ = fromEvent<KeyboardEvent>(document, "keyup");

const observer = {
    next: (value) => console.log("next", value),
};

src1$.subscribe((ev) => {
    const { x, y } = ev;
    console.log({ y, x });
});
src2$.subscribe((ev) => {
    console.log(ev);
});
