const express=require("express");
const app=express();

app.get("/blocking", (req, res)=>{
    let worker=new Worker('worker.js');

    worker.on('messgage', (req, res)=>{
        res.send(`data ${data}`);
    });
});

// app.get("/", (req, res)=>{
//     let count=0;
//     for(let i=0; i<20_000_000_000; i++){
//         count++;
//     }

//     res.send(`Response ${count}`);
// });

app.get("/non-blocking", (req, res)=>{
    res.send("Non Blocking Response");
})

app.listen(3000, ()=>console.log("Server Started"));