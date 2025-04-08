import fs from "fs/promises";

const asyncwrite = async ()=>{
    try{
       await fs.writeFile("./dataasync.csv","This is async file");
       console.log("File has been written successfully")
    }catch(error){
       console.log("unable to write file",error);
    }
}

//asyncwrite();

const asyncread = async()=>{
    try{
        const FileData = await fs.readFile("./dataasync.csv","utf-8");
        console.log("File has been read successfully");
        return FileData;
    }catch(error){
        console.log("error reading",error);
    }
}

export default {asyncwrite,asyncread};

const data = await asyncread();
console.log(data);

// const asyncread = async ()=>{
//     try{
//         await fs.readFile("./datasync.csv","utf-8");
//     }catch(error){
//         console.log("unable to read file",error);
//     }
// }
// asyncread();
// const asyncappend = async ()=>{
//     try{
//         await fs.appendFile("./datasync.csv","\nThis is async file modified");
//     }catch(error){
//         console.log("unable to append file",error);
//     }
// }
// asyncappend();