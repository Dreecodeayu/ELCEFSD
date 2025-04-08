import rw from "./filesync.js";
import asyncRW from "fileasync.js";
asyncRW.asyncwrite();
const data = await asyncRW.asyncread();
console.log(data);

// console.log(rw);
// rw.writeData();
// rw.readData();