import fs from 'fs/promises';
const readFile = async()=>{
    let message = "";
    let status = 500;
    let data = [];
    try {
        const filedata = await fs.readFile('./data.json', 'utf8');
        message = "File has been read successfully.(async)";
        status = 200;
        data = JSON.stringify(filedata);
    } catch (err) {
        message = "Error reading file.(async)";
        status = 500;
        data = err;
        console.error(err);
    }return{data,status,message};
}
const writeFile = async (data)=>{
    try{
       let dataToSave = [];
       const filedata = await readFile();
       await fs.writeFile("./data.json",JSON.stringify(data),'utf-8');
       console.log("File has been written successfully")
    }catch(error){
       console.log("unable to write file",error);
    }
}
export default {readFile,writeFile};