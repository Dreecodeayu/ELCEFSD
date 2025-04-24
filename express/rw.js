import fs from 'fs/promises';

const readFile = async() => {
    let message = "";
    let status = 500;
    let data = [];
    try {
        const filedata = await fs.readFile('./data.json', 'utf8');
        message = "File has been read successfully.(async)";
        status = 200;
        data = JSON.parse(filedata); 
    } catch (err) {
        message = "Error reading file.(async)";
        status = 500;
        data = err;
        console.error(err);
    }
    return {data, status, message};
}

const writeFile = async (data) => {
    try {
        await fs.writeFile("./data.json", JSON.stringify(data, null, 2), 'utf-8');
        console.log("File has been written successfully");
    } catch(error) {
        console.log("Unable to write file", error);
        throw error; // Re-throw to handle in the route
    }
}

export default {readFile, writeFile};