import { catchError, map, pluck } from "rxjs/operators";
import { ajax, AjaxError } from "rxjs/ajax";
import { of } from "rxjs";

const url = "https://api.github.com/users?per_page=5";

const handleError = (response: Response) => {
  if (!response.ok) throw new Error(response.statusText);
  return response;
};

const catchErrors = (err: AjaxError) => {
  console.warn("Error en: ", err.message);
  return of([]);
};

const fetchPromise = fetch(url);

// fetchPromise
//   .then((resp) => resp.json())
//   .then(console.log)
//   .catch((error) => console.warn(error));

// fetchPromise
//   .then(handleError)
//   .then((resp) => resp.json())
//   .then(console.log)
//   .catch((error) => console.warn("Error en los usuarios", error));

ajax(url)
  .pipe(
    pluck("response"),
    catchError((err) => catchErrors(err))
  )
  .subscribe((users) => console.log("Usuarios: ", users));
