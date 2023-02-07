const express = require("express");
const path = require("path")

const app =  express();
require("./db/connect");
const Signupdata = require("./regester");
const { name } = require("ejs");
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.set("view engine" , "ejs");
app.use("/public" , express.static("public"))


app.get("/",(req,res)=>{
    res.render("home");
});

app.get("/contact" ,(req,res)=>{
    res.render("contact")
});

app.get("/purchases",(req,res)=>{
    res.render("purchases")
});

app.get("/signup",(req,res)=>{
    res.render("signup")
});

app.post("/signup",async(req,res)=>{
    try{
        const password = req.body.pass;
        const cpassword = req.body.cpass;

        if(password === cpassword){
            const signupData = new Signupdata({
                name : req.body.namee,
                phone : req.body.phone,
                email : req.body.email,
                pass  : password,
                cpass : cpassword
            })
            const data = await signupData.save();
            res.status(201).render("home");
        }
        else{
            res.send("Password Dosten't Match")
        }
      }catch(error){
        res.status(400).send(error)
      }
    
});




app.listen(port,()=>{
    console.log("working at 3000")
});
