import express from 'express';
const app = express();
const user = {
    "name":"Ayush",
    "email":"ayush@gmail.com",
    "pass":"1234"
}
app.get("/",(req,res)=>{
    try{
        res.status(200).json({
            "data":user,
            "message":"This express server"
        })
    }catch(error){
        res.status(200).json({
            "Error":error
        })
    }
});
const PORT = 8800;
app.listen(PORT, () => console.log(`Server is running on port http://localhost:${PORT}`));
