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
    let message = "";
    let status = 500;
    let data = [];

    try {
        const result = await readFile(); 
        data = Array.isArray(result.data) ? result.data : [];

        data.push(newData); 

        await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");

        message = "File has been written successfully.";
        status = 200;
    } catch (error) {
        message = "Write error";
        data = { error: error.message };
    }

    return { data, status, message };
}

export default {readFile, writeFile};