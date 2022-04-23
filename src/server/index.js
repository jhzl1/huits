const express = require('express');
const db = require('./config/db')
const cors = require('cors')

const app = express();
const  PORT = 3002;
app.use(cors());
app.use(express.json())

// Route to get all posts
app.get("/api/get", (req,res)=>{
    console.log('ENtra al get');
db.query("SELECT * FROM Parameters", (err,result)=>{
    if(err) {
    console.log(err)
    } 
res.send(result)
});   });

// Route to get one post
app.get("/api/getFromId/:id", (req,res)=>{

const id = req.params.id;
 db.query("SELECT * FROM Parameters WHERE id = ?", id, 
 (err,result)=>{
    if(err) {
    console.log(err)
    } 
    res.send(result)
    });   });

// Route for creating the post
app.post('/api/update', (req,res)=> {

const name = req.body.name;
const description = req.body.description;
const isdeleted = 0;

   db.query("UPDATE Parameters SET Description = ? WHERE Id = 1",[description], (err,result)=>{
   if(err) {
   console.log(err)
   } 
   console.log(result)
});   })

// Route to delete a post
app.delete('/api/delete/:id',(req,res)=>{
const id = req.params.id;

    db.query("UPDATE Parameters SET IsDeleted = 1 WHERE id= ?", id, (err,result)=>{
if(err) {
console.log(err)
        } }) })

app.listen(PORT, ()=>{
    console.log(`Huit's server is running on ${PORT}`)
})