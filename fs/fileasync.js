import fs from "fs/promises";

const asyncwrite = async ()=>{
    try{
       await fs.writeFile("./data.csv","This is async file");
       console.log("File has been written successfully")
    }catch(error){
       console.log("unable to write file",error);
    }
}

asyncwrite();

const asyncread = async ()=>{
    try{
        await fs.readFile("./data.csv","utf-8");
    }catch(error){
        console.log("unable to read file",error);
    }
}
asyncread();
const asyncappend = async ()=>{
    try{
        await fs.appendFile("./data.csv","This is async file modified");
    }catch(error){
        console.log("unable to append file",error);
    }
}
asyncappend();