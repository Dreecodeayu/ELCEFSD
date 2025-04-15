import fs from "fs";

const callbackWriter = () => {
    fs.writeFile(".dataCallback.csv", "This is the callback file", (err) => {
        if (err) {
            console.log("Error writing file:", err);
        } else {
            console.log("File written successfully");
            callbackReader(); // read only after write succeeds
        }
    });
};

const callbackReader = () => {
    fs.readFile("dataCallback.csv", "utf-8", (err, data) => {
        if (err) {
            console.log("Error reading file:", err);
        } else {
            console.log("File data:", data);
        }
    });
};

export default { callbackWriter, callbackReader };
