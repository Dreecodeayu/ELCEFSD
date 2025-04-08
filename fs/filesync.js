import fs from "fs";
const writeData = ()=>fs.writeFileSync("./data.csv","This is the sync file");
const readData = ()=>{
    const fileData = fs.readFileSync("./data.csv","utf-8");
    console.log(fileData);
}

const appendData = ()=>fs.appendFileSync("./data.csv","\nThis is the sync file modified");
const deleData = ()=>fs.unlinkSync("./data.csv");
export default {writeData,readData,appendData,deleData};