const express=require("express");
const app=express();
app.use((req,res,next)=>{
    console.log("I am middleware-1");
    req.responseTime=new Date(Date.now()).toString();
    console.log(req.method,req.path,req.responseTime,req.hostname);
    res.send("Middleware 1");
    next();
});
app.get("/",(req,res)=>{
    res.send(" I am root");
})
app.get("/random",(req,res)=>{
    res.send("/this is a random page");
})
app.listen(8081,()=>{
    console.log("App is listening on port 8081");
})