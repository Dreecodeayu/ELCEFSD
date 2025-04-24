import express from 'express';
import rw from './rw.js';
console.log(rw.readFile());

const app = express();
const user = {
    // "name":"Ayush",
    // "email":"ayush@gmail.com",
    // "pass":"1234"
}
app.get("/", async(req, res) => {
    try {
        const data = await rw.readFile();
        console.log("Sending response:", data);
        res.status(data.status).json({
            "data": data.data,
            "message": data.message
        });
    } catch(error) {
        console.error("GET route error:", error);
        res.status(500).json({
            "Error": error.message
        });
    }
});
app.use(express.json());
app.post("/",async(req,res)=>{
    try{
        const data = req.body;
        console.log(data);
        if (data) await rw.writeFile(data);
        res.status(201).json({"data":data});
    }catch(error){
        res.status(500).json({
            "Error":error
        })
    }

})
const PORT = 8800;
app.listen(PORT, () => console.log(`Server is running on port http://localhost:${PORT}`));
