import { catchError, of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";

const url = "https://httpbin.org/delay/1";

const handleError = (resp: AjaxError) => {
  console.warn("error:", resp.message);
  return of({
    ok: false,
    usuarios: [],
  });
};

const obs$ = ajax.getJSON(url).pipe(catchError(handleError));
// const obs2$ = ajax(url).pipe(catchError(handleError));

// obs$.subscribe((resp) => console.log("getJSON", resp));
// obs2$.subscribe((resp) => console.log("ajax", resp));

obs$.pipe(catchError(handleError)).subscribe({
  next: (val) => console.log("next:", val),
  error: (err) => console.warn("error en subs:", err),
  complete: () => console.log("complete"),
});
