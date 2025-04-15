// import rw from "./filesync.js";
// import asyncRW from "./fileasync.js";
import callbackRW from "./fileCallback.js";

callbackRW.callbackWriter(); // Automatically writes, then reads

// asyncRW.asyncwrite();
// const data = await asyncRW.asyncread();
// console.log(data);

// console.log(rw);
// rw.writeData();
// rw.readData();