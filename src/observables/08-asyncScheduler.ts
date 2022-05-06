import { asyncScheduler } from "rxjs";

const saludar = () => console.log("hola mundo");
const saludar2 = ({ username, surname }) => console.log(`Hola, ${username} ${surname}`);

// asyncScheduler.schedule(saludar, 2000);
// asyncScheduler.schedule(saludar2, 2000, { username: "Jose", surname: "RS" });

// No puede ser una arrow function
const subs$ = asyncScheduler.schedule(
    function (state) {
        console.log("state", state);

        this.schedule(state + 1, 1000);
    },
    3000,
    0
);

// setTimeout(() => {
//     subs$.unsubscribe();
// }, 6000);

asyncScheduler.schedule(() => subs$.unsubscribe(), 6000);
