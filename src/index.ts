import { ajax } from "rxjs/ajax";

const url = "https://httpbin.org/delay/1";

// ajax
//   .delete(url, {
//     "Mi-Token": "ABC1234",
//   })
//   .subscribe(console.log);

ajax({
  url,
  method: "POST",
  headers: {
    "mi-token": "ABC123",
  },
  body: {
    id: 1,
    nombre: "Jose",
  },
}).subscribe(console.log);
