import express from "express"
import mysql from "mysql2"
import cors from "cors"
const app = express()
app.use(express.json());
app.use(cors());
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Iamusing@3may2001",
    database:"crop_cultivation"
})

app.post('/signup',async(req,res) => {

    const  phone = req.body.phone;
    const  uname = req.body.uname;
    const  age = req.body.age;
    const  address = req.body.address;
    const  password = req.body.password;
    const  cpassword = req.body.cpassword;

    db.query("INSERT INTO registration (phone, name,age,address,password,cpassword) VALUES (?,?,?,?,?,?)",[phone,uname,age,address,password,cpassword], (err,result)=>{
        console.log(err);
    });
    
});

app.post('/login',(req,res)=>{
    
    const  uname = req.body.uname;
    const  password = req.body.password;

    db.query("SELECT * FROM registration WHERE name = ? AND password = ?",[uname,password], (err,result)=>{
        if(err){
            return res.json("Error");
        }
        
        if(result.length > 0){
            return res.json("Success");
        }else{
            return res.json("Wrong combination");
        }
    });
});
//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Iamusing@3may2001'
// app.get("/books", (req,res)=>{
//     const q = "SELECT * FROM books"
//     db.query(q,(err,data)=>{
//         if(err) return res.json(err)
//         return res.json(data)
//     })
// })
app.listen(3002, ()=>{
    console.log("connected to backend");
})