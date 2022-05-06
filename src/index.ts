import { range } from "rxjs";
import { filter } from "rxjs/operators";

range(1, 10)
    .pipe(filter((val) => val % 2 === 1))
    .subscribe(console.log);
